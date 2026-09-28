import { useState } from 'react';
import { RESOURCES } from '../data/index.js';

export default function ResourcesPage() {
  const [query, setQuery] = useState('');

  const filtered = RESOURCES.map(group => ({
    ...group,
    links: group.links.filter(l =>
      !query || l.label.toLowerCase().includes(query.toLowerCase())
    ),
  })).filter(g => g.links.length > 0);

  return (
    <div className="wrap">
      <div className="modhead">
        <span className="eyebrow">Reference</span>
        <h1>Resources</h1>
        <p>Internal references, tools, video walkthroughs, and Help Center articles.</p>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search resources…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ maxWidth: 400 }}
        />
      </div>

      {filtered.map(group => (
        <div key={group.label} style={{ marginBottom: 28 }}>
          <div className="section-h" style={{ marginTop: 0 }}>
            <h2>{group.label}</h2>
          </div>
          <ul className="reslist">
            {group.links.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
                {link.note && <span>{link.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {filtered.length === 0 && (
        <p style={{ color: 'var(--ink-3)' }}>No results for "{query}"</p>
      )}
    </div>
  );
}
