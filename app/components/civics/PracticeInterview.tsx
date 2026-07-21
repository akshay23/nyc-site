import { useState } from 'react';
import { civicsQuestions, type CivicsQuestion } from '~/data/civicsQuestions';

const MAX_QUESTIONS = 20;
const PASS_CORRECT = 12;
const FAIL_INCORRECT = 9;

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/[^a-z0-9 ]/g, '');
}

function isCorrect(userAnswer: string, q: CivicsQuestion): boolean {
  const u = normalize(userAnswer);
  return q.answers.some(a => normalize(a) === u);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = 'idle' | 'active' | 'done';

interface InterviewState {
  phase: Phase;
  questions: CivicsQuestion[];
  currentIndex: number;
  results: boolean[];
  currentInput: string;
  submitted: boolean;
}

const INITIAL: InterviewState = {
  phase: 'idle',
  questions: [],
  currentIndex: 0,
  results: [],
  currentInput: '',
  submitted: false,
};

export default function PracticeInterview() {
  const [state, setState] = useState<InterviewState>(INITIAL);

  function startInterview() {
    setState({
      ...INITIAL,
      phase: 'active',
      questions: shuffle(civicsQuestions).slice(0, MAX_QUESTIONS),
    });
  }

  function submitAnswer() {
    const { questions, currentIndex, results, currentInput } = state;
    const q = questions[currentIndex];
    const correct = isCorrect(currentInput, q);
    const newResults = [...results, correct];

    const correctCount = newResults.filter(Boolean).length;
    const incorrectCount = newResults.filter(r => !r).length;
    const done =
      correctCount >= PASS_CORRECT ||
      incorrectCount >= FAIL_INCORRECT ||
      currentIndex + 1 >= MAX_QUESTIONS;

    setState(s => ({
      ...s,
      results: newResults,
      submitted: true,
      phase: done ? 'done' : 'active',
    }));
  }

  function nextQuestion() {
    setState(s => ({
      ...s,
      currentIndex: s.currentIndex + 1,
      currentInput: '',
      submitted: false,
    }));
  }

  if (state.phase === 'idle') {
    return (
      <div className="civics-interview">
        <h2 className="civics-section-title">Practice interview</h2>
        <p className="civics-section-subtitle">
          Mirrors the real format: up to 20 questions, drawn from all {civicsQuestions.length}. It stops the moment either of you would already know the outcome — 12 correct (pass) or 9 incorrect.
        </p>
        <div className="civics-interview-start">
          <h3 className="civics-interview-ready">Ready for today's round?</h3>
          <p className="civics-interview-ready-sub">
            Questions are drawn randomly from the full bank each time you begin.
          </p>
          <button className="civics-btn-primary civics-btn-large" onClick={startInterview}>
            Begin practice interview
          </button>
        </div>
        <p className="civics-bank-footer">
          Sourced from USCIS's 2025 (128-question) civics test list. Answers for officeholder questions reflect July 2026 — verify at uscis.gov/citizenship/testupdates before your interview.
        </p>
      </div>
    );
  }

  if (state.phase === 'done') {
    const correct = state.results.filter(Boolean).length;
    const incorrect = state.results.filter(r => !r).length;
    const total = state.results.length;
    const passed = correct >= PASS_CORRECT;

    return (
      <div className="civics-interview">
        <div className={`civics-result ${passed ? 'civics-result--pass' : 'civics-result--fail'}`}>
          <div className="civics-result-verdict">{passed ? 'PASS' : 'FAIL'}</div>
          <div className="civics-result-score">{correct} correct out of {total} asked</div>
          <p className="civics-result-detail">
            {passed
              ? `You answered ${correct} correctly — that meets the 12-correct threshold.`
              : `You answered ${incorrect} incorrectly — the interview stops at 9 incorrect.`
            }
          </p>
          <button className="civics-btn-primary" onClick={startInterview}>Try Again</button>
        </div>
      </div>
    );
  }

  // Active
  const { questions, currentIndex, results, currentInput, submitted } = state;
  const q = questions[currentIndex];
  const correct = results.filter(Boolean).length;
  const incorrect = results.filter(r => !r).length;
  const lastCorrect = submitted ? results[results.length - 1] : null;

  return (
    <div className="civics-interview">
      <div className="civics-interview-progress">
        <span>Question {currentIndex + 1} of {MAX_QUESTIONS}</span>
        <span className="civics-score-correct">Correct: {correct}</span>
        <span className="civics-score-incorrect">Incorrect: {incorrect}</span>
      </div>

      <div className="civics-interview-card">
        <p className="civics-interview-question">{q.question}</p>

        {!submitted ? (
          <form onSubmit={e => { e.preventDefault(); submitAnswer(); }} className="civics-interview-form">
            <input
              className="civics-auth-input"
              type="text"
              placeholder="Type your answer..."
              value={currentInput}
              onChange={e => setState(s => ({ ...s, currentInput: e.target.value }))}
              autoFocus
            />
            <button type="submit" className="civics-btn-primary" disabled={!currentInput.trim()}>
              Submit
            </button>
          </form>
        ) : (
          <div className={`civics-interview-feedback ${lastCorrect ? 'civics-feedback--correct' : 'civics-feedback--incorrect'}`}>
            <div className="civics-feedback-verdict">
              {lastCorrect ? '✓ Correct' : '✗ Incorrect'}
            </div>
            {!lastCorrect && (
              <div className="civics-feedback-answer">
                <span className="civics-feedback-label">Accepted answer: </span>
                {q.answers[0]}
                {q.answers.length > 1 && ` (or ${q.answers.length - 1} other${q.answers.length > 2 ? 's' : ''})`}
              </div>
            )}
            <button className="civics-btn-primary" onClick={nextQuestion}>
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
