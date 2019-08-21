import React, { useState } from 'react';

import {HoursInput} from './components/HoursInput';
import {TotalHours} from './components/TotalHours';

import './App.css';


function App() {

  const [timeData, setTimeData] = useState(null);

  return (

    <div id="App">

      <TotalHours timeData={timeData}/>

      <hr style={{
        width: 'calc(100% - 24px)',
        border: 0,
        borderTop: '2px solid #dce5ff',
        marginBottom: 0,
        marginTop: 0
      }}/>

      <HoursInput updateHours={ timeDataInput => {
        setTimeData(timeDataInput);
      }}/>

    </div>
  );
}

export default App;
