import "./form.css";

function Form({ onChange, onSubmit, inputValue }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button className="form__button" type="submit">
        MAJ
      </button>
    </form>
  );
}

export default Form;
