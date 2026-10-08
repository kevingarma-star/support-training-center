import { useState } from 'react';

export default function SlideLesson({ lesson }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir]     = useState(null);
  const [animKey, setAnimKey] = useState(0);

  const total = lesson.slides.length;
  const slide = lesson.slides[index];

  function go(next) {
    if (next < 0 || next >= total) return;
    setDir(next > index ? 'next' : 'prev');
    setAnimKey(k => k + 1);
    setIndex(next);
  }

  return (
    <div className="slides-wrap">
      {lesson.chips && (
        <div className="row" style={{ gap: 8, marginBottom: 20 }}>
          {lesson.chips.map(c => <span key={c} className="chip prog">{c}</span>)}
        </div>
      )}

      <div className="slide-dots">
        {lesson.slides.map((s, i) => (
          <button
            key={i}
            className={`sdot${i === index ? ' active' : ''}`}
            style={i === index ? { background: slide.color } : {}}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}: ${s.value}`}
          />
        ))}
      </div>

      <div
        key={animKey}
        className={`slide${dir ? ` slide-${dir}` : ''}`}
        style={{ '--scolor': slide.color }}
      >
        <div className="slide-counter">{index + 1} / {total}</div>
        <div className="slide-value" style={{ color: slide.color }}>{slide.value}</div>
        <div className="slide-tagline">{slide.tagline}</div>
        <div className="slide-sections">
          <div className="slide-section">
            <span className="slide-label">What it means</span>
            <p>{slide.what}</p>
          </div>
          <div className="slide-section">
            <span className="slide-label">In a support conversation</span>
            <p>{slide.support}</p>
          </div>
        </div>
      </div>

      <div className="slide-nav">
        <button className="btn ghost small" onClick={() => go(index - 1)} disabled={index === 0}>← Prev</button>
        <button
          className="btn small"
          onClick={() => go(index + 1)}
          disabled={index === total - 1}
          style={{ background: slide.color, borderColor: slide.color, color: '#fff' }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
