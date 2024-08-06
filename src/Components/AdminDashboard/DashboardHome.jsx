import React from 'react'

const DashboardHome = () => {
    return (
        <>
            <div class="main">

                <div class="cards">
                    <div class="card-details">
                        <h4 >Total user's</h4>
                        <h5>1000</h5>
                    </div>

                    <div class="card-details">
                        <h4 >Total booking's</h4>
                        <h5>100</h5>
                    </div>

                    <div class="card-details">
                        <h4 >Tour's completed</h4>
                        <h5>50</h5>
                    </div>

                    <div class="card-details">
                        <h4 >Upcoming tour's</h4>
                        <h5>10</h5>
                    </div>
                </div>

                <div class="charts">
                    <div class="chart">
                        <h4>Earnings (past 12 months)</h4>
                    </div>
                    <div class="chart" id="doughnut-chart">
                        <h4>Employees</h4>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashboardHome