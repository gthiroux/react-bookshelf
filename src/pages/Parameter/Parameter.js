import Header from "../../components/Header/Header";
import "./Parameter.scss";
const Parameter = ({ theme, setTheme }) => {
  const handleTheme = () => {
    setTheme((lastTheme) => (lastTheme === "clair" ? "sombre" : "clair"));
  };
  return (
    <div className="Parameter">
      <Header />
      <h1> Bienvenue dans tes paramètres !</h1>
      <form className="form">
        <input
          className="form__checkbox "
          type="checkbox"
          id="theme"
          onClick={handleTheme}
          checked={theme === "sombre"}
        />
        <label className="form__label" htmlFor="theme">
          {" "}
          Mode sombre
        </label>{" "}
      </form>
    </div>
  );
};
export default Parameter;
