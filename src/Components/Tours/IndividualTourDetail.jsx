import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import img from "../../assets/tiger.jpg"
import data from "../../assets/json.json"

const IndividualTourDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { tour } = location.state;

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


            <div className="ranthambore-container container">
                <h1 className='title'>{tour.title}</h1>
                <p>{tour.durationAndLimit}</p>

                <section className="intro-section">
                    <h2>{tour.sections[0].title}</h2>
                    <p>{tour.sections[0].content}</p>
                </section>
                <div className='img-container'>
                    <img src={tour.img} alt="" />
                </div>
                <section className="highlights-section">
                    <h2>{tour.sections[1].title}</h2>

                    {
                        tour.sections[1].highlights.map((highlight, index) => {
                            return <div className="highlight">
                                <h3>{index + 1}) {highlight.title}</h3>
                                <p>{highlight.description}</p>
                            </div>
                        })
                    }

                </section>

                <section className="visit-info-section">
                    <h2>{tour.sections[2].title}</h2>

                    {
                        tour.sections[2].info.map((info, index) => {

                            if (info.title == "Important Tips") {
                                return <div className="info-item">
                                    <h3>{info.title}</h3>
                                    <ul>
                                        {
                                            info.tips.map(tip => (
                                                <li>{tip}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                            else {
                                return <div className="info-item">
                                    <h3>{info.title}</h3>
                                    <p>{info.description}</p>
                                </div>
                            }
                        })
                    }
                </section>

                <section className="contact-section">
                    <h2>{tour.sections[3].title}</h2>
                    <p>{tour.sections[3].description}</p>

                    <h3>{tour.sections[3].contact.title}</h3>
                    <p>{tour.sections[3].contact.description}</p>
                </section>

                <button className='book-now'>Book now</button>
            </div>
        </>
    )
}

export default IndividualTourDetail