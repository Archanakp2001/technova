import React from 'react'
import Header from '../Components/header'
import Navbar from '../Components/navbar'
import LevelOne from './levelone';
import LevelTwo from './leveltwo';

const App = () => {
  return (
    <div className="Home">
     <Navbar />
      <Header /> 
     
    {/* <LevelOne /> */}
    {/* <LevelTwo /> */}
     </div>
  );
};

// export default App
export default LevelOne
// export default LevelTwo