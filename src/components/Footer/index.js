import React from "react";

function Footer() {
   // Replace links with social media profiles
   const icons = [
      {
         name: "fab fa-instagram",
         link: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
      },

      {
         name: "fab fa-youtube",
         link: "youtube.com/channel/UCG5ThHQhZ153e5Yq3N9fQ6w",
      },
      {
         name: "fab fa-linkedin",
         link: "https://www.linkedin.com/in/doreenciongoli/",
      },
   ];

   return (
      <footer className="flex-row px-1">
         {icons.map((icon) => (
            <a
               href={icon.link}
               key={icon.name}
               target="_blank"
               rel="noopener noreferrer"
            >
               <i className={icon.name}></i>
            </a>
         ))}
      </footer>
   );
}

export default Footer;
