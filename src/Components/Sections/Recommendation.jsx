import React from 'react'
import TourCard from '../Tours/TourCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Recommendation = () => {

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="recommendation-container" >
      <div className="container">
        <h1 className='white mt-5'>Most visited destinations</h1>
        <Slider {...settings}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Slider>
        <div className='d-flex justify-content-center'>
          <button className='action-btn view-more'>View more</button>
        </div>
      </div>
    </div >
  )
}

export default Recommendation