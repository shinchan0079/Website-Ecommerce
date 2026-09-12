import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Home = () => {
  return (
    <>
      {/* slider start */}
        <div className="slider-outer">
          <Carousel>
      <Carousel.Item>
        <img src="./Images/sl1.png" alt="" className='slider-image'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./Images/sl2.png" alt="" className='slider-image'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="./Images/sl3.png" alt="" className='slider-image'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>





      {/* slider end */}
    </>
  )
}

export default Home