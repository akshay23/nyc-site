export type Tab = 'study' | 'interview' | 'bank';

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

export default function CivicsTabs({ active, onChange }: Props) {
  return (
    <div className="civics-tabs">
      <button
        className={`civics-tab${active === 'study' ? ' civics-tab--active' : ''}`}
        onClick={() => onChange('study')}
      >
        STUDY PLAN
      </button>
      <button
        className={`civics-tab${active === 'interview' ? ' civics-tab--active' : ''}`}
        onClick={() => onChange('interview')}
      >
        PRACTICE<br />INTERVIEW
      </button>
      <button
        className={`civics-tab${active === 'bank' ? ' civics-tab--active' : ''}`}
        onClick={() => onChange('bank')}
      >
        QUESTION BANK
      </button>
    </div>
  );
}
