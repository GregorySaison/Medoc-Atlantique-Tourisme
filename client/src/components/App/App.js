import { useState } from "react";

import Form from "./../Form";

import "./app.css";

function App() {
  const [input, setInput] = useState(0);
  const [rate, setRate] = useState(50);

  const handleChangeInput = (value) => {
    setInput(value);
  };

  const handleSubmit = () => {
    setRate(input);
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">Pollution des Plages</h1>
      </header>
      <Form
        inputValue={input}
        onChange={handleChangeInput}
        onSubmit={handleSubmit}
      />
      <h1>{rate}</h1>
    </>
  );
}

export default App;
