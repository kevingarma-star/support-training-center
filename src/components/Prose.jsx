export default function Prose({ html, className = '' }) {
  return (
    <div
      className={['prose', className].filter(Boolean).join(' ')}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
