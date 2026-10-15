import { useState } from 'react';
import { VIDEO_CATEGORIES } from '../data/videos.js';

export default function VideoGrid() {
  const [active, setActive] = useState('all');

  const total = VIDEO_CATEGORIES.reduce((s, c) => s + c.videos.length, 0);
  const visibleCats = active === 'all'
    ? VIDEO_CATEGORIES
    : VIDEO_CATEGORIES.filter(c => c.id === active);

  return (
    <>
      <div className="tabs" style={{ marginBottom: 4 }}>
        <button
          className={`tab${active === 'all' ? ' active' : ''}`}
          onClick={() => setActive('all')}
        >
          All <span className="vc-badge">{total}</span>
        </button>
        {VIDEO_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`tab${active === cat.id ? ' active' : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label} <span className="vc-badge">{cat.videos.length}</span>
          </button>
        ))}
      </div>

      {visibleCats.map(cat => (
        <div key={cat.id} className="vc-section">
          {active === 'all' && (
            <div className="section-h" style={{ marginTop: 20 }}>
              <h2>{cat.label}</h2>
            </div>
          )}
          {cat.videos.map((v, i) => (
            <div key={i} className="vid-block">
              <div className="vid-title">{v.title}</div>
              <div className="video-wrap">
                <iframe
                  src={`https://www.loom.com/embed/${v.loom}`}
                  allowFullScreen
                  title={v.title}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
