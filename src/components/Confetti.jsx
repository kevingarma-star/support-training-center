import { useEffect, useRef } from 'react';

const COLORS = ['#0B7A76','#3BB7AE','#F5B544','#3A5BD9','#4CC57F','#F07B6F','#7C3AED'];

function randomBetween(a, b) { return a + Math.random() * (b - a); }

export default function Confetti({ active, onDone }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 120 }, () => ({
      x: randomBetween(0.2, 0.8) * canvas.width,
      y: randomBetween(-0.1, 0.3) * canvas.height,
      r: randomBetween(5, 11),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: randomBetween(-4, 4),
      vy: randomBetween(-8, -2),
      gravity: randomBetween(0.18, 0.35),
      spin: randomBetween(-0.15, 0.15),
      angle: randomBetween(0, Math.PI * 2),
      scaleY: 1,
      scaleDir: randomBetween(-1, 1) > 0 ? 1 : -1,
    }));

    let frame;
    let tick = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of particles) {
        p.vy += p.gravity;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        p.scaleY += p.scaleDir * 0.04;
        if (p.scaleY > 1 || p.scaleY < -1) p.scaleDir *= -1;
        if (p.y < canvas.height + 20) alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.scale(1, p.scaleY);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r);
        ctx.restore();
      }
      tick++;
      if (alive && tick < 220) {
        frame = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (onDone) onDone();
      }
    }

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [active, onDone]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 70 }}
      aria-hidden="true"
    />
  );
}
