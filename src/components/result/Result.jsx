import "./Result.css";

const Result = ({amount, total, rate, code, currencyName, plnName}) => {
  console.log(total !== ""&&total.toFixed(2));
  return (
    <>
      <div className="main-box__result-wraper">
        <p id="resultToConvert" className="main-box__result-from">{amount} {currencyName}</p>
        <p id="resultConverted" className="main-box__result-to">{total !== ""&&total.toFixed(2)} {plnName}</p>
      </div>
      <p id="unitRates" className="main-box__unit-rates">{rate? `1 PLN = ${rate} ${code??"USD"}`:""}</p>
    </>
  );
};
export default Result;
