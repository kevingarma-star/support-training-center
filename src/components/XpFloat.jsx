export default function XpFloat({ events }) {
  if (!events.length) return null;
  return (
    <>
      {events.map(e => (
        <div
          key={e.id}
          className="xpfloat"
          style={{ left: e.x ?? '50%', top: e.y ?? '60%' }}
        >
          +{e.amount} XP
        </div>
      ))}
    </>
  );
}
