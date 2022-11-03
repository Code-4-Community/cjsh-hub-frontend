import React from 'react';
import './index.css';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

//Home Page
const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="mt-5 mb-5">
        <div className="float-start fw-bold fs-3">Northeastern University</div>
        <div className="float-end">
          <ul className="nav nav-pills mb-2 text-white">
            <li className="nav-item">
              <a className="nav-link active" href="http://localhost:3000">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/map">
                Sustainability Map
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="http://localhost:3000/opportunities"
              >
                Opportunities
              </a>
            </li>

            {/*Sign Up overlays?*/}
            <li className="nav-item">
              <Button
                className="nav-link text-primary fw-normal"
                onClick={onOpen}
              >
                Log In
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    <b>Log In</b>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <div className="m-2">
                      <label htmlFor="email">
                        <b>Email</b>
                      </label>
                    </div>
                    <div className="m-2 border border-success rounded-3">
                      <input
                        className="m-1"
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                      />
                    </div>

                    <div className="m-2">
                      <label htmlFor="psw">
                        <b>Password</b>
                      </label>
                    </div>
                    <div className="m-2 border border-success rounded-3">
                      <input
                        className="m-1"
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                      />
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Log In
                    </Button>
                    <Button variant="ghost">Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </li>

            <li className="nav-item">
              <Button
                className="nav-link text-primary fw-normal"
                onClick={onOpen}
              >
                Sign Up
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    <b>Sign Up</b>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <div className="m-2">
                      <label htmlFor="firstname">
                        <b>First Name</b>
                      </label>
                    </div>
                    <div className="m-2 border border-success rounded-3">
                      <input
                        className="m-1"
                        type="text"
                        placeholder="Enter First Name"
                        name="firstname"
                        required
                      />
                    </div>

                    <div className="m-2">
                      <label htmlFor="lastname">
                        <b>Last Name</b>
                      </label>
                    </div>
                    <div className="m-2 border border-success rounded-3">
                      <input
                        className="m-1"
                        type="text"
                        placeholder="Enter Last Name"
                        name="lastname"
                        required
                      />
                    </div>

                    <div className="m-2">
                      <label htmlFor="email">
                        <b>Email</b>
                      </label>
                    </div>
                    <div className="m-2 border border-success rounded-3">
                      <input
                        className="m-1"
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                      />
                    </div>

                    <div className="m-2">
                      <label htmlFor="psw">
                        <b>Password</b>
                      </label>
                    </div>
                    <div className="m-2 border border-success rounded-3">
                      <input
                        className="m-1"
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                      />
                    </div>

                    <div className="m-2">
                      <label htmlFor="reenterpsw">
                        <b>Re-enter Password</b>
                      </label>
                    </div>
                    <div className="m-2 border border-success rounded-3">
                      <input
                        className="m-1"
                        type="password"
                        placeholder="Confirm Password"
                        name="reenterpsw"
                        required
                      />
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Sign Up
                    </Button>
                    <Button variant="ghost">Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </li>
          </ul>
        </div>
        <div className="float-done"></div>
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 image-height-400"
              src={require('../images/tree.jpg')}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 image-height-400"
              src={require('../images/planting.jpg')}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 image-height-400"
              src={require('../images/centennial.jpg')}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="row m-5 background-teal">
        <a
          href="http://localhost:3000/map"
          className="col-8 fs-2 fw-bold text-white d-flex align-items-center justify-content-center"
        >
          <h1>SUSTAINABILITY MAP</h1>
        </a>
        <div className="col-4">
          <img
            className="image-height-300 float-end"
            src={require('../images/savetree.jpg')}
          />
        </div>
      </div>

      <div className="row m-5 background-teal">
        <div className="col-4">
          <img
            className="image-height-300 float-start"
            src={require('../images/planting.jpg')}
          />
        </div>
        <a
          href="http://localhost:3000/opportunities"
          className="col-8 fs-2 fw-bold text-white d-flex align-items-center justify-content-center"
        >
          <h1>OPPORTUNITIES FOR STUDENTS</h1>
        </a>
      </div>
    </>
  );
};

function openForm() {
  document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}

export default HomePage;
