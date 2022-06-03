import { useState, useEffect } from "react";

import "./table.css";
import Api from "./../../utils/baseUrl";

function Table() {
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    Api.get("/hourtin").then((res) => {
      const response = res.data;
      setName(response[0].name);
      setRate(response[0].rate);
    });
  }, []);

  useEffect(() => {
    Api.get("/others").then((res) => {
      const response = res.data;
      setOthers(response);
    });
  }, []);

  return (
    <ul className="footer__list">
      <li className="footer__listItem">
        <span className="listItem__name">{name}</span>
        <span className="listItem__rate">{rate} %</span>
      </li>
      {others.map((item) => (
        <li key={item.name} className="footer__listItem">
          <span className="listItem__name">{item.name}</span>
          <span className="listItem__rate">{item.rate} %</span>
        </li>
      ))}
    </ul>
  );
}

export default Table;
