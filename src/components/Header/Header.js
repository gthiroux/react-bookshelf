import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ state }) => {
  return (
    <header className="Header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profil" state={{ state }}>
          Profil
        </Link>
      </nav>
    </header>
  );
};
export default Header;
