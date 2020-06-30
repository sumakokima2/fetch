import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
//import './recruit.js';
//import dataa from './recruit.json';

function App() {
  
  const [dataa, setDataa] = useState({ hits: [] });
  const [dataf, setDataf] = useState({ hits: [] });

  useEffect(() => {
    const axiosData = async () => {
      const result = await axios(
        'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=d99a6a5b1fe76bd4b18e5788af561243&name=豚',
      );
      setDataa(result.data);
      console.log(result.data);
    };
    

    const fetchData=()=>{
      axios.get('http://hn.algolia.com/api/v1/search?query=redux')
.then(function (response) {
    // handle success
    console.log(response)
    setDataf(response.data);
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
  //const aa:any =   data; 
    //


  return (
    <div className="App">
       <ul>
      {dataa.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
    <br />
    -----------
    <br />
    <ul>
      {dataf.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
