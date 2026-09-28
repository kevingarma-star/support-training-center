import { useEffect } from 'react';

export default function LevelUpToast({ levelLabel, visible, onDone }) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onDone, 3200);
    return () => clearTimeout(t);
  }, [visible, onDone]);

  if (!visible) return null;

  return (
    <div className="levelup-toast" aria-live="polite">
      <span className="levelup-icon">⭐</span>
      <div>
        <div className="levelup-label">Level up!</div>
        <div className="levelup-name">{levelLabel}</div>
      </div>
    </div>
  );
}
