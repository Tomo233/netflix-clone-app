import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.css";
import App from "./App.tsx";
import { MyListProvider } from "./context/my-list-context/MyListProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyListProvider>
      <App />
    </MyListProvider>
  </StrictMode>,
);
