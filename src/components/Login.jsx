import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://health-server-bms1.onrender.com/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          console.log("Login Success");
          alert("Login successful!");
          navigate("/home");
        } else {
          alert("Incorrect password! Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div
            className="card shadow-2-strong"
            style={{ borderRadius: "1rem", backgroundColor: "#f0ca32" }}
          >
            <div className="card-body p-5 text-center">
              <h3 className="mb-5">Sign in</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmail"
                    className="form-control form-control-lg"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="typeEmail">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePassword"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="typePassword">
                    Password
                  </label>
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Login
                </button>
              </form>

              <hr className="my-4" />

              <div className="text-center">
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
