import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SingleAbout from './components/SingleAbout';

function App() {
  const[value,setValue]=useState(0);
  const decreaseValue=()=>{
    setValue( prev=>prev-1 )

    
  }

  const increaseValue=()=>{
    setValue( prev=>prev+1 )

  }
  return (
    <>
    <div>
      <button onClick={decreaseValue}>
        -
      </button>
      <span>{value}</span>
      <button onClick={increaseValue} >
        +
      </button>

    </div>
    <div>
      <SingleAbout 
       value="It is child"
       description="nepal"
       
       
       />
    </div>
    </>
  );
}

export default App;
