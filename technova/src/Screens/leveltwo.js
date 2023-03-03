import React from 'react'
import Dashboardnav from '../Components/dashboardnav'
import Sidebar from '../Components/sidebar'
import LevelTwo1 from '../Components/leveltwo/leveltwo1'
import LevelTwo2 from '../Components/leveltwo/leveltwo2'
import LevelTwo3 from '../Components/leveltwo/leveltwo3'
import LevelTwo4 from '../Components/leveltwo/leveltwo4'

const LevelTwo = () => {
    return (
        <div className="dashboard">
        <Dashboardnav />
        <div className="dashboard-row">
            <div><Sidebar /></div>
            <div><LevelTwo1 /></div>
        </div>
        </div>
    )
}

export default LevelTwo



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