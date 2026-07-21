import { useState } from 'react';

interface Props {
  onSuccess: () => void;
}

export default function CivicsAuthGate({ onSuccess }: Props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === '2026') {
      sessionStorage.setItem('civics_auth', 'true');
      onSuccess();
    } else {
      setError(true);
      setValue('');
    }
  }

  return (
    <div className="civics-auth-gate">
      <div className="civics-auth-box">
        <h1 className="civics-auth-title">Civics Test Prep</h1>
        <p className="civics-auth-subtitle">Enter the password to continue</p>
        <form onSubmit={handleSubmit} className="civics-auth-form">
          <input
            type="password"
            className="civics-auth-input"
            value={value}
            onChange={e => { setValue(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
          />
          {error && <p className="civics-auth-error">Incorrect password. Please try again.</p>}
          <button type="submit" className="civics-btn-primary">Continue</button>
        </form>
      </div>
    </div>
  );
}
