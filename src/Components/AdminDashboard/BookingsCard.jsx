import React from 'react';

const BookingsCard = () => {
    return (
        <>
            <div className="user-details">
                <div className="detail-item">
                    <span className="label">Customer name:</span>
                    <span className="value">Balamurugan Ajhjh</span>
                </div>
                <div className="detail-item">
                    <span className="label">Email Id:</span>
                    <span className="value">bala@gmail.com</span>
                </div>
                <div className="detail-item">
                    <span className="label">Travel to:</span>
                    <span className="value">Ranthambore national park</span>
                </div>
                <div className="detail-item">
                    <span className="label">Number of passengers:</span>
                    <span className="value">20</span>
                </div>
                <div className="detail-item">
                    <span className="label">Number of days:</span>
                    <span className="value">7 days</span>
                </div>
                <div className="detail-item">
                    <span className="label">Start date:</span>
                    <span className="value">xxxxxx</span>
                </div>
                <div className="detail-item">
                    <span className="label">End date:</span>
                    <span className="value">cccccc</span>
                </div>

                <button className='return-btn custom d-flex justify-content-center'>Contact Customer</button>
            </div>
        </>

    );
};

export default BookingsCard;
