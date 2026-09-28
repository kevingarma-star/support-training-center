import { useState } from 'react';
import { SCENARIOS } from '../data/index.js';

export default function PracticePage({ completedScenarios, completeScenario }) {
  const [active, setActive] = useState(null);
  const [draft, setDraft] = useState('');
  const [showModel, setShowModel] = useState(false);
  const [done, setDone] = useState({});

  function openScenario(i) {
    setActive(i);
    setDraft('');
    setShowModel(false);
  }

  function markDone(i) {
    setDone(prev => ({ ...prev, [i]: true }));
    completeScenario(i);
  }

  if (active !== null) {
    const s = SCENARIOS[active];
    const isDone = done[active] || completedScenarios[active];
    return (
      <div className="wrap">
        <button className="btn ghost small" style={{ marginBottom: 16 }} onClick={() => setActive(null)}>
          ← All scenarios
        </button>

        <div className="modhead">
          <div style={{ display: 'flex', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
            <span className="chip prog">{s.tag}</span>
            <span className="chip">{active + 1} of {SCENARIOS.length}</span>
          </div>
          <h1>{s.title}</h1>
        </div>

        <div className="cust">
          <span className="lbl">Customer message</span>
          {s.customer}
        </div>

        {s.notes && (
          <div className="note">
            <b>Context</b>
            <div dangerouslySetInnerHTML={{ __html: s.notes }} />
          </div>
        )}

        <div style={{ marginTop: 18 }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Your reply</label>
          <textarea
            value={draft}
            onChange={e => setDraft(e.target.value)}
            placeholder="Write your reply to this customer..."
            rows={8}
          />
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
          <button
            className="btn ghost small"
            onClick={() => setShowModel(v => !v)}
          >
            {showModel ? 'Hide' : 'Show'} model reply
          </button>
          {!isDone && draft.trim().length > 50 && (
            <button className="btn small" onClick={() => markDone(active)}>
              Mark as practiced +40 XP
            </button>
          )}
          {isDone && <span className="chip good">✓ Practiced</span>}
        </div>

        {showModel && s.modelReply && (
          <div className="fb" style={{ marginTop: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 13, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Model reply</div>
            <div style={{ whiteSpace: 'pre-wrap', fontSize: 14.5 }}>{s.modelReply}</div>
            {s.rubric && (
              <div>
                <h4>What to check</h4>
                <div dangerouslySetInnerHTML={{ __html: s.rubric }} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="wrap">
      <div className="modhead">
        <span className="eyebrow">Practice Lab</span>
        <h1>Email drafting exercises</h1>
        <p>Practice writing real support replies. Work through each scenario, draft your response, then compare with the model reply.</p>
      </div>

      <div className="grid">
        {SCENARIOS.map((s, i) => {
          const isDone = done[i] || completedScenarios[i];
          return (
            <button
              key={i}
              className="card modcard"
              style={{ textAlign: 'left' }}
              onClick={() => openScenario(i)}
            >
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span className="chip prog" style={{ fontSize: 11 }}>{s.tag}</span>
                {isDone && <span className="chip good" style={{ fontSize: 11 }}>✓ Done</span>}
              </div>
              <h3 style={{ marginTop: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--ink-2)', margin: 0 }}>
                {s.customer.substring(0, 120)}{s.customer.length > 120 ? '…' : ''}
              </p>
              <div className="meta" style={{ paddingTop: 10 }}>
                <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>+40 XP</span>
                <span style={{ color: 'var(--accent)' }}>Open →</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
