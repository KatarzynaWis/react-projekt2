import "./Result.css";
import inflectCurrencyName from "../../helpers/inflectCurrencyName";

const Result = ({amount, total, rate, code, name, plnName}) => {
  return (
    <>
      <div className="main-box__result-wraper">
        <p id="resultToConvert" className="main-box__result-from">{amount !== ""?`${amount} ${inflectCurrencyName(name === undefined ? "dolar" : name, amount)} = `: ""}</p>
        <p id="resultConverted" className="main-box__result-to">{total !== ""&&total.toFixed(2)} {plnName}</p>
      </div>
      <p id="unitRates" className="main-box__unit-rates">{rate? `1 PLN = ${rate} ${code??"USD"}`:""}</p>
    </>
  );
};
export default Result;
