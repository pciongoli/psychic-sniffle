import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Archives from "../Archives";
import Portfolio from "../Portfolio";
// import Contact from '../Contact';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Page({ currentPage }) {
   const renderPage = () => {
      switch (currentPage.name) {
         case "archives":
            return <Archives />;
         case "about me":
            return <About />;
         case "portfolio":
            return <Portfolio />;
         // case 'contact':
         //   return <Contact />;
         default:
            return <About />;
      }
   };

   return (
      <section>
         <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
         <PageContent>{renderPage()}</PageContent>
      </section>
   );
}
export default Page;
