import { useState, useEffect } from "react";

import "./table.css";
import Api from "./../../utils/baseUrl";

function Table() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    Api.get("/hourtin").then((res) => {
      const response = res.data;
      setCities(response);
    });
  }, []);

  return (
    <ul className="footer__list">
      {cities.map((city) => (
        <li key={city.id} className="footer__listItem">
          <span className="listItem__name">{city.name}</span>
          <span className="listItem__rate">{city.rate} %</span>
        </li>
      ))}
    </ul>
  );
}

export default Table;
