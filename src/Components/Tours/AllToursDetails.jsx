import React from 'react'
import { useNavigate } from 'react-router-dom'
import TourCard from './TourCard';
import Footer from './../Layouts/Footer';
import { useSelector } from 'react-redux';

const AllToursDetails = () => {
    const navigate = useNavigate();

    const { tours } = useSelector(state => state.tour);

    return (
        <>
            <div className='header'>
                <div className="container inner-header">
                    <div className="logo">
                        <h1 className='d-flex align-items-center'><i className='bx bxs-leaf mx-2'></i>WildLens Tours</h1>
                    </div>
                    <button className='return-btn' onClick={() => navigate("/")}><i class='bx bxs-chevrons-left' ></i>Home</button>
                </div>
            </div>

            <div className="filter-container container">
                <select name="" id="" className='filter'>
                    <option value="m">Location</option>
                    <option value="">India</option>
                    <option value="">India</option>
                    <option value="">India</option>
                </select>

                <select name="" id="" className='filter'>
                    <option value="m">Budget</option>
                    <option value="">India</option>
                    <option value="">India</option>
                    <option value="">India</option>
                </select>

                <select name="" id="" className='filter'>
                    <option value="m">Schedules</option>
                    <option value="">India</option>
                    <option value="">India</option>
                    <option value="">India</option>
                </select>
            </div>

            <div className="tours container mb-3">
                <div className="row justify-content-center">
                    {
                        tours.map(tour => (
                            <div className="col-xl-4 col-12 col-lg-4 col-md-6 col-sm-6">
                                <TourCard tour={tour} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllToursDetails