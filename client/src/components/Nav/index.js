import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
   function showNavigation() {
      if (Auth.loggedIn()) {
         return (
            <ul className="nav">
               <li className="nav-item">
                  <Link to="/home">HOME</Link>
               </li>
               <li className="nav-item">
                  <Link to="/about">ABOUT</Link>
               </li>
               <li className="nav-item">
                  <Link to="/archie">ARCHIVE</Link>
               </li>
               <li className="nav-item">
                  <Link to="/contact">CONTACT</Link>
               </li>
               <li className="nav-item">
                  <Link to="/portraits">PORTRAITS</Link>
               </li>
               <li className="">
                  {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                  <a href="/" onClick={() => Auth.logout()}>
                     Logout
                  </a>
               </li>
            </ul>
         );
      } else {
         return (
            <ul className="nav">
               <li className="nav-item">
                  <Link to="/signup">Signup</Link>
               </li>
               <li className="nav-item">
                  <Link to="/login">Login</Link>
               </li>
            </ul>
         );
      }
   }

   return (
      <header className="text-center">
         <h1>
            <Link to="/">DOREEN CIONGOLI</Link>
         </h1>
         <br></br>
         <nav>{showNavigation()}</nav>
      </header>
   );
}

export default Nav;
