import React, { useState } from "react";
import { Nav } from "./Nav/Nav";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppContext } from "../App";

export const Detector = () => {
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [key, setKey] = useState("");
  const [nutrients, setNutrients] = useState();
  const [foodSuggestions, setFoodSuggestions] = useState({});
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState("morning");
  const [nutrienturl, setNutrientUrl] = useState("");
  const { age, dia, setDia } = useAppContext();

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("age", Number(age));

    try {
      const response = await axios.post("http://localhost:5000/ocr", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.food_suggestions !== "None") {
        const { group, nutrients, text, found_keywords, food_suggestions } =
          response.data;

        setNutrients(nutrients);
        setText(text);
        setFoodSuggestions(food_suggestions[0]);
        setKey(found_keywords);
        setSuccessMessage("Image received successfully");
        alert("Image received successfully");
        console.log(nutrients[selectedTimeOfDay]["nutrients"]);
      } else {
        alert("Invalid input");
        setFoodSuggestions({});
      }
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("Network Error:", error.request);
      } else {
        console.error("Other Error:", error.message);
      }
      setSuccessMessage("Image upload failed. Please try again.");
    }
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <h1 className="text-center my-5">Image Detector</h1>
        <form onSubmit={onFormSubmit} className="my-3">
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Choose an Image:
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              id="file"
              onChange={onFileChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>

        <div className="text-center my-4">
          <div className="btn-group" role="group">
            <button
              className={`btn ${
                selectedTimeOfDay === "morning"
                  ? "btn-primary"
                  : "btn-secondary"
              }`}
              onClick={() => setSelectedTimeOfDay("morning")}
            >
              Morning
            </button>
            <button
              className={`btn ${
                selectedTimeOfDay === "afternoon"
                  ? "btn-primary"
                  : "btn-secondary"
              }`}
              onClick={() => setSelectedTimeOfDay("afternoon")}
            >
              Afternoon
            </button>
            <button
              className={`btn ${
                selectedTimeOfDay === "night" ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => setSelectedTimeOfDay("night")}
            >
              Night
            </button>
          </div>
        </div>

        {foodSuggestions[selectedTimeOfDay] && (
          <div className="my-4">
            <h3 className="text-center">Disease identified: {key}</h3>

            <div className="text-center my-4">
              <h2 className="h2">Food Suggestions for {selectedTimeOfDay}</h2>
              <p className="p">{foodSuggestions[selectedTimeOfDay]}</p>
            </div>

            <div className="text-center my-4">
              <div className="consumable">
                <h2 className="h3">Consumable</h2>
                <ul className="list-group">
                  {Object.entries(
                    nutrients[selectedTimeOfDay]["nutrients"]
                  ).map(([nutrient, foodItems]) => (
                    <li key={nutrient} className="list-group-item">
                      <strong className="nutrient">{nutrient}:</strong>{" "}
                      {foodItems}
                    </li>
                  ))}
                </ul>
                <div className="img-container text-center my-4">
                  <img
                    src={
                      nutrients[selectedTimeOfDay]["nutrient_url"][
                        "vegetables1"
                      ]
                    }
                    alt="None"
                    className="img-fluid rounded mx-2"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <img
                    src={
                      nutrients[selectedTimeOfDay]["nutrient_url"][
                        "vegetables2"
                      ]
                    }
                    alt="None"
                    className="img-fluid rounded mx-2"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              </div>
            </div>

            <div className="text-center my-4">
              <div className="avoid">
                <h2 className="h3">Food to be Avoided</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    {nutrients[selectedTimeOfDay]["foods_to_avoid"]}
                  </li>
                </ul>
              </div>
            </div>

            <div className="img-container text-center my-4">
              <img
                src={nutrients[selectedTimeOfDay]["avoid_url"]["avoid1"]}
                alt="None"
                className="img-fluid rounded mx-2"
                style={{ width: "200px", height: "200px" }}
              />
              <img
                src={nutrients[selectedTimeOfDay]["avoid_url"]["avoid2"]}
                alt="None"
                className="img-fluid rounded mx-2"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
