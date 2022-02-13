import "./SecelctCurrency.css";
import emoji from "./emoji.js";
// import { useSelector, useDispatch } from 'react-redux';

const SecelctCurrency = ({
  idValue,
  lebelText,
  children,
  ratesObj,
  handleSelect,
}) => {
  // const np = useSelector(ratesObj)
  // const dispatch = useDispatch()

  const selectedOption = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const rate = selectedOption.attributes.rate.value;
    const code = selectedOption.attributes.code.value;
    const name = selectedOption.attributes.name.value;
    handleSelect(rate, code, name);
  };
  const createOptions = ratesObj.map(({ code, currency, mid }) => {
    if (
      code === "USD" ||
      code === "NZD" ||
      code === "EUR" ||
      code === "CHF" ||
      code === "GBP"
    ) {
      const findEmoji = () => {
        const emojiInArray = Object.entries(emoji).filter(
          (table) => table[0] === code
        );
        const emojiString = emojiInArray.flat()[1];
        return emojiString;
      };
      const nameToUpperCase =
        currency.charAt(0).toUpperCase() + currency.slice(1);

      return (
        <option key={code} code={code} rate={mid} name={currency}>
          {findEmoji()}&nbsp; &nbsp; &nbsp;{code} - {nameToUpperCase}
        </option>
      );
    }
  });

  return (
    <>
      <label className="main-box__form-label" htmlFor={idValue}>
        {lebelText}
      </label>
      <div className="main-box__form-field-wrapper">
        <select
          id={idValue}
          className="main-box__form-select"
          onChange={selectedOption}
          >
          {children ?? createOptions}
        </select>
      </div>
    </>
  );
};
export default SecelctCurrency;
