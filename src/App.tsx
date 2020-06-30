import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
//import './recruit.js';
//import dataa from './recruit.json';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function App() {
  
  const [data, setData] = useState({ hits: [] });
  const [fdata, setFData] = useState({ hits: [] });

  useEffect(() => {
    const axiosData = async () => {
      const result = await axios(
        'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=27c093eb8a748dff&large_area=Z011&format=json',
        {
          withCredentials: true
        });
       // axios.defaults.withCredentials = true; // global に設定してしまう場合
      setData(result.data);
      console.log(result);
    };
    

    const fetchData=()=>{
      fetch('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=27c093eb8a748dff&large_area=Z011&format=json',
      {method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': '27c093eb8a748dff'
        }
       })
      .then(function (response) {
       // handle success
        console.log(response)
        setFData(response.json);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    } 
    axiosData();
    fetchData();
    },[]);
/* {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}*/       

  return (
    <div className="App">
       <ul>
     
    </ul>
    </div>
  );
}

export default App;
