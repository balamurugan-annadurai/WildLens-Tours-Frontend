import React from 'react'
import "./Tours.css"
import img from "../../assets/tiger.jpg"

const TourCard = () => {
    return (
        <div className='outer-card-container'>
            <div className="inner-card-container">
                <img src={img} alt="" />
                <h4>tour name</h4>
                <p><i class='bx bx-current-location'></i> country</p>
                <div className="card-price">
                    <p>$700</p>
                </div>
                <p className='mini-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla animi sequi, reiciendis architecto dicta laudantium eveniet nam ducimus earum ratione explicabo iusto, repellendus est qui expedita cum maiores similique? Autem!</p>
                <button className="card-button">Explore</button>
            </div>
        </div>
    )
}

export default TourCard