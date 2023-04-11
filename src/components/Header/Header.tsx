import Avatar from "../Avatar/Avatar";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <li>
          <h1 className="title">Welcome</h1>
        </li>
        <li>
          <Avatar />
        </li>
      </nav>
    </header>
  );
};

export default Header;
