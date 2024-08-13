import React from 'react'
import { useSelector } from 'react-redux';

const DashboardHome = () => {
    const { datas } = useSelector(state => state.dashboard);
    return (
        <>
            <div class="main">

                <div class="cards">
                    <div class="card-details">
                        <h4 >Total user's</h4>
                        <h5>{datas.totalUser}</h5>
                    </div>

                    <div class="card-details">
                        <h4 >Total booking's</h4>
                        <h5>{datas.totalBookings}</h5>
                    </div>

                    <div class="card-details">
                        <h4 >Tour's completed</h4>
                        <h5>{datas.completedTours}</h5>
                    </div>

                    <div class="card-details">
                        <h4 >Upcoming tour's</h4>
                        <h5>{datas.pendingTours}</h5>
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