import "./illustration.css";
import pollution from "./../../assets/img/pollution.jpg";
import average from "./../../assets/img/average.jpg";
import turquoise from "./../../assets/img/turquoise.jpg";

function Illustration({ data }) {
  if (data <= 20) {
    return (
      <img className="main__rightBoard-pic" src={turquoise} alt="eau polluée" />
    );
  } else if (data > 20 && data < 80) {
    return (
      <img
        className="main__rightBoard-pic"
        src={average}
        alt="eau mi-figue mi-raisin"
      />
    );
  } else {
    return (
      <img className="main__rightBoard-pic" src={pollution} alt="eau claire" />
    );
  }
}

export default Illustration;
