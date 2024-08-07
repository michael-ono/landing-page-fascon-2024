import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../custom.css';
import TrackVisibility from "react-on-screen";
import 'animate.css';

const Blog = () => {
  return (
    <Container fluid className="flex p-3 justify-center px-auto" id="blog">
      <Row>

          <div className="">
            <h1  className="text-center titleHeading mb-3 mt-4 text-white">Latest Updates</h1>
          </div>

        <Col lg={8} className="offset-lg-2">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeInUp animate__delay-0.5s" : ""}>
                <div className="mt-3 bg-blue-300 px-5 py-4 w-2/3" style={{ lineHeight: '35px', color: 'rgb(224, 221, 221)' }} >
                  <Card bg="red" text="white" >
                    <Card.Body>
                      <Card.Title style={{ fontSize: '20px' }}>
                        Lorem ipsum dolor sit amet, 
                      </Card.Title>
                      <Card.Text style={{ fontSize: '15px', color: 'white', paddingBottom: '10px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu velit quis neque tristique lobortis eget in nibh. Aliquam magna quam, varius nec imperdiet non, sodales quis nisi.
                      </Card.Text>
                      <a href="##" className="spanReadBlog text-decoration-none px-2 py-[0.1rem]">
                        <span>
                          Keep Reading <span>→</span>
                        </span>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Col>

        <Col lg={8} className="offset-lg-2">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeInUp animate__delay-0.5s" : ""}>
                <div className="mt-3 bg-blue-300 px-5 py-4 w-2/3" style={{ lineHeight: '35px', color: 'rgb(224, 221, 221)' }} >
                  <Card bg="red" text="white" >
                    <Card.Body>
                      <Card.Title style={{ fontSize: '20px' }}>
                        Lorem ipsum dolor sit amet, 
                      </Card.Title>
                      <Card.Text style={{ fontSize: '15px', color: 'white', paddingBottom: '10px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu velit quis neque tristique lobortis eget in nibh. Aliquam magna quam, varius nec imperdiet non, sodales quis nisi.
                      </Card.Text>
                      <a href="##" className="spanReadBlog text-decoration-none px-2 py-[0.1rem]">
                        <span>
                          Keep Reading <span>→</span>
                        </span>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Col>

        <Col lg={8} className="offset-lg-2">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeInUp animate__delay-0.5s" : ""}>
                <div className="mt-3 bg-blue-300 px-5 py-4 w-2/3" style={{ lineHeight: '35px', color: 'rgb(224, 221, 221)' }} >
                  <Card bg="red" text="white" >
                    <Card.Body>
                      <Card.Title style={{ fontSize: '20px' }}>
                        Lorem ipsum dolor sit amet, 
                      </Card.Title>
                      <Card.Text style={{ fontSize: '15px', color: 'white', paddingBottom: '10px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu velit quis neque tristique lobortis eget in nibh. Aliquam magna quam, varius nec imperdiet non, sodales quis nisi.
                      </Card.Text>
                      <a href="##" className="spanReadBlog text-decoration-none px-2 py-[0.1rem]">
                        <span>
                          Keep Reading <span>→</span>
                        </span>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Col>

        <Col lg={8} className="offset-lg-2">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeInUp animate__delay-0.5s" : ""}>
                <div className="mt-3 bg-blue-300 px-5 py-4 w-2/3" style={{ lineHeight: '35px', color: 'rgb(224, 221, 221)' }} >
                  <Card bg="red" text="white" >
                    <Card.Body>
                      <Card.Title style={{ fontSize: '20px' }}>
                        Lorem ipsum dolor sit amet, 
                      </Card.Title>
                      <Card.Text style={{ fontSize: '15px', color: 'white', paddingBottom: '10px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu velit quis neque tristique lobortis eget in nibh. Aliquam magna quam, varius nec imperdiet non, sodales quis nisi.
                      </Card.Text>
                      <a href="##" className="spanReadBlog text-decoration-none px-2 py-[0.1rem]">
                        <span>
                          Keep Reading <span>→</span>
                        </span>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Col>
        

      </Row>
    </Container>
  );
};

export default Blog;

