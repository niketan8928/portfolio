import React from 'react';
import { experienceData } from '../data';

const Experience = () => {
  return (
    <div>
      <section id="experience" className="py-5 bg-dark text-white">
        <div className="container px-4">
          <div className="text-center mb-4">
            <i className="bi bi-briefcase w-10 inline-block mb-3"></i>
            <h1 className="display-4 font-medium  mb-3">Experience</h1>
          </div>
          <div className="row">
            {experienceData.map((experience, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h2 className="card-title">{experience.company}</h2>
                    <h5 className="card-subtitle mb-2 text-muted">{experience.position}</h5>
                    <p className="card-text">
                      <strong>Duration:</strong> {experience.duration}
                      <br />
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
