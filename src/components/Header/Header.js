import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profil">Profil</Link>
      </nav>
    </header>
  );
};
export default Header;
