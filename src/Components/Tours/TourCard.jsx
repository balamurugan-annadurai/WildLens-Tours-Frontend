import React from 'react'
import "./Tours.css"
import img from "../../assets/tiger.jpg"
import { useNavigate } from 'react-router-dom'

const TourCard = () => {
    const navigate = useNavigate();

    return (
        <div className='outer-card-container'>
            <div className="inner-card-container">
                <img src={img} alt="" />
                <h4>tour name</h4>
                <p><i class='bx bx-current-location'></i> country</p>
                <div className="card-price">
                    <p>$700 (<span className='days'>7 to 8 days</span>)</p>
                </div>
                <p className='mini-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla animi sequi, reiciendis architecto dicta laudantium eveniet nam ducimus earum ratione explicabo iusto, repellendus est qui expedita cum maiores similique? Autem!</p>
                <button className="card-button" onClick={()=>navigate("/details")}>Details</button>
            </div>
        </div>
    )
}

export default TourCard