import { useState } from 'react';
import { APPENDIX } from '../data/index.js';
import Prose from '../components/Prose.jsx';

export default function AppendixPage() {
  const [open, setOpen] = useState(null);

  return (
    <div className="wrap">
      <div className="modhead">
        <span className="eyebrow">Reference</span>
        <h1>Appendix</h1>
        <p>Quick-reference sheets for URLs, discount codes, troubleshooting, and key terms.</p>
      </div>

      {APPENDIX.map((section, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="card"
            style={{ marginBottom: 10, cursor: 'pointer' }}
            onClick={() => setOpen(isOpen ? null : i)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0 }}>{section.title}</h3>
              <span style={{ color: 'var(--ink-3)', fontSize: 20, lineHeight: 1 }}>
                {isOpen ? '↑' : '↓'}
              </span>
            </div>
            {isOpen && (
              <div style={{ marginTop: 16 }} onClick={e => e.stopPropagation()}>
                <Prose html={section.body} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
