import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return <div className="">
 <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <li><Link to={"/home"}> Home</Link></li>
       <li><Link to={"/all"}>All Menu</Link></li>
       <li><Link to={"/dashboard"}> Dashboard</Link></li>

      </ul>
    </div>
    <a className="text-xl font-extrabold text-red-800">RecipePad</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><Link to={"/home"}> Home</Link></li>
       <li><Link to={"/all"}>All Menu</Link></li>
       <li><Link to={"/dashboard"}> Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <Link to={"/login"} className="btn btn-primary">Log in</Link>
    <Link to={"/signup"} className="btn btn-primary">Sign Up</Link>
  </div>
</div>
  </div>;
}
