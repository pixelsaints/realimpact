export default function FlipText({ children, alt = false }) {
  return (
    <div className={`wrap-heading-3d ${alt ? " alt" : ""}`}>
      <div className="front">{children}</div>
      <div className="back">{children}</div>
    </div>
  );
}