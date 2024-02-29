import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <div>
      <section id="projects" class="text-gray-400 bg-gray-900 py-5">
  <div class="container px-4 py-10 text-center">
    <div class="mb-5">
      <div class="mx-auto inline-block w-10 mb-4" />
      <h1 class="display-4 font-weight-medium mb-4">Apps I've Built</h1>
      <p class="mx-auto lead">Some of my projects</p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      {projects.map((project) => (
        <div class="col p-3" key={project.image}>
          <a href={project.link} class="text-decoration-none">
            <div class="position-relative">
              <img
                alt="gallery"
                class="w-100 h-100 object-cover object-center"
                src={project.image}
              />
              <div class="position-absolute top-0 start-0 end-0 bottom-0 p-4 border border-gray-800 bg-gray-900 opacity-0 hover-opacity-100">
                <h2 class="text-sm text-green-400 mb-1">{project.subtitle}</h2>
                <h1 class="h5 text-white mb-3">{project.title}</h1>
                <p class="lead">{project.description}</p>
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
