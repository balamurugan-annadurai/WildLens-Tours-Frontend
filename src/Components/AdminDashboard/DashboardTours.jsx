import React from 'react'
import TourCard from './../Tours/TourCard';

const DashboardTours = () => {
    return (
        <>
            <div className="main">
                <div className="tours">
                    <h3>Tours</h3>
                    <button className='return-btn custom'>Add Tour</button>
                    <div className="row mt-2">
                        <div className="col-xl-4 col-12 col-lg-4 col-md-6 col-sm-6">
                            <TourCard />
                        </div>

                        <div className="col-xl-4 col-12 col-lg-4 col-md-6 col-sm-6">
                            <TourCard />
                        </div>

                        <div className="col-xl-4 col-12 col-lg-4 col-md-6 col-sm-6">
                            <TourCard />
                        </div>

                        <div className="col-xl-4 col-12 col-lg-4 col-md-6 col-sm-6">
                            <TourCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardTours