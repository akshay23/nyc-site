import { useState } from 'react';
import type { CivicsQuestion } from '~/data/civicsQuestions';

interface Props {
  question: CivicsQuestion;
}

export default function QuestionCard({ question }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="civics-qcard" onClick={() => setOpen(o => !o)}>
      <div className="civics-qcard-question">
        <span>{question.question}</span>
        <span className="civics-qcard-toggle">{open ? '▲' : '▼'}</span>
      </div>
      {open && (
        <div className="civics-qcard-answers">
          {question.answers.length === 1
            ? <p>{question.answers[0]}</p>
            : (
              <>
                <p className="civics-qcard-answers-hint">Any one of the following:</p>
                <ul>
                  {question.answers.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </>
            )
          }
        </div>
      )}
    </div>
  );
}
