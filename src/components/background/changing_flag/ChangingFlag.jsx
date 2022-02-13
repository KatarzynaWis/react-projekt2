import USD from "../media/USD.jpg";
import GBP from "../media/GBP.jpg";
import CHF from "../media/CHF.jpg";
import EUR from "../media/EUR.jpg";
import NZD from "../media/NZD.jpg";
import "./ChangingFlag.css";

const ChangingFlag = ({ code }) => {
  const changeFlag = () => {
    switch (code) {
      case "GBP":
        return GBP;
        break;
      case "CHF":
        return CHF;
        break;
      case "EUR":
        return EUR;
        break;
      case "NZD":
        return NZD;
        break;
      default:
        return USD;
        break;
    }
  };

  return (
    <div className="background__circle-changing">
      <img
        className="background__circle-img-changing"
        src={changeFlag()}
        alt="flag"
      />
    </div>
  );
};
export default ChangingFlag;
