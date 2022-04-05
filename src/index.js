import React, { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { useProgress, Html } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <div
      style={{ fontSize: "4em", color: "hotpink", fontWeight: "bolder" }}
      className="textShadow"
    >
      {progress} % loaded
    </div>
  );
}

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
