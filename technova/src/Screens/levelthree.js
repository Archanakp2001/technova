import React from 'react'
import Dashboardnav from '../Components/dashboardnav'
import Sidebar from '../Components/sidebar'
import LevelThree1 from '../Components/levelthree/levelthree1'
import LevelThree2 from '../Components/levelthree/levelthree2'
import LevelThree3 from '../Components/levelthree/levelthree3'

const LevelThree = () => {
    return (
        <div className="dashboard">
        <Dashboardnav />
        <div className="dashboard-row">
            <div><Sidebar /></div>  
            {/* <div className="l3-t2"><LevelThree2 /></div> */}
            <div><LevelThree1 /></div>
        </div>
        </div>
    )
}

export default LevelThree



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