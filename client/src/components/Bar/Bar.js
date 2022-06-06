import "./bar.css";

function Bar({ city }) {
  // Definition de la largeur de la barre en fonction du pourcentage de pollution de l'eau associé
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
