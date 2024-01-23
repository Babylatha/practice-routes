import React from "react";
import Header from "../Pages/Header/header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
