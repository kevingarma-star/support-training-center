import { Link, useLocation } from 'react-router-dom';
import { PARTS } from '../data/index.js';

const PART_COLORS = [
  '#0B7A76','#3A5BD9','#C2410C','#7C3AED',
  '#B45309','#DB2777','#0E7490','#4D7C0F','#1D4ED8','#B91C1C',
];

export default function Sidebar({ xp, levelLabel, xpPct, completedLessons, quizScores, onClose, isOpen }) {
  const location = useLocation();

  const totalLessons = PARTS.reduce((s, p) => s + p.lessons.length, 0);
  const doneCount = Object.keys(completedLessons).length;
  const overallPct = Math.round((doneCount / totalLessons) * 100);

  const extraLinks = [
    { to: '/practice', label: 'Practice Lab', icon: '✍' },
    { to: '/resources', label: 'Resources', icon: '📚' },
    { to: '/appendix', label: 'Appendix', icon: '📎' },
  ];

  return (
    <aside className={`side${isOpen ? ' open' : ''}`} id="side" aria-label="Course navigation">
      <div className="brand">
        <div className="brand-mark">
          <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="9" fill="var(--accent)"/>
            <path d="M10 24L17 10L24 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 19.5H21.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <b>Training Center</b>
          <span>Logistimatics Support</span>
        </div>
      </div>

      <div className="overall">
        <div className="overall-top">
          <span>Overall progress</span>
          <strong>{overallPct}%</strong>
        </div>
        <div className="bar"><i style={{ width: `${overallPct}%` }} /></div>
        <div className="sync">
          <span className={`dot ${overallPct === 100 ? 'on' : ''}`} />
          {doneCount} / {totalLessons} lessons
        </div>
      </div>

      <div className="overall" style={{ background: 'var(--accent-soft)' }}>
        <div className="overall-top">
          <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{levelLabel}</span>
          <strong>{xp} XP</strong>
        </div>
        <div className="bar"><i style={{ width: `${xpPct}%`, background: 'var(--accent)' }} /></div>
      </div>

      <div>
        <p className="navlabel">Modules</p>
        <ul className="route">
          {PARTS.map((p, i) => {
            const color = PART_COLORS[i];
            const lessonsDone = p.lessons.filter(l => completedLessons[l.id]).length;
            const pct = Math.round((lessonsDone / p.lessons.length) * 100);
            const quizPassed = quizScores[p.id]?.passed;
            const isActive = location.pathname.startsWith(`/module/${p.id}`);
            return (
              <li key={p.id}>
                <Link
                  to={`/module/${p.id}`}
                  className={`navbtn${isActive ? ' active' : ''}`}
                  onClick={onClose}
                >
                  <span className="pin">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill={pct === 100 && quizPassed ? 'var(--good)' : color} opacity={pct === 100 && quizPassed ? 1 : 0.15 + pct * 0.0085} />
                      <text x="12" y="16" textAnchor="middle" fill={pct > 60 || (pct === 100 && quizPassed) ? '#fff' : color} fontSize="9" fontWeight="700" fontFamily="var(--display)">{p.part}</text>
                    </svg>
                  </span>
                  <span>
                    <span style={{ display: 'block' }}>{p.title}</span>
                    <small>{lessonsDone}/{p.lessons.length} lessons{quizPassed ? ' · Quiz ✓' : ''}</small>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <p className="navlabel">More</p>
        <ul className="navplain">
          {extraLinks.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`navbtn${location.pathname === l.to ? ' active' : ''}`}
                onClick={onClose}
              >
                <span className="ic">{l.icon}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
