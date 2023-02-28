import React from 'react'
import Dashboardnav from '../Components/dashboardnav'
import Sidebar from '../Components/sidebar'
import LevelOne1 from '../Components/levelone1';
import LevelOne2 from '../Components/levelone2';
import LevelOne3 from '../Components/levelone3';

const LevelOne = () => {
    return (
        <div className="dashboard">
        <Dashboardnav />
        <div className="dashboard-row">
            <div><Sidebar /></div>
            <div><LevelOne2 /></div>
        </div>
        </div>
    )
}

export default LevelOne



// USER
//  uname 
//  pwd 
// selected

//  Level1 Answers

//  dwa 
//  adwdwa 
//  dawwda 

//  Level2 ,2

//level 4,5
//only selected

// ADMIN 
// show finalists