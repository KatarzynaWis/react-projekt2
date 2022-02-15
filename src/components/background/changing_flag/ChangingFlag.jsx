import "./ChangingFlag.css";
import changeFlag from "../../../helpers/changeFlag";

const ChangingFlag = ({ code }) => {
  return (
    <div className="background__circle-changing">
      <img
        className="background__circle-img-changing"
        src={changeFlag(code)}
        alt="flag"
      />
    </div>
  );
};
export default ChangingFlag;
