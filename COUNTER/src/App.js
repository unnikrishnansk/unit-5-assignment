import './App.css';
import {useState} from 'react'

function App() {
  const [counter, setCounter]= useState(10)

  const handleChange=(value)=>{
    if(counter>=15){
     alert("Maximum Limit Reached")
    }
    setCounter(counter+value)
  }
  const handleMultiply=(value)=>{
    if(counter>=15){
     alert("Maximum Limit Reached")
    }
    setCounter(counter*value)
  }
  
  return (
    <div className="App">
      <div>
        <h3 className={counter%2===0? "green":"red"}>Counter:{counter}</h3>
        <button onClick={()=>handleChange(1)}>➕</button>
        <button onClick={()=>handleMultiply(2)}>Double</button>
        <button onClick={()=>handleChange(-1)}>➖</button>
       
      </div>
    </div>
  );
}

export default App;