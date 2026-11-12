import { useState } from 'react';

const PASS_THRESHOLD = 0.8;

export default function Quiz({ quiz, partId, onSubmit, existingScore }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [shaking, setShaking] = useState({});  // qi -> true

  function pick(qi, oi) {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qi]: oi }));
  }

  function submit() {
    if (Object.keys(answers).length < quiz.length) return;
    const s = quiz.reduce((acc, q, i) => acc + (answers[i] === q.a ? 1 : 0), 0);
    // trigger shake on wrong answers
    const wrongOnes = {};
    quiz.forEach((q, i) => { if (answers[i] !== q.a) wrongOnes[i] = true; });
    setShaking(wrongOnes);
    setTimeout(() => setShaking({}), 500);
    setScore(s);
    setSubmitted(true);
    onSubmit(partId, s, quiz.length);
  }

  function retry() {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  }

  const passed = score / quiz.length >= PASS_THRESHOLD;

  if (existingScore && !submitted) {
    const prevPassed = existingScore.passed;
    return (
      <div>
        <div className={`result ${prevPassed ? 'pass' : 'fail'}`}>
          <div>
            <b>{existingScore.score}/{existingScore.total}</b>
            <div>{prevPassed ? 'Passed ✓' : 'Not yet — try again'}</div>
          </div>
        </div>
        <button className="btn ghost small" onClick={retry}>Retake quiz</button>
      </div>
    );
  }

  return (
    <div>
      {quiz.map((item, qi) => {
        const chosen = answers[qi];
        const correct = item.a;
        return (
          <div className={`q${shaking[qi] ? ' q-shake' : ''}`} key={qi}>
            <h4><span>Q{qi + 1}.</span> {item.q}</h4>
            {item.o.map((opt, oi) => {
              let cls = 'opt';
              if (submitted) {
                if (oi === correct) cls += ' correct';
                else if (oi === chosen && oi !== correct) cls += ' wrong';
              }
              return (
                <label key={oi} className={cls} onClick={() => pick(qi, oi)}>
                  <input
                    type="radio"
                    name={`q${qi}`}
                    checked={chosen === oi}
                    onChange={() => pick(qi, oi)}
                    disabled={submitted}
                  />
                  {opt}
                </label>
              );
            })}
            {submitted && item.why && <div className="why">{item.why}</div>}
          </div>
        );
      })}

      {!submitted && (
        <button
          className="btn"
          onClick={submit}
          disabled={Object.keys(answers).length < quiz.length}
        >
          Submit answers
        </button>
      )}

      {submitted && (
        <div>
          <div className={`result ${passed ? 'pass' : 'fail'}`}>
            <div>
              <b>{score}/{quiz.length}</b>
              <div>{passed ? '🎉 Passed!' : 'Not quite — review the answers above and try again'}</div>
            </div>
          </div>
          {!passed && (
            <button className="btn ghost small" style={{ marginTop: 10 }} onClick={retry}>
              Retake quiz
            </button>
          )}
        </div>
      )}
    </div>
  );
}
