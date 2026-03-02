import Header from "../../components/Header/Header";
import "./Parameter.scss";
const Parameter = ({ theme, setTheme }) => {
  const handleTheme = () => {
    setTheme((lastTheme) => (lastTheme === "clair" ? "sombre" : "clair"));
  };
  return (
    <div className="Parameter">
      <Header />
      <input
        type="checkbox"
        id="theme"
        onClick={handleTheme}
        checked={theme === "sombre"}
      />
      <label htmlFor="theme"> Mode sombre</label>
    </div>
  );
};
export default Parameter;
