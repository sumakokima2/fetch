import React,{useState,useEffect} from 'react';
import './App.css';
//import data from './recruit.json';

function App() {
  const [data,setData] = useState("");
  useEffect( ()=>{
    const loadData = async () =>{
      const response = await fetch("./https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=27c093eb8a748dff&large_area=Z011&format=json.json");
      const thisdata = await response.json();
      console.log(thisdata);
      setData(thisdata);
    };
    loadData();
    },[]);
  //const aa:any = data; 
  //console.log(data);
    //


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
