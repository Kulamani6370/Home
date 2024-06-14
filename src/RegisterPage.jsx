import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="form-container">
        <div className="form">
          <h2
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "white",
              marginTop: "1px",
            }}
          >
            Register
          </h2>
          <div className="form-row">
            <input
              type="text"
              className="form-input"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="Email Id"
            />
          </div>
          <div className="form-row">
            <input
              type="number"
              className="form-input"
              name="Phone No"
              placeholder="Phone no."
            />
          </div>
          <div className="form-row">
            <input
              type="password"
              className="form-input"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="sem-branch" style={{ display: "flex" }}>
            <div className="form-row">
              <input
                type="number"
                className="form-input"
                name="semester"
                placeholder="Semester"
                style={{ width: "135px" }}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                className="form-input"
                name="branch"
                placeholder="Branch"
                style={{ marginLeft: "5px", width: "135px" }}
              />
            </div>
          </div>
          <div className="form-row">
            <input
              type="text"
              className="form-input"
              name="skills"
              placeholder="Skills"
            />
          </div>
          <button type="submit" className="btn btn-block">
            Submit
          </button>
          <p className="register-para">
            Have an Account?{" "}
            <span className="member-btn">
              <Link to="/login" className="member-btn">
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
