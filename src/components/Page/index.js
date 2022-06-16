import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Portfolio from "../Portfolio";
// import Contact from '../Contact';
import Archives from "../Archives";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Page({ currentPage }) {
   const renderPage = () => {
      switch (currentPage.name) {
         case "about me":
            return <About />;
         case "portfolio":
            return <Portfolio />;
         // case 'contact':
         //   return <Contact />;
         case "archives":
            return <Archives />;
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
