import React from 'react'
import BookingsCard from './BookingsCard'

const DashboardBookings = () => {
    return (
        <>
            <div className="main">
                <div className="bookings">
                    <h3>Upcoming tour's</h3>
                    <div className="booking-cards">
                        <BookingsCard />
                        <BookingsCard />
                    </div>
                    <h3 className='mt-3'>Completed tour's</h3>
                    <div className="booking-cards">
                        <BookingsCard />
                        <BookingsCard />
                        <BookingsCard />
                        <BookingsCard />
                        <BookingsCard />
                        <BookingsCard />
                        <BookingsCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardBookings