const nutritionData = [
  {
    label: "apple",
    accuracy: "High",
    name: "Apple",
    type: "Veg",
    calories: 52,
    protein: 0.26,
    vitamins: "A, C, B6",
    minerals: "Potassium",
    suggest: "Good for your health",
  },
  {
    label: "orange",
    accuracy: "High",
    name: "Orange",
    type: "Veg",
    calories: 43,
    protein: 1.0,
    vitamins: "C",
    minerals: "Potassium",
    suggest: "Good for your health",
  },
  {
    label: "banana",
    accuracy: "High",
    name: "Banana",
    type: "Veg",
    calories: 89,
    protein: 1.1,
    vitamins: "B6, C",
    minerals: "Potassium",
    suggest: "Good for your health",
  },
  {
    label: "sandwich",
    accuracy: "High",
    name: "Sandwich",
    type: "Non-Veg",
    calories: 250,
    protein: 15,
    vitamins: "A, B6",
    minerals: "Calcium, Iron",
    suggest: "Moderate consumption",
  },
  {
    label: "hot dog",
    accuracy: "High",
    name: "Hot Dog",
    type: "Non-Veg",
    calories: 150,
    protein: 5,
    vitamins: "B12",
    minerals: "Iron",
    suggest: "Limit consumption",
  },
  {
    label: "donut",
    accuracy: "High",
    name: "Donut",
    type: "Non-Veg",
    calories: 300,
    protein: 4,
    vitamins: "A, B6",
    minerals: "Iron",
    suggest: "Unhealthy choice",
  },
  {
    label: "cake",
    accuracy: "High",
    name: "Cake",
    type: "Non-Veg",
    calories: 350,
    protein: 5,
    vitamins: "A, B6",
    minerals: "Calcium, Iron",
    suggest: "Unhealthy choice",
  },
  {
    label: "pizza",
    accuracy: "High",
    name: "Pizza",
    type: "Non-Veg",
    calories: 285,
    protein: 12,
    vitamins: "A, B6",
    minerals: "Calcium, Iron",
    suggest: "Unhealthy choice",
  },
];

export const drawRect = (detections, ctx) => {
  detections.forEach((prediction) => {
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];

    const includedClasses = nutritionData.map((item) => item.label);

    if (includedClasses.includes(text)) {
      const nutrition = nutritionData.find((item) => item.label === text);

      let color;
      let label;
      let secondLine = `Accuracy: ${nutrition.accuracy}\nName: ${nutrition.name}\nType: ${nutrition.type}\nCalories: ${nutrition.calories}\nProtein: ${nutrition.protein}\nVitamins: ${nutrition.vitamins}\nMinerals: ${nutrition.minerals}\nSuggest: ${nutrition.suggest}`;
      if (["apple", "orange", "banana"].includes(text)) {
        color = "green";
        label =
          text.substring(0, 1).toUpperCase() + text.substring(1) + " (Good)";
      } else if (
        ["sandwich", "hot dog", "donut", "cake", "pizza"].includes(text)
      ) {
        color = "red";
        label =
          text.substring(0, 1).toUpperCase() + text.substring(1) + " (Bad)";
      } else {
        color = "blue";
        label = text;
      }

      ctx.strokeStyle = color;
      ctx.font = "20px Arial";

      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.stroke();

      // Draw a white background behind the label
      ctx.fillStyle = "white";
      const labelWidth = ctx.measureText(label).width;
      const secondLineHeight =
        ctx.measureText(secondLine).actualBoundingBoxAscent; // Use actualBoundingBoxAscent
      const lineHeight = 20;

      ctx.fillRect(x + width + 10, y, labelWidth + 200, 220);

      // Set the fillStyle for the text after drawing the white background
      ctx.fillStyle = color;

      // Draw the label text
      ctx.fillText(label, x + width + 20, y + 20);

      // Set the fillStyle for the second line text
      ctx.fillStyle = "black"; // Change text color for the second line if needed
      const secondLineParts = secondLine.split("\n");
      secondLineParts.forEach((part, index) => {
        ctx.fillText(part, x + width + 20, y + 50 + index * lineHeight);
      });
    }
  });
};
