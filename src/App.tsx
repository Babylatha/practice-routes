import React from "react";
import Header from "./Pages/Header/header";
import Footer from "./Pages/Footer/footer";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Page1 from "./Pages/Page1/page1";
import Router from "./Routes/routes";
import LoginPage from "./Pages/Login/LoginPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className={styles.mainWrapper}>
      <Router />
    </div>
  );
}

export default App;
