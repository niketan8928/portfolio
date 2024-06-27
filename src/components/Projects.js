import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <div>
      <section id="projects" className="text-gray-400 bg-gray-900 py-5">
  <div className="container px-4 py-10 text-center">
    <div className="mb-5">
      <div className="mx-auto inline-block w-10 mb-4" />
      <h1 className="display-4 font-weight-medium mb-4">Apps I've Built</h1>
      <p className="mx-auto lead">Some of my projects</p>
    </div>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {projects.map((project) => (
        <div className="col p-3" key={project.image}>
          <a href={project.link} className="text-decoration-none">
            <div className="position-relative">
              <img
                alt="gallery"
                className="w-100 h-100 object-cover object-center"
                src={project.image}
              />
              <div className="position-absolute top-0 start-0 end-0 bottom-0 p-4 border border-gray-800 bg-gray-900 opacity-0 hover-opacity-100">
                <h2 className="text-sm text-green-400 mb-1">{project.subtitle}</h2>
                <h1 className="h5 text-white mb-3">{project.title}</h1>
                <p className="lead">{project.description}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects
