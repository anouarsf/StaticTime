import React from 'react';
import './App.css';
import Timefunction from './component/timefunction'
import Hoursminute from './component/hoursminute'
import Titlefunction from './component/Titlefunction'


function App() {
  return (
    <div className="App">
   
   <Titlefunction/>
    <Timefunction/>
    <Hoursminute/>
    </div>
  );
}

export default App;
