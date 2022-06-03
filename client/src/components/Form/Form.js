import "./form.css";

function Form({ isOpen, onChange, onSubmit, inputValue }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      className={isOpen ? "leftBoard__form--open" : "leftBoard__form"}
      onSubmit={handleSubmit}
    >
      <input
        className="leftBoard__form-input"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button className="leftBoard__form-button" type="submit">
        MAJ
      </button>
    </form>
  );
}

export default Form;
