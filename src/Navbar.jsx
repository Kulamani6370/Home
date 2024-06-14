import { FaUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MochaLine</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>News Feed</li>
          <li>Placements</li>
          <li>Contact Us</li>
          <li>
            <FaMagnifyingGlass />
          </li>
        </ul>
      </div>
      <div className="login-section">
        <button className="login-btn">
          <Link to="/login" className="link">
            Login/SignUp
          </Link>
        </button>
        <FaUserCircle
          style={{ color: "#f2f4f7", height: "60px", marginLeft: "10px" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
