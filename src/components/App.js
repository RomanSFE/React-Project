import React from 'react';
import './App.css';
import First from './First/First';
import Second from './Second/Second';
import Forms from './Forms/Forms';




function App() {
  return (
    <div className='App'>

    

      
      <h1>hello react</h1>

      <First myprops='My first props'/>
      <First myprops='My second props'/>
      <Second/>

      <div className="form-first">
         <Forms/>
      </div>

      

    </div>
  );
}


export default App;

