import { useState, useEffect } from "react";

import Bar from "../Bar/Bar";

import "./table.css";

import Api from "./../../utils/baseUrl";

function Table() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    Api.get("/cities").then((res) => {
      const response = res.data;
      setCities(response);
    });
  }, []);

  return (
    <>
      <h3 className="footer__title">Villes alentours</h3>
      <ul className="footer__list">
        {cities.map((city) => (
          <Bar city={city} />
        ))}
      </ul>
    </>
  );
}

export default Table;
