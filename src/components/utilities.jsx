export const drawRect = (detections, ctx) => {
  detections.forEach((prediction) => {
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];


      const color = "green";
      ctx.strokeSylt = color;
      ctx.font = "20px Arial";
      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.fillText(text+"(Good)", x, y);
      ctx.rect(x, y, width, height);
     
      ctx.stroke();
    }
  );
};
