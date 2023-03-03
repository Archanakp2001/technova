import React from 'react'
import Header from '../Components/header'
import Navbar from '../Components/navbar'
import LevelFour from './levelfour';
import LevelOne from './levelone';
import LevelThree from './levelthree';
import LevelTwo from './leveltwo';

const App = () => {
  return (
    <div className="Home">
     <Navbar />
      <Header /> 
     
    {/* <LevelOne /> */}
    {/* <LevelTwo /> */}
    {/* <LevelThree /> */}
    {/* <LevelFour /> */}
     </div>
  );
};

// export default App
export default LevelOne
// export default LevelTwo
// export default LevelThree
// export default LevelFour