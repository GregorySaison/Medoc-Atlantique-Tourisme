import "./button.css";

function Button({ isOpen, onButtonClick }) {
  return (
    <button
      type="button"
      className={isOpen ? "button button--open" : "button"}
      onClick={onButtonClick}
    >
      =
    </button>
  );
}

export default Button;
