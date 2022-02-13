const inflectPLN = (resultPLN) => {
 const lastChar = resultPLN.toString().substr(-1, 1);

  switch (true) {
    case !Number.isInteger(resultPLN):
      return "Złotych";
      break;
    case resultPLN === 1:
      return "Złoty";
      break;
    case resultPLN >= 2 && resultPLN <= 4:
      return "Złote";
      break;
    case resultPLN > 20 && lastChar >= 2 && lastChar <= 4:
      return "Złote";
      break;
    default:
      return "Złotych";
      break;
  }
};
export default inflectPLN;