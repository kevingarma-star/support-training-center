import { Link } from 'react-router-dom';
import { PARTS } from '../data/index.js';

const PART_COLORS = [
  '#0B7A76','#3A5BD9','#C2410C','#7C3AED',
  '#B45309','#DB2777','#0E7490','#4D7C0F','#1D4ED8','#B91C1C',
];

const PART_ICONS = ['👋','🛠','📦','📋','🔧','💬','⚙','🛡','📊','🎯'];

export default function Dashboard({ xp, levelLabel, levelIndex, xpPct, nextXp, completedLessons, quizScores, LEVEL_THRESHOLDS }) {
  const totalLessons = PARTS.reduce((s, p) => s + p.lessons.length, 0);
  const doneCount = Object.keys(completedLessons).length;
  const overallPct = Math.round((doneCount / totalLessons) * 100);
  const quizzesPassed = Object.values(quizScores).filter(q => q.passed).length;

  // find next incomplete part
  const nextPart = PARTS.find(p => {
    const done = p.lessons.filter(l => completedLessons[l.id]).length;
    return done < p.lessons.length || !quizScores[p.id]?.passed;
  });

  return (
    <div className="wrap">
      {/* Hero */}
      <div className="hq">
        <div>
          <p className="eyebrow">Logistimatics Support</p>
          <h1>Training Center</h1>
          <p style={{ color: '#B9CCD0', marginBottom: 16 }}>
            Master every tool, policy, and product. Complete all 10 modules to graduate.
          </p>
          {nextPart && (
            <Link to={`/module/${nextPart.id}`} className="btn glow">
              {doneCount === 0 ? 'Start training' : 'Continue'} →
            </Link>
          )}
          {!nextPart && (
            <span className="chip good" style={{ fontSize: 15, padding: '8px 16px' }}>
              🎓 Training complete!
            </span>
          )}
          <div className="hq-stats" style={{ marginTop: 16 }}>
            <div className="hq-stat"><b>{overallPct}%</b> complete</div>
            <div className="hq-stat"><b>{doneCount}</b> lessons done</div>
            <div className="hq-stat"><b>{quizzesPassed}</b> quizzes passed</div>
            <div className="hq-stat"><b>{xp}</b> XP</div>
          </div>
        </div>

        <div className="lvl">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="rgba(255,255,255,.1)"/>
            <text x="18" y="23" textAnchor="middle" fill="#39D0C4" fontSize="18" fontWeight="800" fontFamily="var(--display)">{levelIndex + 1}</text>
          </svg>
          <div>
            <b>{levelLabel}</b>
            <span>Level {levelIndex + 1}</span>
            <div className="xpbar">
              <i style={{ width: `${xpPct}%` }} />
            </div>
            <span style={{ fontSize: 11, color: '#9FB6BB', marginTop: 4, display: 'block' }}>
              {levelIndex < LEVEL_THRESHOLDS.length - 1 ? `${nextXp - xp} XP to next level` : 'Max level!'}
            </span>
          </div>
        </div>
      </div>

      {/* Next card */}
      {nextPart && (
        <Link to={`/module/${nextPart.id}`} className="nextcard" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="ico" style={{ background: PART_COLORS[PARTS.indexOf(nextPart)] }}>
            <span style={{ fontSize: 22 }}>{PART_ICONS[PARTS.indexOf(nextPart)]}</span>
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 3 }}>Up next</div>
            <h3>{nextPart.title}</h3>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 2 }}>{nextPart.short}</div>
          </div>
          <span style={{ marginLeft: 'auto', color: 'var(--ink-3)', fontSize: 20 }}>→</span>
        </Link>
      )}

      {/* Module grid */}
      <div className="section-h">
        <h2>All modules</h2>
      </div>
      <div className="grid">
        {PARTS.map((p, i) => {
          const color = PART_COLORS[i];
          const lessonsDone = p.lessons.filter(l => completedLessons[l.id]).length;
          const pct = Math.round((lessonsDone / p.lessons.length) * 100);
          const quizPassed = quizScores[p.id]?.passed;
          const complete = pct === 100 && quizPassed;
          return (
            <Link
              key={p.id}
              to={`/module/${p.id}`}
              className="card modcard pcard"
              style={{ '--pc': color, textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="pico"><span style={{ fontSize: 18 }}>{PART_ICONS[i]}</span></div>
                <span className="chip" style={{ fontSize: 11 }}>Part {p.part}</span>
                {complete && <span className="chip good" style={{ fontSize: 11 }}>✓ Done</span>}
              </div>
              <h3>{p.title}</h3>
              <p>{p.short}</p>
              <div className="meta">
                <div className="bar" style={{ flex: 1, height: 4 }}>
                  <i style={{ width: `${pct}%` }} />
                </div>
                <span style={{ marginLeft: 8 }}>{lessonsDone}/{p.lessons.length}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
