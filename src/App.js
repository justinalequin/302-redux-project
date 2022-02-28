import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./reduxStore";
import HomePage from "./components/pages/HomePage";
import SignInPage from "./components/pages/SignInPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />

            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
