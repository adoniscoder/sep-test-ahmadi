import Avatar from "../Avatar/Avatar";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navList">
          <li>
            <h1 className="title">Welcome</h1>
          </li>
          <li>
            <Avatar />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
