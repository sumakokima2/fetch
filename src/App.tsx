import React,{useState,useEffect} from 'react';
import './App.css';
//import data from './recruit.json';

function App() {
  const [data,setData] = useState("");
  useEffect( ()=>{
    const loadData = async () =>{
      const response = await fetch("./recruit.json");
      const thisdata = await response.json();
      console.log(thisdata);
      console.log(data);
      setData(thisdata);
    };
    loadData();
    });
  //const aa:any = data; 
  //console.log(data);
    //


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
