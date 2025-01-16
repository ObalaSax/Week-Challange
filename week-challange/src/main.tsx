import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { myStore } from "./Features/Store/MainStore.ts";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { DataApi } from "./Features/Slices/DataApi.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={DataApi}>
      <Provider store={myStore}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);
