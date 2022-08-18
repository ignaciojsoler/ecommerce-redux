import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
//FontAwesome
import "../node_modules/font-awesome/css/font-awesome.min.css";
//React router
import { BrowserRouter } from "react-router-dom";
//Redux Toolkit
import { Provider } from "react-redux";
import { store } from "./store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop>
      <App />
      </ScrollToTop>
        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
