import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context from "./utils/Contest.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <Context>
      <BrowserRouter>
        <Context />
      </BrowserRouter>
    </Context>
  </div>
);
