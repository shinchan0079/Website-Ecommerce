import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import CategoryCard from "../Components/CategoryCard";
import AdsSection from "../Components/AdsSection";
import Cards from "../Components/Cards";
import CardBox from "../Components/CardBox";
import AboutSectionbox from "../Components/AboutSectionbox";
import ReviewCards from "../Components/ReviewCards";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Home = () => {
  let category = [
    { _id: 1, text: "Cakes", imgurl: "./Images/cakes.png" },
    { _id: 2, text: "Flower", imgurl: "./Images/flower.png" },
    { _id: 3, text: "Combos", imgurl: "./Images/combos.png" },
    { _id: 4, text: "Birthday", imgurl: "./Images/birthday.png" },
    { _id: 5, text: "Plants", imgurl: "./Images/plants.png" },
    { _id: 6, text: "Anniversary", imgurl: "./Images/anniversary.png" },
  ];


  let banquet = [
    {  title: "Flower",rp:"599", mrp:"1999", delivery:"today", rating:"5", imgurl: "./Images/crd1.webp"},
    {  title: "Drew Drop",rp:"499", mrp:"1299", delivery:"03/08/2026", rating:"5", imgurl: "./Images/crd2.webp"},
    {  title: "Gift",rp:"399", mrp:"1399", delivery:"31/10/2026", rating:"5", imgurl: "./Images/crd3.webp"},
    {  title: "Rose",rp:"299", mrp:"1199", delivery:"tommrow", rating:"5", imgurl: "./Images/crd4.webp"},
    {  title: "Bukeh",rp:"199", mrp:"1599", delivery:"today", rating:"5", imgurl: "./Images/crd5.webp"},
    {  title: "Love ",rp:"799", mrp:"1399", delivery:"today", rating:"5", imgurl: "./Images/crd6.webp"},
    {  title: "Surprise",rp:"999", mrp:"799", delivery:"today", rating:"5", imgurl: "./Images/crd7.webp"},
  ]


  return (
    <>
      {/* slider start */}
      <div className="slider-outer">
        <Carousel>
          <Carousel.Item>
            <img src="./Images/sl1.png" alt="" className="slider-image" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./Images/sl2.png" alt="" className="slider-image" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./Images/sl3.png" alt="" className="slider-image" />
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
      <div className="category-list">
        {category.slice(0, 6).map((item) => {
          return (
            <CategoryCard
              key={item._id}
              text={item.text}
              imageUrl={item.imgurl}
            />
          );
        })}
      </div>
      {/* category end */}

      {/* ads section start */}

      <div className="ads-outer">
        <AdsSection />
      </div>

      {/* ads section end */}

      {/* Best Flower Bouquet start  */}

       <div className="bouquet-outer">
        
        <div className="bouquet-top">
        <h3>Best Flower Bouquet</h3>  
        </div>
        <div className="card-section">
          {banquet.map((item)=><Cards title={item.title} rp={item.rp} mrp={item.mrp} delivery={item.delivery} rating={item.rating} imgurl={item.imgurl}/>)}
        </div>
      </div>

      {/* Best Flower Bouquet end  */}

      {/* card-images start */}

        <div className="card-img-outer">

          <CardBox />

        </div>

      {/* card-images end */}

            {/* Best seling combos start  */}

       <div className="bouquet-outer">
        
        <div className="bouquet-top">
        <h3>Best Selling Combos</h3>  
        </div>
        <div className="card-section">
          {banquet.map((item)=><Cards title={item.title} rp={item.rp} mrp={item.mrp} delivery={item.delivery} rating={item.rating} imgurl={item.imgurl}/>)}
        </div>
      </div>

      {/* Best seling combos end  */}
      



      {/* about section start */}
        <div className="about-ads-outer">
          <AboutSectionbox />
        </div>
      {/* about section end */}
 {/* Best seling cakes start  */}

       <div className="bouquet-outer">
        
        <div className="bouquet-top">
        <h3>Best Selling Combos</h3>  
        </div>
        <div className="card-section">
          {banquet.map((item)=><Cards title={item.title} rp={item.rp} mrp={item.mrp} delivery={item.delivery} rating={item.rating} imgurl={item.imgurl}/>)}
        </div>
      </div>

      {/* Best seling cakes end  */}

        {/* reviewsection start */}
        <div className="review-section-outer">
          <div className="review-heading">
            <h2>What Our Client Says</h2>
          </div>
          <div className="review-section-inner">
            <ReviewCards />
            <ReviewCards />
            <ReviewCards />
            
          </div>
        </div>
        {/* reviewsection end */}







    </>
  );
};

export default Home;
