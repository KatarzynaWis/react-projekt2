import "./InputAmount.css";
import symbols from "./symbols";

const InputAmount = ({ handleInput, amount, code }) => {
  const symbolInArray = Object.entries(symbols).filter(
    (table) => table[0] === code
  );
  const symbol = symbolInArray.flat()[1];
  const getValue = (e) => handleInput(e.target.value);

  return (
    <>
      <label className="main-box__form-label" htmlFor="amount">
        Kwota
      </label>
      <div className="main-box__form-field-wrapper">
        <span>{symbol}</span>
        <input
          id="amount"
          className="main-box__form-input"
          onChange={getValue}
          value={amount}
          type="number"
          min="0.01"
          step="0.01"
          autoComplete="off"
          required
        />
      </div>
    </>
  );
};

export default InputAmount;
