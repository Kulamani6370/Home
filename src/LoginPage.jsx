/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="form" style={{ height: "250px" }}>
        <h1
          style={{
            color: "#effffe",
            textAlign: "center",
            marginTop: "1px",
            textDecoration: "underline",
          }}
        >
          Login
        </h1>
        <div className="form-row">
          <input
            type="Email"
            name="email"
            placeholder="Email Id"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-input"
          />
        </div>
        <h5 style={{ color: "#effff1", marginLeft: "4px", marginTop: "1px" }}>
          Forget Password?
        </h5>
        <button className="btn">Login</button>
        <p className="login-para">
          Don't have an account?{" "}
          <span className="member-btn">
            <Link to="/register" className="member-btn">
              Sign-up
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
