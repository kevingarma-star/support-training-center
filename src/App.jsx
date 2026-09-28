import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ModulePage from './pages/ModulePage.jsx';
import PracticePage from './pages/PracticePage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import AppendixPage from './pages/AppendixPage.jsx';
import { useProgress } from './hooks/useProgress.js';
import './App.css';

export default function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const progress = useProgress();

  function closeSide() { setSideOpen(false); }

  return (
    <BrowserRouter basename="/support-training-center">
      <div className="app">
        <Sidebar
          xp={progress.xp}
          levelLabel={progress.levelLabel}
          levelIndex={progress.levelIndex}
          xpPct={progress.xpPct}
          nextXp={progress.nextXp}
          completedLessons={progress.completedLessons}
          quizScores={progress.quizScores}
          onClose={closeSide}
          isOpen={sideOpen}
        />
        {sideOpen && <div className="scrim" onClick={closeSide} />}

        <main className="main">
          <div className="topbar">
            <button className="btn ghost small" onClick={() => setSideOpen(v => !v)} aria-label="Open navigation">
              ☰ Menu
            </button>
            <b>Training Center</b>
            <span className="chip prog">{progress.xp} XP</span>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  xp={progress.xp}
                  levelLabel={progress.levelLabel}
                  levelIndex={progress.levelIndex}
                  xpPct={progress.xpPct}
                  nextXp={progress.nextXp}
                  completedLessons={progress.completedLessons}
                  quizScores={progress.quizScores}
                  LEVEL_THRESHOLDS={progress.LEVEL_THRESHOLDS}
                />
              }
            />
            <Route
              path="/module/:partId"
              element={
                <ModulePage
                  completedLessons={progress.completedLessons}
                  quizScores={progress.quizScores}
                  completeLesson={progress.completeLesson}
                  submitQuiz={progress.submitQuiz}
                />
              }
            />
            <Route
              path="/practice"
              element={
                <PracticePage
                  completedScenarios={progress.completedScenarios}
                  completeScenario={progress.completeScenario}
                />
              }
            />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/appendix" element={<AppendixPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
