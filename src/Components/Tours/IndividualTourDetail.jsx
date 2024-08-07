import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../assets/tiger.jpg"
import data from "../../assets/json.json"

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

            
            <div className="ranthambore-container container">
                <h1 className='title'>Ranthambore National Park: A Journey into the Heart of the Wild</h1>
                <p>7 days / Limited to 6 travelers</p>
                
                <section className="intro-section">
                    <h2>Discover the Untamed Beauty of Ranthambore</h2>
                    <p>Welcome to Ranthambore National Park, one of India's most renowned wildlife sanctuaries and a haven for nature enthusiasts. Located in the Sawai Madhopur district of Rajasthan, this park offers a thrilling experience of India’s wilderness, known for its majestic tigers and diverse wildlife.</p>
                </section>
                <div className='img-container'>
                    <img src="https://images.pexels.com/photos/2649841/pexels-photo-2649841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <section className="highlights-section">
                    <h2>Why Visit Ranthambore National Park?</h2>

                    <div className="highlight">
                        <h3>1. Home to Majestic Tigers</h3>
                        <p>Ranthambore is famed for its thriving population of Royal Bengal Tigers. With the park's lush landscapes and varied terrain, it provides an excellent opportunity to spot these elusive predators in their natural habitat. Join our guided safari tours to catch a glimpse of these magnificent big cats and witness their regal presence up close.</p>
                    </div>

                    <div className="highlight">
                        <h3>2. A Rich Wildlife Diversity</h3>
                        <p>Beyond tigers, Ranthambore is teeming with a variety of wildlife, including leopards, sloth bears, wild boars, and an array of deer species like sambhar and chital. The park is also a birdwatcher's paradise, with over 300 species of birds including the colorful Indian Pitta and the majestic Indian Eagle Owl.</p>
                    </div>

                    <div className="highlight">
                        <h3>3. Scenic Beauty and Historical Significance</h3>
                        <p>The park is not only a wildlife sanctuary but also a treasure trove of historical and scenic beauty. Explore the ancient Ranthambore Fort, a UNESCO World Heritage site, which stands majestically amidst the forest. The fort offers panoramic views of the park and its surrounding landscape, adding a historical charm to your wildlife adventure.</p>
                    </div>

                    <div className="highlight">
                        <h3>4. Exciting Safari Experiences</h3>
                        <p>Embark on exhilarating jeep safaris and canter rides through the park’s diverse zones. Our experienced naturalists and guides will ensure that you get the most out of your safari, sharing insights about the park’s ecosystem, wildlife behavior, and conservation efforts.</p>
                    </div>

                    <div className="highlight">
                        <h3>5. Conservation Efforts and Sustainability</h3>
                        <p>At Wildlens Tours, we are committed to promoting sustainable tourism and conservation. Ranthambore National Park is a model for wildlife conservation, with ongoing efforts to protect and preserve its unique ecosystem. By visiting the park, you contribute to these important conservation initiatives.</p>
                    </div>
                </section>

                <section className="visit-info-section">
                    <h2>Planning Your Visit</h2>

                    <div className="info-item">
                        <h3>Best Time to Visit:</h3>
                        <p>The ideal time to visit Ranthambore National Park is from October to April. The cooler months are perfect for wildlife spotting, as animals are more active and easier to see. The park is closed during the monsoon season (July to September).</p>
                    </div>

                    <div className="info-item">
                        <h3>How to Get There:</h3>
                        <p>Ranthambore National Park is well-connected by road and rail. The nearest railway station is Sawai Madhopur, which is approximately 10 km from the park. Jaipur, the capital of Rajasthan, is about 180 km away and serves as the main gateway for visitors.</p>
                    </div>

                    <div className="info-item">
                        <h3>Where to Stay:</h3>
                        <p>Choose from a range of accommodations that cater to different preferences and budgets. From luxurious resorts to comfortable lodges, we can assist you in finding the perfect stay to complement your wildlife adventure.</p>
                    </div>

                    <div className="info-item">
                        <h3>Important Tips:</h3>
                        <ul>
                            <li>Book your safari in advance to ensure availability and preferred timings.</li>
                            <li>Wear comfortable, neutral-colored clothing and sturdy footwear.</li>
                            <li>Follow park regulations and respect wildlife to ensure a safe and enjoyable experience.</li>
                        </ul>
                    </div>
                </section>

                <section className="contact-section">
                    <h2>Experience the Magic of Ranthambore with Wildlens Tours</h2>
                    <p>At Wildlens Tours, we offer curated safari experiences tailored to your interests. Whether you’re an avid wildlife photographer, a nature lover, or a family looking for an adventure, our expert guides and personalized tours will make your visit to Ranthambore National Park truly unforgettable.</p>

                    <h3>Contact Us Today</h3>
                    <p>Embark on a thrilling journey into the heart of Ranthambore National Park. Contact us today to book your safari and start your adventure in one of India’s most captivating wildlife destinations.</p>
                </section>
            </div>
        </>
    )
}

export default IndividualTourDetail