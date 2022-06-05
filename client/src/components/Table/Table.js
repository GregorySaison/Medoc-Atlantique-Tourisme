import { useState, useEffect } from "react";

import "./table.css";
import Api from "./../../utils/baseUrl";

function Table() {
  const [others, setOthers] = useState([]);

  useEffect(() => {
    Api.get("/cities").then((res) => {
      const response = res.data;
      setOthers(response);
    });
  }, []);

  return (
    <ul className="footer__list">
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
