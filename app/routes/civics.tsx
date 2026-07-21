import { useEffect, useState } from 'react';
import CivicsAuthGate from '~/components/civics/CivicsAuthGate';
import CivicsTabs, { type Tab } from '~/components/civics/CivicsTabs';
import StudyPlan from '~/components/civics/StudyPlan';
import PracticeInterview from '~/components/civics/PracticeInterview';
import QuestionBank from '~/components/civics/QuestionBank';
import '../styles/Civics.css';

export function meta() {
  return [{ title: 'Civics Test Prep' }];
}

export default function CivicsPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [tab, setTab] = useState<Tab>('study');

  useEffect(() => {
    setAuthed(sessionStorage.getItem('civics_auth') === 'true');
  }, []);

  if (authed === null) {
    // Avoid SSR mismatch — render nothing until we've checked sessionStorage
    return null;
  }

  if (!authed) {
    return <CivicsAuthGate onSuccess={() => setAuthed(true)} />;
  }

  return (
    <div className="civics-page">
      <CivicsTabs active={tab} onChange={setTab} />
      {tab === 'study' && <StudyPlan />}
      {tab === 'interview' && <PracticeInterview />}
      {tab === 'bank' && <QuestionBank />}
    </div>
  );
}
