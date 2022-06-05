import { useState, useEffect } from "react";

import Bar from "../Bar/Bar";

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
    <>
      <h3 className="footer__title">Villes alentours</h3>
      <ul className="footer__list">
        {others.map((item) => (
          <Bar city={item} />
        ))}
      </ul>
    </>
  );
}

export default Table;
