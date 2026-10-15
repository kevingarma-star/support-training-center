import { useState } from 'react';
import { VIDEO_CATEGORIES } from '../data/videos.js';

function VideoCard({ title, loom }) {
  return (
    <div className="vc">
      <div className="vc-title">{title}</div>
      {loom ? (
        <div className="video-wrap">
          <iframe
            src={`https://www.loom.com/embed/${loom}`}
            allowFullScreen
            title={title}
          />
        </div>
      ) : (
        <div className="vc-ph">
          <div className="vc-ph-in">
            <div className="vc-ph-ico">▶</div>
            <span>Coming soon</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VideosPage() {
  const [active, setActive] = useState('all');

  const totalReady = VIDEO_CATEGORIES.reduce((s, c) => s + c.videos.filter(v => v.loom).length, 0);

  const visibleCats = active === 'all'
    ? VIDEO_CATEGORIES
    : VIDEO_CATEGORIES.filter(c => c.id === active);

  return (
    <div className="wrap">
      <div className="modhead">
        <span className="eyebrow">GPX Admin</span>
        <h1>Video Walkthroughs</h1>
        <p>Step-by-step Loom guides organized by section. <span className="chip prog" style={{ verticalAlign: 'middle' }}>{totalReady} ready</span></p>
      </div>

      <div className="tabs">
        <button
          className={`tab${active === 'all' ? ' active' : ''}`}
          onClick={() => setActive('all')}
        >
          All
          <span className="vc-badge">{totalReady}</span>
        </button>
        {VIDEO_CATEGORIES.map(cat => {
          const ready = cat.videos.filter(v => v.loom).length;
          return (
            <button
              key={cat.id}
              className={`tab${active === cat.id ? ' active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
              {ready > 0 && <span className="vc-badge">{ready}</span>}
            </button>
          );
        })}
      </div>

      {visibleCats.map(cat => (
        <div key={cat.id} className="vc-section">
          {active === 'all' && (
            <div className="section-h" style={{ marginTop: 28 }}>
              <h2>{cat.label}</h2>
              <span className="chip">
                {cat.videos.filter(v => v.loom).length}/{cat.videos.length} videos
              </span>
            </div>
          )}
          <div className="vid-grid">
            {cat.videos.map((v, i) => (
              <VideoCard key={i} title={v.title} loom={v.loom} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
