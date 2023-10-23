export const drawRect = (detections, ctx) => {
  detections.forEach((prediction) => {
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];

    const includedClasses = [
      "apple",
      "orange",
      "banana",
      "sandwich",
      "hot dog",
      "donut",
      "cake",
      "pizza",
      "pomegranate",
    ];

    // Check if the class is included
    if (includedClasses.includes(text)) {
      // Define the color and text styles based on the label
      let color;
      let label;
      if (["pomegranate", "apple", "orange", "banana"].includes(text)) {
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
        // Handle other labels as needed
        color = "blue";
        label = text;
      }

      // Apply styles and draw the rectangle and label
      ctx.strokeStyle = color;
      ctx.font = "20px Arial";
      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.fillText(label, x + 100, y + 100);
      ctx.rect(x, y, width, height);
      ctx.stroke();
    }
  });
};
