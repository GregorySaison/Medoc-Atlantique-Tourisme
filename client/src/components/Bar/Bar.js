import "./bar.css";

function Bar({ city }) {
  const progress = {
    width: `${city.rate}%`,
  };

  return (
    <li key={city.id} className="footer__listItem">
      <div className="footer__listItem-bar" style={progress}>
        <span className="listItem__name">{city.name}</span>
        <span className="listItem__rate">{city.rate} %</span>
      </div>
    </li>
  );
}

export default Bar;
