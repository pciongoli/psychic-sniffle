import React, { useState } from "react";
import Project from "../Project";

function Doreats() {
   // links to instagram posts
   const [projects] = useState([
      {
         name: "surf-report",
         description: "Delicous Food!",
         link: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
         repo: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
      },
      {
         name: "pastel-puzzels",
         description: "Delicous Food!",
         link: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
         repo: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
      },
      {
         name: "run-buddy",
         description: "Delicous Food!",
         link: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
         repo: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
      },
      {
         name: "led-wall",
         description: "Delicous Food!",
         link: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
         repo: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
      },
      {
         name: "calculator",
         description: "Delicous Food!",
         link: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
         repo: "https://instagram.com/doreenciongoli_eats?igshid=YmMyMTA2M2Y=",
      },
   ]);

   return (
      <div>
         <div className="flex-row">
            {projects.map((project, idx) => (
               <Project project={project} key={"project" + idx} />
            ))}
         </div>
      </div>
   );
}

export default Doreats;
