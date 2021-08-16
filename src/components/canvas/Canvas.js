import { useEffect, useRef } from "react";
import App from "./App";
import classes from "./Canvas.module.css";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    new App(canvas);
  }, []);

  return (
    <div className={classes.wrapper}>
      <canvas className={classes.canvas} ref={canvasRef} />
    </div>
  );
};

export default Canvas;
