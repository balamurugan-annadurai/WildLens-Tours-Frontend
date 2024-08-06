import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../assets/tiger.jpg"

const IndividualTourDetail = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='header'>
                <div className="container inner-header">
                    <div className="logo">
                        <h1 className='d-flex align-items-center'><i className='bx bxs-leaf mx-2'></i>WildLens Tours</h1>
                    </div>
                    <button className='return-btn' onClick={() => navigate("/alltours")}><i class='bx bxs-chevrons-left' ></i>Back</button>
                </div>
            </div>

            <div className="tour-details container">
                <h1>Tour title</h1>
            </div>
        </>
    )
}

export default IndividualTourDetail