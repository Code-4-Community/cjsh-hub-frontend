import React from 'react';
import './index.css';

//Home Page
const HomePage = () => {
  return (
    <>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              className='d-block w-100 image-height-400'
              src={require('../../assets/images/tree.jpg')}
              alt='First slide'
            />
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100 image-height-400'
              src={require('../../assets/images/planting.jpg')}
              alt='Second slide'
            />
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100 image-height-400'
              src={require('../../assets/images/centennial.jpg')}
              alt='Third slide'
            />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>

      <div className='row m-5 background-teal'>
        <a
          href='http://localhost:3000/map'
          className='col-8 fs-2 fw-bold text-white d-flex align-items-center justify-content-center'
        >
          <h1>SUSTAINABILITY MAP</h1>
        </a>
        <div className='col-4'>
          <img
            className='image-height-300 float-end'
            src={require('../../assets/images/savetree.jpg')}
          />
        </div>
      </div>

      <div className='row m-5 background-teal'>
        <div className='col-4'>
          <img
            className='image-height-300 float-start'
            src={require('../../assets/images/planting.jpg')}
          />
        </div>
        <a
          href='/opportunities'
          className='col-8 fs-2 fw-bold text-white d-flex align-items-center justify-content-center'
        >
          <h1>OPPORTUNITIES FOR STUDENTS</h1>
        </a>
      </div>
    </>
  );
};

export default HomePage;
