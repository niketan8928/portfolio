import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about" className="bg-black">
  <div className="container mx-auto d-flex px-2 py-5 flex-md-row flex-column align-items-center">
    <div className="flex-grow-1 w-100 me-md-5 flex flex-column md:items-start md:text-left mb-5 md:mb-0 items-center text-center text-white">
      <h1 className="display-4 mb-4 font-weight-medium">
        Hi, I'm Niketan .
        <br className="d-none d-lg-inline-block" />I love to build amazing apps.
      </h1>
      <p className="mb-4 lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
        Laborum, voluptas natus?
      </p>
    </div>
    <div className="max-w-lg w-200">
      <img
        className="img-fluid rounded"
        alt="hero"
        src="https://tse2.mm.bing.net/th?id=OIP.5txkvrYjT7QHBJN6ruu7WwHaEK&pid=Api&P=0&h=180"
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default About
