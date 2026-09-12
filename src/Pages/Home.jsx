import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import CategoryCard from '../Components/CategoryCard';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Home = () => {
  let category = [
    {_id:1, text:"Cakes", imgurl:"./Images/cakes.png"},
    {_id:2, text:"Flower", imgurl:"./Images/flower.png"},
    {_id:3, text:"Combos", imgurl:"./Images/combos.png"},
    {_id:4, text:"Birthday", imgurl:"./Images/birthday.png"},
    {_id:5, text:"Plants", imgurl:"./Images/plants.png"},
    {_id:6, text:"Anniversary", imgurl:"./Images/anniversary.png"},
  ]
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

      {/* category start */}
        <div className="category-card-outer">
            {category.slice(0,6).map((item) => {return <CategoryCard key={item._id} text={item.text} imageUrl={item.imgurl} />
            })}
        </div>

      {/* category end */}
    </>
  )
}

export default Home