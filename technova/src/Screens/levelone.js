import React from 'react'
import Dashboardnav from '../Components/dashboardnav'
import Sidebar from '../Components/sidebar'
import LevelOne1 from '../Components/levelone1';
import LevelOne2 from '../Components/levelone2';
import LevelOne3 from '../Components/levelone3';

const LevelOne = () => {
    return (
        <>
        <Dashboardnav />
        <div className="dashboard-row">
            <div><Sidebar /></div>
            <div><LevelOne1 /></div>
        </div>
        </>
    )
}

export default LevelOne