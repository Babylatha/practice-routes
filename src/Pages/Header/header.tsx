import React from "react";
import styles from "../Header/header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const handleNavigation = (data: any) => {
    navigate(data);
  };
  return (
    <div className={styles.mainwrapper}>
      <div className={styles.home}>
        <p
          className={styles.links}
          onClick={() => {
            handleNavigation("/");
          }}
          style={{
            borderBottom: path === "/" ? "2px solid black" : " ",
          }}
        >
          Home
        </p>
        <p
          className={styles.links}
          onClick={() => {
            handleNavigation("Page1");
          }}
          style={{
            borderBottom: path.includes("Page1") ? "2px solid black" : " ",
          }}
        >
          Page1
        </p>
        <p
          className={styles.links}
          onClick={() => handleNavigation("Page2")}
          style={{
            borderBottom: path.includes("Page2") ? "2px solid black" : " ",
          }}
        >
          Page2
        </p>
        <p
          className={styles.links}
          onClick={() => {
            handleNavigation("Page3");
          }}
          style={{
            borderBottom: path.includes("Page3") ? "2px solid black" : " ",
          }}
        >
          Page3
        </p>
        <p
          className={styles.links}
          onClick={() => {
            handleNavigation("Page4");
          }}
          style={{
            borderBottom: path.includes("Page4") ? "2px solid black" : " ",
          }}
        >
          Page4
        </p>
      </div>
    </div>
  );
}
