import React from "react";

const Navbar = () => {
    return (
        <div>
            <header className="navbar navbar-expand-md navbar-dark bg-dark sticky-top shadow">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <a href="#about" className="text-white text-xl">
                            Niketan G.
                        </a>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    href="#about"
                                    className="nav-link text-white"
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#projects"
                                    className="nav-link text-white"
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#skills"
                                    className="nav-link text-white"
                                >
                                    Skills
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#contact"
                                    className="nav-link text-white"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
