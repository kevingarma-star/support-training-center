import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PARTS } from '../data/index.js';
import Prose from '../components/Prose.jsx';
import Quiz from '../components/Quiz.jsx';

const PART_COLORS = [
  '#0B7A76','#3A5BD9','#C2410C','#7C3AED',
  '#B45309','#DB2777','#0E7490','#4D7C0F','#1D4ED8','#B91C1C',
];

function getDefaultTab(part, completedLessons, quizScores) {
  if (!part) return null;
  const inc = part.lessons.find(l => !completedLessons[l.id]);
  if (inc) return inc.id;
  return quizScores[part.id]?.passed ? part.lessons[0].id : 'quiz';
}

export default function ModulePage({ completedLessons, quizScores, completeLesson, submitQuiz }) {
  const { partId } = useParams();
  const navigate = useNavigate();
  const partIndex = PARTS.findIndex(p => p.id === partId);
  const part = PARTS[partIndex];

  const [activeTab, setActiveTab] = useState(() => getDefaultTab(part, completedLessons, quizScores));
  const [lastPartId, setLastPartId] = useState(partId);

  // Reset tab when navigating to a different module
  if (partId !== lastPartId) {
    setLastPartId(partId);
    setActiveTab(getDefaultTab(part, completedLessons, quizScores));
  }

  if (!part) {
    return <div className="wrap"><p>Module not found.</p><Link to="/">← Home</Link></div>;
  }

  const color = PART_COLORS[partIndex];
  const activeLesson = activeTab !== 'quiz' ? part.lessons.find(l => l.id === activeTab) : null;
  const allLessonsDone = part.lessons.every(l => completedLessons[l.id]);
  const quizScore = quizScores[part.id];
  const prevPart = PARTS[partIndex - 1];
  const nextPart = PARTS[partIndex + 1];

  function handleMarkDone() {
    completeLesson(activeLesson.id);
    // auto-advance
    const currentIdx = part.lessons.findIndex(l => l.id === activeLesson.id);
    if (currentIdx < part.lessons.length - 1) {
      setActiveTab(part.lessons[currentIdx + 1].id);
    } else {
      setActiveTab('quiz');
    }
  }

  return (
    <div className="wrap">
      <div style={{ marginBottom: 6 }}>
        <Link to="/" style={{ fontSize: 13, color: 'var(--ink-3)' }}>← All modules</Link>
      </div>

      <div className="modhead">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span className="chip" style={{ background: color + '22', color }}>Part {part.part}</span>
          {allLessonsDone && quizScore?.passed && (
            <span className="chip good">✓ Complete</span>
          )}
        </div>
        <h1>{part.title}</h1>
        <p>{part.blurb}</p>
      </div>

      {/* Lesson tabs */}
      <div className="tabs">
        {part.lessons.map(l => {
          const done = completedLessons[l.id];
          return (
            <button
              key={l.id}
              className={`tab${activeTab === l.id ? ' active' : ''}`}
              onClick={() => setActiveTab(l.id)}
            >
              {done && <span className="tick">✓ </span>}
              {l.title}
            </button>
          );
        })}
        <button
          className={`tab${activeTab === 'quiz' ? ' active' : ''}`}
          onClick={() => setActiveTab('quiz')}
          disabled={!allLessonsDone}
          title={!allLessonsDone ? 'Complete all lessons first' : ''}
        >
          {quizScore?.passed && <span className="tick">✓ </span>}
          Quiz
        </button>
      </div>

      {/* Lesson content */}
      {activeLesson && (
        <div className="lesson">
          <h2>{activeLesson.title}</h2>
          <div className="sub">{activeLesson.mins} min read</div>
          <Prose html={activeLesson.body} />
          <div className="lessonfoot">
            <div />
            {!completedLessons[activeLesson.id] ? (
              <button className="btn" onClick={handleMarkDone}>
                Mark complete → {activeLesson.id === part.lessons[part.lessons.length - 1].id ? 'Take quiz' : 'Next lesson'}
              </button>
            ) : (
              <span className="chip good">✓ Completed</span>
            )}
          </div>
        </div>
      )}

      {/* Quiz */}
      {activeTab === 'quiz' && (
        <div className="lesson">
          <h2>{part.quizTitle}</h2>
          <div className="sub">{part.quiz.length} questions · Pass at 80%</div>
          {!allLessonsDone && (
            <div className="note warn">
              <b>Locked</b> Complete all lessons to unlock this quiz.
            </div>
          )}
          {allLessonsDone && (
            <Quiz
              quiz={part.quiz}
              partId={part.id}
              onSubmit={submitQuiz}
              existingScore={quizScore}
            />
          )}
        </div>
      )}

      {/* Next/prev navigation */}
      <div className="lessonfoot" style={{ marginTop: 24 }}>
        {prevPart ? (
          <button className="btn ghost small" onClick={() => navigate(`/module/${prevPart.id}`)}>
            ← {prevPart.title}
          </button>
        ) : <span />}
        {nextPart && quizScore?.passed && (
          <button className="btn small" onClick={() => navigate(`/module/${nextPart.id}`)}>
            {nextPart.title} →
          </button>
        )}
      </div>
    </div>
  );
}
