import React from "react";
import { Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", marginTop: "10px" }}
    >
      <section id="contact" className="py-2">
        <Row className="justify-content-center mb-2">
          <Col md={3} className="text-center">
            <h2>Contact</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={3} className="text-center mb-2">
            <h2>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.IpB5yPUkCFHOzlmM-O7ncAHaFW&pid=Api&P=0&h=180"
                alt="Email Logo"
                className="img-fluid mb"
                style={{ maxHeight: "30px", borderRadius: "5px" }}
              />
            </h2>
            <a href="mailto:nickg8928@gmail.com" className="text-info">
              nickg8928@gmail.com
            </a>
          </Col>
          <Col md={3} className="text-center mb-2">
            <h2>
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.TIYnrsy6wV3TX312soEx5gHaHY&pid=Api&P=0&h=180"
                alt="Phone Logo"
                className="img-fluid mb"
                style={{ maxHeight: "30px", borderRadius: "5px" }}
              />
            </h2>
            <p>8928145452</p>
          </Col>
          <Col md={2} className="text-center mb-2">
            <h2>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub Logo"
                className="img-fluid mb"
                style={{ maxHeight: "30px", borderRadius: "5px" }}
              />
            </h2>
            <a
              href="http://github.com/niketan8928"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info"
            >
              Github
            </a>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h2>
              <img
                src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png"
                alt="LinkedIn Logo"
                className="img-fluid mb"
                style={{ maxHeight: "30px", borderRadius: "5px" }}
              />
            </h2>
            <a
              href="http://www.linkedin.com/in/niketan-gawade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info"
            >
              Linkedin
            </a>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Contact;
