import { useState } from "react";

import Illustration from "../Illustration";
import Form from "../Form";
import Table from "../Table";

import "./app.css";

import logo from "./../../assets/img/logo.png";

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
        <img src={logo} alt="logo de l'office du tourisme de Lacanau" />
        <h1 className="header__title">Jour de baignade ?</h1>
      </header>
      <main className="main">
        <section className="main__leftBoard">
          <Form
            inputValue={input}
            onChange={handleChangeInput}
            onSubmit={handleSubmit}
          />
          <h2 className="leftBoard__city">Lacanau</h2>
          <h3 className="leftBoard__rate">Pollution Eau {rate} %</h3>
        </section>
        <section className="main__rightBoard">
          <Illustration data={rate} />
        </section>
      </main>
      <footer className="footer">
        <Table />
      </footer>
    </>
  );
}

export default App;
