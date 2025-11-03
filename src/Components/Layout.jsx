// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import Footer from "../Footer"; 

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <TopBar />
        <NavBar />
      </div>

      <main className="pt-[120px]">
        {" "}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
