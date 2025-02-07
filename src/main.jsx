import { createRoot } from "react-dom/client";
import App from "./App.jsx";

window.onload = function () {
  Particles.init({
    selector: ".background",
    color: "#a6a6a6",
    maxParticles: 120
  });
};

createRoot(document.getElementById("root")).render(<App />);
