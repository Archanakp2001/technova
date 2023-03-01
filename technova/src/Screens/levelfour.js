import React from 'react'
import Dashboardnav from '../Components/dashboardnav'
import Sidebar from '../Components/sidebar'
import LevelFour1 from '../Components/levelfour/levelfour1'
import LevelFour2 from '../Components/levelfour/levelfour2'

const LevelFour = () => {
    return (
        <div className="dashboard">
        <Dashboardnav />
        <div className="dashboard-row">
            <div><Sidebar /></div>  
            <div className="l3-t2"><LevelFour2 /></div>
            {/* <div><LevelFour1 /></div> */}
        </div>
        </div>
    )
}

export default LevelFour



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