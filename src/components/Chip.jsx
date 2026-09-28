export default function Chip({ children, variant = '' }) {
  const cls = ['chip', variant].filter(Boolean).join(' ');
  return <span className={cls}>{children}</span>;
}
