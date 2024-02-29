import React from 'react';
import {educationData} from '../data';

const Education = () => {

  return (
    <div>
      <section id="education" className="py-5 bg-black text-white">
        <div className="container px-4">
          <div className="text-center mb-4">
            <i className="bi bi-book w-10 inline-block mb-3"></i>
            <h1 className="display-4 font-medium  mb-3 text-white">Education</h1>
          </div>
          <div className="row">
            {educationData.map((education, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100 bg-dark text-white border-white">
                  <div className="card-body">
                    <h2 className="card-title">{education.school}</h2>
                    <p className="card-text">
                      <strong>Degree:</strong> {education.degree}
                      <br />
                      <strong>Graduation Year:</strong> {education.graduationYear}
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

export default Education;
