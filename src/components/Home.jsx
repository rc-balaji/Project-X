import React, { useState } from "react";
import { Nav } from "./Nav/Nav";

export const Home = () => {
  const [showContents1, setShowContents1] = useState(false);
  const [showContents2, setShowContents2] = useState(false);
  const [showContents3, setShowContents3] = useState(false);

  const toggleContents1 = () => {
    setShowContents1(!showContents1);
  };

  const toggleContents2 = () => {
    setShowContents2(!showContents2);
  };

  const toggleContents3 = () => {
    setShowContents3(!showContents3);
  };

  return (
    <div className="home">
      <Nav />
      <div className="container my-4">
        <h1 className="display-4 text-center mb-5">Instructions</h1>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className={`btn btn-link text-left ${
                    showContents1 ? "active" : ""
                  }`}
                  type="button"
                  onClick={toggleContents1}
                >
                  Report Scanner
                </button>
              </h2>
            </div>

            {showContents1 && (
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <ul>
                    <li>
                      The scanner app will scan the health report and identify
                      the health issue.
                    </li>
                    <li>
                      It provides food suggestions based on the age group and
                      specific diseases.
                    </li>
                    <li>
                      Suggestions for fruits and vegetables are categorized for
                      morning, afternoon, and night.
                    </li>
                    <li>
                      The app also indicates foods that should be avoided for a
                      healthier lifestyle.
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="Home/scanner.jpg"
                        alt="Report Scanner"
                        className="img-fluid rounded my-3"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        src="Home/consumable.jpg"
                        alt="Consumable Foods"
                        className="img-fluid rounded my-3"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        src="Home/avoid.jpg"
                        alt="Foods to Avoid"
                        className="img-fluid rounded my-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className={`btn btn-link text-left ${
                    showContents2 ? "active" : ""
                  }`}
                  type="button"
                  onClick={toggleContents2}
                >
                  Food Detector
                </button>
              </h2>
            </div>

            {showContents2 && (
              <div
                id="collapseTwo"
                className="collapse show"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <ul>
                    <li>The food detector will detect real-time food items.</li>
                    <li>
                      It provides information about the item, including its
                      name;
                      <ol>
                        <li>type of food,</li>
                        <li>calories,</li> <li>protein,</li> <li>vitamins,</li>{" "}
                        <li> minerals</li>
                      </ol>
                    </li>
                    <li>
                      Additionally, the app offers suggestions for healthy eating
                      to consider for maintaining your health.
                    </li>
                  </ul>
                  <div className="text-center">
                    <img
                      src="Home/detector.jpg"
                      alt="Food Detector"
                      className="img-fluid rounded my-3"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className={`btn btn-link text-left ${
                    showContents3 ? "active" : ""
                  }`}
                  type="button"
                  onClick={toggleContents3}
                >
                  Profile
                </button>
              </h2>
            </div>

            {showContents3 && (
              <div
                id="collapseThree"
                className="collapse show"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <h6 className="text-center">
                    Update the Date of Birth in the profile
                  </h6>
                  <div className="text-center">
                    <img
                      src="Home/profile.jpg"
                      alt="Profile Update"
                      className="img-fluid rounded my-3"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Home;
