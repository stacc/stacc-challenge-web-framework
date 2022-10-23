import styles from "./Button.module.css";

export function TransparentButton({
  children,
  onClick,
  onMouseOver,
  onMouseLeave,
  height,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ height }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={[styles.button, styles.transparentButton].join(" ")}
    >
      {children}
    </button>
  );
}
