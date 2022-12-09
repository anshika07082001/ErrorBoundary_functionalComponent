import { useState } from 'react';
import './App.css';
import NumberComponent from './component/NumberComponent';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from './component/ErrorComponent';

function App() {
  var [number,setNumber]=useState(6)
  // random number function 
  const btnHandler=()=>{
    number=Math.floor(Math.random()*20)+1;
    setNumber(number)
  }
  return (
    <div className="container">
      <h2>Error Boundary in Functional Component</h2>
      <ErrorBoundary FallbackComponent={ErrorComponent} onReset={()=>setNumber(9)}>
        <NumberComponent btnHandler={btnHandler} number={number}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
