import React,{useState,useEffect} from 'react';
import './App.css';
import './recruit.js';
//import data from './recruit.json';

function App() {
  
  const [data,setData] = useState("");
  useEffect( ()=>{

    const loadData = async () =>{

      const responsea:any =　fetch('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=27c093eb8a748dff&large_area=Z011&format=json&count=2',{
        mode: 'cors'
      })
      .then(response => {
        return response.json();
      })
      .then(body => {
        console.log(JSON.stringify(body));
      });
      console.log(responsea);

      setData(responsea);
      console.log(data);
    };
    loadData();
    },[]);
  //const aa:any =   data; 
  //console.log(data);
    //


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
