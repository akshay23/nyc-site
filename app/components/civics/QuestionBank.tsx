import { useState } from 'react';
import { civicsQuestions, type Category } from '~/data/civicsQuestions';
import QuestionCard from './QuestionCard';

const CATEGORIES: Category[] = [
  'Principles of American Government',
  'System of Government',
  'Rights and Responsibilities',
  'American History: Colonial Period and Independence',
  'American History: The 1800s',
  'American History: Recent History',
  'American Symbols',
  'National Holidays',
];

export default function QuestionBank() {
  const [search, setSearch] = useState('');
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  const query = search.trim().toLowerCase();

  const filtered = query
    ? civicsQuestions.filter(q =>
        q.question.toLowerCase().includes(query) ||
        q.answers.some(a => a.toLowerCase().includes(query))
      )
    : null;

  function countForCategory(cat: Category) {
    return civicsQuestions.filter(q => q.category === cat).length;
  }

  function questionsForCategory(cat: Category) {
    return civicsQuestions.filter(q => q.category === cat);
  }

  function toggleCategory(cat: Category) {
    setOpenCategory(prev => (prev === cat ? null : cat));
  }

  return (
    <div className="civics-question-bank">
      <h2 className="civics-section-title">All {civicsQuestions.length} questions</h2>
      <p className="civics-section-subtitle">
        Browse by category, or search for a keyword. Good for the "read questions aloud to each other" study mode.
      </p>

      <input
        className="civics-search"
        type="text"
        placeholder="Search questions or answers..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filtered ? (
        <div className="civics-search-results">
          {filtered.length === 0
            ? <p className="civics-no-results">No questions match your search.</p>
            : filtered.map(q => <QuestionCard key={q.id} question={q} />)
          }
        </div>
      ) : (
        <div className="civics-categories">
          {CATEGORIES.map(cat => (
            <div key={cat} className="civics-category-block">
              <button
                className="civics-category-card"
                onClick={() => toggleCategory(cat)}
              >
                <span className="civics-category-name">{cat}</span>
                <span className="civics-category-count">{countForCategory(cat)} Q</span>
              </button>
              {openCategory === cat && (
                <div className="civics-category-questions">
                  {questionsForCategory(cat).map(q => (
                    <QuestionCard key={q.id} question={q} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <p className="civics-bank-footer">
        Sourced from USCIS's 2025 (128-question) civics test list. Answers for officeholder questions reflect July 2026 — verify at uscis.gov/citizenship/testupdates before your interview.
      </p>
    </div>
  );
}
