import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'stc_progress_v1';

const LEVEL_THRESHOLDS = [
  { xp: 0,    label: 'Signal Seeker' },
  { xp: 300,  label: 'Pathfinder' },
  { xp: 700,  label: 'Navigator' },
  { xp: 1200, label: 'Route Master' },
  { xp: 1800, label: 'Tracker Pro' },
  { xp: 2500, label: 'Support Ace' },
];

const XP_LESSON    = 20;
const XP_QUIZ_PASS = 100;
const XP_QUIZ_ACE  = 50;   // bonus for 100%
const XP_SCENARIO  = 40;

function getLevel(xp) {
  let level = 0;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i].xp) level = i;
  }
  return level;
}

function getNextThreshold(xp) {
  for (const t of LEVEL_THRESHOLDS) {
    if (t.xp > xp) return t.xp;
  }
  return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1].xp;
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function save(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
}

function defaultState() {
  return {
    xp: 0,
    completedLessons: {},   // lessonId -> true
    quizScores: {},          // partId -> { score, total, passed }
    completedScenarios: {},  // scenarioIndex -> true
    badges: {},              // badgeId -> true
  };
}

export function useProgress() {
  const [state, setState] = useState(() => load() || defaultState());

  useEffect(() => {
    save(state);
  }, [state]);

  const completeLesson = useCallback((lessonId) => {
    setState(prev => {
      if (prev.completedLessons[lessonId]) return prev;
      const next = {
        ...prev,
        xp: prev.xp + XP_LESSON,
        completedLessons: { ...prev.completedLessons, [lessonId]: true },
      };
      return next;
    });
  }, []);

  const submitQuiz = useCallback((partId, score, total) => {
    setState(prev => {
      const passed = score / total >= 0.8;
      const ace = score === total;
      const existing = prev.quizScores[partId];
      // only award XP if this is first passing attempt or better score
      const prevPassed = existing?.passed;
      const xpGain = !prevPassed && passed ? XP_QUIZ_PASS + (ace ? XP_QUIZ_ACE : 0) : 0;
      return {
        ...prev,
        xp: prev.xp + xpGain,
        quizScores: {
          ...prev.quizScores,
          [partId]: { score, total, passed },
        },
      };
    });
  }, []);

  const completeScenario = useCallback((idx) => {
    setState(prev => {
      if (prev.completedScenarios[idx]) return prev;
      return {
        ...prev,
        xp: prev.xp + XP_SCENARIO,
        completedScenarios: { ...prev.completedScenarios, [idx]: true },
      };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setState(defaultState());
  }, []);

  const { xp, completedLessons, quizScores, completedScenarios } = state;
  const levelIndex = getLevel(xp);
  const levelLabel = LEVEL_THRESHOLDS[levelIndex].label;
  const nextXp = getNextThreshold(xp);
  const prevXp = LEVEL_THRESHOLDS[levelIndex].xp;
  const xpPct = levelIndex === LEVEL_THRESHOLDS.length - 1
    ? 100
    : Math.round(((xp - prevXp) / (nextXp - prevXp)) * 100);

  return {
    xp,
    levelIndex,
    levelLabel,
    xpPct,
    nextXp,
    completedLessons,
    quizScores,
    completedScenarios,
    completeLesson,
    submitQuiz,
    completeScenario,
    resetProgress,
    LEVEL_THRESHOLDS,
  };
}
