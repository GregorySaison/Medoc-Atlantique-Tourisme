import { useState } from "react";

import Illustration from "../Illustration";
import Form from "../Form";

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
      <main className="main">
        <section className="main__leftBoard">
          <Form
            inputValue={input}
            onChange={handleChangeInput}
            onSubmit={handleSubmit}
          />
          <h2 className="leftBoard__city">Lacanau</h2>
          <h3 className="leftBoard__rate">{rate} %</h3>
        </section>
        <section className="main__rightBoard">
          <Illustration data={rate} />
        </section>
      </main>
    </>
  );
}

export default App;
