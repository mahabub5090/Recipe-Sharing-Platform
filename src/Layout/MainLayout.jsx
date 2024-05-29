import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

export default function MainLayout() {
  return <div className="mx-4">
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
  </div>;
  
}
