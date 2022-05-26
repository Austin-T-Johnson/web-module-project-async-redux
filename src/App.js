import React, { useEffect } from 'react';
import './App.css';
import './index.css'


import { connect } from 'react-redux'
import * as actions from './state/action-creators'

function App(props) {

//  useEffect(() => {
//      props.getActivity()
//  }, [])

 
 

return (
    <div className="App">
       
      <h1>YOU BORED?</h1>
      <div className="title-div">
      <h2>CLICK THE BUTTON BELOW FOR SOME COOL THINGS TO DO!</h2>
      </div>
      <button id="btn" onClick={() => props.getActivity()}>CLICK ME!</button>
<div className="response-div" id="hidden">
    <h3>{props.activity}</h3>
    </div>
     
     <footer>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,256C672,256,768,224,864,229.3C960,235,1056,277,1152,293.3C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
     </footer>
</div>
   
  );
}

export default connect(st => st, actions)(App);