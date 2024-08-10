import React from 'react';
import TourCard from '../Tours/TourCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

const Recommendation = () => {
    const { tours } = useSelector(state => state.tour);
    const { login, userDetails } = useSelector(state => state.auth);

    // Initialize variables
    let previousBookings = [];
    let recommendedTours = tours;

    // Ensure userDetails and bookings are properly initialized
    if (login && userDetails && Array.isArray(userDetails.bookings)) {
        previousBookings = userDetails.bookings.filter(booking => (
            booking.status === "completed"
        ));

        const latestBooking = previousBookings[0];

        if (latestBooking) {
            recommendedTours = tours.filter(tour => (
                tour.country === latestBooking.bookingDetails.travelTo
            ));
        }
    }

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
    };

    return (
        <div className="recommendation-container">
            <div className="container">
                <h1 className='white mt-5'>
                    {
                        previousBookings.length > 0 && login ?
                            "Based on your previous bookings" :
                            "Most visited destinations"
                    }
                </h1>
                <Slider {...settings}>
                    {
                        previousBookings.length > 0 && login ?
                            (
                                recommendedTours.map(tour => (
                                    <TourCard key={tour.id} tour={tour} />
                                ))
                            ) :
                            (
                                tours.map(tour => (
                                    <TourCard key={tour.id} tour={tour} />
                                ))
                            )
                    }
                </Slider>
                <div className='d-flex justify-content-center'>
                    <button className='action-btn view-more'>View more</button>
                </div>
            </div>
        </div>
    );
};

export default Recommendation;
