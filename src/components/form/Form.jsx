import { useState, useEffect } from "react";
import "./Form.css";
import InputAmount from "./input_amount/InputAmount";
import SecelctCurrency from "./select_currency/SecelctCurrency";
import inflectCurrencyName from "../../helpers/inflectCurrencyName ";
import inflectPLN from "../../helpers/inflectPLN ";

const Form = ({ liftingFormData }) => {
  const NBP_API_URL =
    "https://api.nbp.pl/api/exchangerates/tables/a/?format=json";
  const [rates, setRates] = useState([]);
  const [amount, setAmount] = useState("");
  // czemu to nie działa?
  // const rateUSD = rates.find(({ code }) => code === "USD")?.mid;
  // console.log(rates.find(({ code }) => code === "USD")?.mid);
  const [rate, setRate] = useState();
  const [code, setCode] = useState("USD");
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(NBP_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setRates(data[0].rates);
        setRate(data[0].rates[1].mid)
      })
      .catch((error) => console.error(error));
  }, []);

  const handleInput = (amount) => setAmount(amount);
  const handleSelect = (rate, code, name) => {
    setRate(rate);
    setCode(code);
    setName(name);
  };
  const convertAmount = () => Number(amount) * rate;
  const handleSubmit = (e) => {
    e.preventDefault();
    liftingFormData(amount, convertAmount(), rate, code, inflectCurrencyName(name, amount), inflectPLN(convertAmount()));
    setAmount(() => "");
  };
 
  return (
    <form id="form" className="main-box__form" onSubmit={handleSubmit}>
      <InputAmount handleInput={handleInput} amount={amount.length > 10? amount.slice(0, 10) : amount} code={code}/>
      <SecelctCurrency
        idValue="from"
        lebelText="Mam"
        ratesObj={rates}
        handleSelect={handleSelect}
      />
      <div className="main-box__form-swap-currencies"></div>
      <SecelctCurrency
        idValue="to"
        lebelText="Chcę otrzymać"
        ratesObj={[]}>
        <option value="PLN - Polish Zloty">
          {String.fromCodePoint(0x1f1f5)}
          {String.fromCodePoint(0x1f1f1)}
          &nbsp; &nbsp; &nbsp; PLN - Złoty
        </option>
      </SecelctCurrency>
    </form>
  );
};
export default Form;
