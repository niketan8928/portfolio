import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header class="navbar navbar-expand-md navbar-dark bg-dark sticky-top shadow">
    <div class="container-fluid">
        <a class="navbar-brand">
            <a href="#about" class="text-white text-xl">Niketan G.</a>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                    <a href="#about" class="nav-link text-white">About</a>
                </li>
                <li class="nav-item">
                    <a href="#projects" class="nav-link text-white">Projects</a>
                </li>
                <li class="nav-item">
                    <a href="#skills" class="nav-link text-white">Skills</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link text-white">Contact</a>
                </li>
            </ul>
            
        </div>
    </div>
</header>

    </div>
  )
}

export default Navbar