import "./App.css";
import Loader from "../components/loader/Loader";
import ChangingFlag from "../components/background/changing_flag/ChangingFlag";
import PolishFlag from "../components/background/Polish_flag/PolishFlag";
import Heading from "../components/background/heading/Heading";
import Form from "../components/form/Form";
import Result from "../components/result/Result";
import { useState } from "react";
// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [rate, setRate] = useState("");
  const [code, setCode] = useState("");
  const [currencyName, setCurrencyName] = useState("");
  const [plnName, setPlnName] = useState("");
  const liftingFormData = (amount, result, rate, code, currencyName, plnName) => {
    setAmount(amount);
    setResult(result);
    setRate(rate);
    setCode(code);
    setCurrencyName(currencyName);
    setPlnName(plnName);
  };

  return (
    <>
      {/* <Provider store={store}> */}
        <Loader />
        <div className="background">
          <ChangingFlag code={code} />
          <PolishFlag />
          <Heading />
          <main className="main-box">
            <Form liftingFormData={liftingFormData} />
            <Result amount={amount} total={result} rate={rate} code={code} currencyName={currencyName} plnName={plnName}/>
          </main>
        </div>
      {/* </Provider> */}
    </>
  );
}

export default App;
