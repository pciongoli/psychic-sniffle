import React from "react";

const Footer = () => {
   return (
      <footer className="mt-auto justify-contentent-bottom">
         <div className="text-center">
            <h5>Follow me on instagram for more great content! </h5>
         </div>
         <div className="container">
            <div className="text-center">
               &copy;{new Date().getFullYear()} by pCiongoli
            </div>
         </div>
      </footer>
   );
};

export default Footer;
