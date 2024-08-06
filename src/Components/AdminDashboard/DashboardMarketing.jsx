import React from 'react'

const DashboardMarketing = () => {
    return (
        <>
            <div className="main">
                <div className="marketing">
                    <h3>Email Marketing <i class='bx bxs-envelope' ></i></h3>
                    <p>Send promotional emails to all user's</p>

                    <div className="input-container-db mt-2">
                        <input
                            type="email"
                            placeholder='Email Subject'
                        ></input>
                    </div>

                    <div className="input-container-db mt-2">
                        <textarea
                            type="text"
                            placeholder='Email Content'
                        ></textarea>
                    </div>

                    <button className='return-btn custom'>Send</button>
                </div>
            </div>
        </>
    )
}

export default DashboardMarketing