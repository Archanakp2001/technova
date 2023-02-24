import React from 'react'
import Dashboardnav from '../Components/dashboardnav'
import Sidebar from '../Components/sidebar'
import LevelOne from '../Components/levelone';

const Dashboard = () => {
    return (
        <>
        <Dashboardnav />
        <div className="dashboard-row">
            <div><Sidebar /></div>
            <div><LevelOne /></div>
        </div>
        </>
    )
}

export default Dashboard