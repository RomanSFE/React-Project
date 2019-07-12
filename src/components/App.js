import React from 'react';
import './App.css';
import First from './First/First';
import Second from './Second/Second';
import Forms from './Forms/Forms';
import Menu from './Menu/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>

      <Menu />
      
      <switch>
        <Route path="/" exact component={First}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/second" component={Second}/>
      </switch>

      <h1>hello react</h1>

      <First myprops='My first props'/>
      <First myprops='My second props'/>
      <Second/>

      <div className="form-first">
         <Forms/>
      </div>

    </div>
    </BrowserRouter>

  );
}


export default App;

