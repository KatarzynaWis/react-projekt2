import "./PolishFlag.css";
import PLN from "./media/PLN.jpg";

const PolishFlag = () => {
  return(
    <div className="background__circle-poland">
      <img className="background__circle-img-pl" src={PLN} alt="pl" />
    </div>
  );
}
export default PolishFlag;