// import { qs } from "../../helpers/helpers";
import "./Loader.css";

const Loader = () => {
  // const loader = qs("#loader");
  // loader.classList.toggle("hidden");

  return(
    <div id="loader" className="loader hidden">
      <div className="loader__circle"></div>
    </div>
  );
};
export default Loader;
