import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ModulePage from './pages/ModulePage.jsx';
import PracticePage from './pages/PracticePage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import AppendixPage from './pages/AppendixPage.jsx';
import XpFloat from './components/XpFloat.jsx';
import Confetti from './components/Confetti.jsx';
import LevelUpToast from './components/LevelUpToast.jsx';
import { useProgress } from './hooks/useProgress.js';
import { useXpEvents } from './hooks/useXpEvents.js';
import './App.css';

function AnimatedRoutes({ progress, xpEvents }) {
  const location = useLocation();
  return (
    <div className="page-fade" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Dashboard {...progress} />} />
        <Route
          path="/module/:partId"
          element={
            <ModulePage
              completedLessons={progress.completedLessons}
              quizScores={progress.quizScores}
              completeLesson={(id) => { progress.completeLesson(id); xpEvents.emit(20); }}
              submitQuiz={progress.submitQuiz}
            />
          }
        />
        <Route
          path="/practice"
          element={
            <PracticePage
              completedScenarios={progress.completedScenarios}
              completeScenario={(idx) => { progress.completeScenario(idx); xpEvents.emit(40); }}
            />
          }
        />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/appendix" element={<AppendixPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const progress = useProgress();
  const xpEvents = useXpEvents();

  const { lastGain, clearLastGain, leveledUp, clearLevelUp } = progress;

  // Derive confetti from lastGain — cleared when confetti finishes
  const showConfetti = !!lastGain?.quizPassed;
  const handleConfettiDone = useCallback(() => clearLastGain(), [clearLastGain]);

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
          onClose={() => setSideOpen(false)}
          isOpen={sideOpen}
        />
        {sideOpen && <div className="scrim" onClick={() => setSideOpen(false)} />}

        <main className="main">
          <div className="topbar">
            <button className="btn ghost small" onClick={() => setSideOpen(v => !v)} aria-label="Open navigation">
              ☰ Menu
            </button>
            <b>Training Center</b>
            <span className="chip prog">{progress.xp} XP</span>
          </div>
          <AnimatedRoutes progress={progress} xpEvents={xpEvents} />
        </main>
      </div>

      <XpFloat events={xpEvents.events} />
      <Confetti active={showConfetti} onDone={handleConfettiDone} />
      <LevelUpToast levelLabel={progress.levelLabel} visible={leveledUp} onDone={clearLevelUp} />
    </BrowserRouter>
  );
}
