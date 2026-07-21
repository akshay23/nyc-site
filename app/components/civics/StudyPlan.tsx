const OFFICEHOLDERS = [
  { role: 'President', name: 'Donald Trump' },
  { role: 'Vice President', name: 'JD Vance' },
  { role: 'Speaker of the House', name: 'Mike Johnson' },
  { role: 'Chief Justice', name: 'John Roberts' },
  { role: 'NY Governor', name: 'Kathy Hochul' },
  { role: 'NY U.S. Senators', name: 'Chuck Schumer & Kirsten Gillibrand' },
  { role: 'U.S. Rep (NY-14 / Jackson Heights)', name: 'Alexandria Ocasio-Cortez' },
];

const PHASES = [
  {
    num: 1,
    days: 'DAYS 1–5',
    title: 'Government structure',
    body: 'Principles of Government + the first half of System of Government (Congress: House & Senate, powers, terms). This is the densest, most cross-referenced block — get it first while attention is freshest.',
    tags: ['Ch. 1–2a', '~38 questions'],
  },
  {
    num: 2,
    days: 'DAYS 6–9',
    title: 'President, courts & your rights',
    body: 'Finish System of Government (President, Cabinet, Supreme Court, federal vs. state powers) then Rights and Responsibilities. Memorize the current-officeholder answers now — they\'re the easiest points to lose.',
    tags: ['Ch. 2b–3', '~29 questions'],
  },
  {
    num: 3,
    days: 'DAYS 10–15',
    title: 'The American story',
    body: 'Colonial period through the 1800s (Revolution, founders, Civil War) then Recent History (World Wars, Cold War, civil rights, 9/11). Treat it as one narrative arc rather than isolated facts — it sticks better that way.',
    tags: ['Ch. 4–6', '~46 questions'],
  },
  {
    num: 4,
    days: 'DAYS 16–18',
    title: 'Symbols, holidays & first full mix',
    body: 'Quick, low-effort category (flag, anthem, capital, national holidays) — a confidence boost before your first full practice interview pulling from all 128.',
    tags: ['Ch. 7–8', '~10 questions'],
  },
  {
    num: 5,
    days: 'DAY 19 ONWARD',
    title: 'Daily practice interviews',
    body: 'One round of the Practice Interview tab per day, together. It automatically leans on whatever you\'ve missed before, and stops the same way the real interview does — at 12 correct or 9 incorrect. Keep going until you\'re consistently passing with room to spare.',
    tags: ['Repeat until interview day'],
  },
];

export default function StudyPlan() {
  return (
    <div className="civics-study-plan">
      <h2 className="civics-section-title">Your study plan</h2>
      <p className="civics-section-subtitle">
        Built around 15–20 minute sessions. Easiest move: run your civics round right after another routine so it rides on a habit that already exists instead of competing with a new one.
      </p>

      <div className="civics-officeholder-card">
        <div className="civics-officeholder-label">ANSWER THESE WITH TODAY'S NAMES</div>
        {OFFICEHOLDERS.map((o, i) => (
          <div key={i} className="civics-officeholder-row">
            <span className="civics-officeholder-role">{o.role}</span>
            <span className="civics-officeholder-name">{o.name}</span>
          </div>
        ))}
        <p className="civics-officeholder-note">
          Current as of July 2026. Recheck at uscis.gov/citizenship/testupdates the week of your interview — officeholders can change.
        </p>
      </div>

      <div className="civics-timeline">
        {PHASES.map((phase, i) => (
          <div key={i} className="civics-timeline-item">
            <div className="civics-timeline-left">
              <div className="civics-timeline-circle">{phase.num}</div>
              {i < PHASES.length - 1 && <div className="civics-timeline-line" />}
            </div>
            <div className="civics-timeline-content">
              <div className="civics-timeline-days">{phase.days}</div>
              <h3 className="civics-timeline-title">{phase.title}</h3>
              <p className="civics-timeline-body">{phase.body}</p>
              <div className="civics-tags">
                {phase.tags.map((tag, j) => (
                  <span key={j} className="civics-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
