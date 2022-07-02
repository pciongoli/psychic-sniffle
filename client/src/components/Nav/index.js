import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
   function showNavigation() {
      if (Auth.loggedIn()) {
         return (
            <ul className="nav">
               <li className="nav-item">
                  <h4 className="text-white">
                     <Link to="/">HOME</Link>
                  </h4>
               </li>
               <li className="nav-item">
                  <h4>
                     <Link to="/about">ABOUT</Link>
                  </h4>
               </li>
               <li className="nav-item">
                  <h4>
                     <Link to="/archie">ARCHIVE</Link>
                  </h4>
               </li>
               <li className="nav-item">
                  <h4>
                     <Link to="/contact">CONTACT</Link>
                  </h4>
               </li>
               <li className="nav-item">
                  <h4>
                     <Link to="/portraits">PORTRAITS</Link>
                  </h4>
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
                  <h5>
                     <Link to="/signup">Signup</Link>
                  </h5>
               </li>
               <li className="nav-item">
                  <h5>
                     <Link to="/login">Login</Link>
                  </h5>
               </li>
            </ul>
         );
      }
   }

   return (
      <header className="text-center">
         <nav>{showNavigation()}</nav>

         <h1 className="home-heading">DOREEN CIONGOLI</h1>
         <br></br>
      </header>
   );
}

export default Nav;
