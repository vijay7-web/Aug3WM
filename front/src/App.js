import {React, useState, useEffect} from 'react';
import Axios from 'axios';

import './App.css';


function App() {
  const[name,setName] = useState("");
  const[country,setCountry] = useState("");
  const[stateProvince,setState] = useState("");
  const[webPage, setWebPage] = useState("");
  const[domain, setDomain] = useState("");
  const[alphaCode, setCode] = useState("");
  const[collegeList, setList] = useState(
  [
    // {
    //   "Name": "University of California",
    //   "stateProvince": "San Francisco"
    // },
    // {
    //   "Name": "University of Phila",
    //   "stateProvince": "Philly"
    // }
    

  ] );

  useEffect(() => {
    Axios.get("http://localhost:3003/api/get")
    .then(response => {
        setList(response.data);
    })
  },[]);

  const submitSearch = () => {
      Axios.post("http://localhost:3003/post",
      { 
        country : country,
        domains : domain,
        alpha_two_code : alphaCode,
        web_pages : webPage,
        state_province : stateProvince,
        University_name: name,
      })
      .then(response => {
        console.log(response.data)
      })
    }
    
  

  return (
    <div className="App">
      <div id = "header">
        <h2 >Universities in USA</h2>
      </div>
      {/* <div id = "inputs">
        <input onChange = {(e) => {
            setName(e.target.value)
            }} 
          type = "text" placeholder = "University Name" />
        <input  onChange = {(e) => {
            setState(e.target.value)
            }}  type = "text" placeholder = "State Province" />
        <input  onChange = {(e) => {
            setCountry(e.target.value)
            }} 
        type = "text" placeholder = "country" />
        <input  onChange = {(e) => {
            setCode(e.target.value)
            }}  
        type = "text" placeholder = "alpha Code" />
        <input  onChange = {(e) => {
            setWebPage(e.target.value)
            }} 
            type = "text" placeholder = "web page" />
        <input  onChange = {(e) => {
            setDomain(e.target.value)
            }} 
            type = "text" placeholder = "domain" />
        <button onClick = {submitSearch}>Submit</button>
      </div> */}
      {collegeList.map((val) => {
          return <h1>{val.universityname}</h1>;
      })}
    </div>
  );
}

export default App;

// country
// state province
// webpages
// alpha two code
// name
// domains