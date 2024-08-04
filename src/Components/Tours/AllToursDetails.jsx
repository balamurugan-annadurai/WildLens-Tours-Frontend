import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from "../../assets/explore-carousel-imgs/c-1.jpg"
import img2 from "../../assets/explore-carousel-imgs/c-2.jpg"
import img3 from "../../assets/explore-carousel-imgs/c-3.jpg"
import img4 from "../../assets/explore-carousel-imgs/c-4.jpg"
import img5 from "../../assets/explore-carousel-imgs/c-5.jpg"
import img6 from "../../assets/explore-carousel-imgs/c-6.jpg"
import img7 from "../../assets/explore-carousel-imgs/c-7.jpg"


const AllToursDetails = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
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
        <>


            <div className="exp-car-img-container">
                <img src={img1} alt="" />
            </div>

        </>
    )
}

export default AllToursDetails