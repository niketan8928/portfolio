// import React from 'react'
// import { skills  } from '../data'

// const Skills = () => {
//   return (
//     <div>
//       <section id="skills" class="bg-dark py-5">
//   <div class="container px-4 py-10">
//     <div class="text-center mb-5">
//       <i class="bi bi-chip w-10 inline-block mb-4"></i>
//       <h1 class="display-4 font-medium text-white mb-4">Skills &amp; Technologies</h1>
//       <p class="lead w-75 mx-auto">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
//         ipsa delectus eum quo voluptas aspernatur accusantium distinctio
//         possimus est.
//       </p>
//     </div>
//     <div class="row row-cols-1 row-cols-sm-2 g-2">
//       {skills.map((skill) => (
//         <div key={skill} class="col p-2">
//           <div class="bg-dark-gray rounded flex p-4 h-full items-center">
//             <i class="bi bi-badge-check text-success w-6 h-6 flex-shrink-0 me-4"></i>
//             <span class="font-medium text-white">{skill}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }

// export default Skills

import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <div>
      <section id="skills" className="bg-dark py-4"> 
        <div className="container px-4">
          <div className="text-center mb-4"> 
            <i className="bi bi-chip w-10 inline-block mb-3"></i>
            <h1 className="display-4 font-medium text-white mb-3">Skills &amp; Technologies</h1> 
            
          </div>
          <div className="row row-cols-1 row-cols-sm-2 g-2"> 
            {skills.map((skill) => (
              <div key={skill} className="col p-1">
                <div className="bg-dark-gray rounded flex p-1 h-full items-center">

                  <i className="bi bi-badge-check text-success w-6 h-6 flex-shrink-0 me-4"></i> 
                  <span className="font-medium text-white">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;



