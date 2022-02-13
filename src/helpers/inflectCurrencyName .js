const inflectCurrencyName = (currencyName, amountValue) => {
  const lastChar = amountValue.substr(-1, 1);

  if (currencyName.includes("dolar")) {
    switch (true) {
      case amountValue.includes("."):
        return "Dolara";
        break;
      case amountValue == 1:
        return "Dolar";
        break;
      case amountValue >= 2 && amountValue <= 4:
        return "Dolary";
        break;
      case amountValue > 20 && lastChar >= 2 && lastChar <= 4:
        return "Dolary";
        break;
      default:
        return "Dolarów";
        break;
    }
  } else if (currencyName.includes("euro")) {
    return "Euro";
  } else if (currencyName.includes("frank")) {
    switch (true) {
      case amountValue.includes("."):
        return "Franka";
        break;
      case amountValue == 1:
        return "Frank";
        break;
      case amountValue >= 2 && amountValue <= 4:
        return "Franki";
        break;
      case amountValue > 20 && lastChar >= 2 && lastChar <= 4:
        return "Franki";
        break;
      default:
        return "Franków";
        break;
    }
  } else if (currencyName.includes("funt")) {
    switch (true) {
      case amountValue.includes("."):
        return "Funta";
        break;
      case amountValue == 1:
        return "Funt";
        break;
      case amountValue >= 2 && amountValue <= 4:
        return "Funty";
        break;
      case amountValue > 20 && lastChar >= 2 && lastChar <= 4:
        return "Funty";
        break;
      default:
        return "Funtów";
        break;
    }
  }
};
export default inflectCurrencyName;