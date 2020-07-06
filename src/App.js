//Starting the project
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Planet from "./Planet"

const App = () => {
const [mydata, setmyData] = useState([]);

  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=7Bgq9GgjWnA7zTMNKBKRsbaI3YkovjAaYGlaEE5X")
    .then(res => { console.log(res) 
      setmyData(res.data);
    })
    .catch(err => { console.log(err,"error!");
    });

  }, []);

  return (
    <div className="App">
     {<Planet
            hdurl={mydata.hdurl}
            name={mydata.copyright}
            title={mydata.title}
            explanation={mydata.explanation}

   />}

  </div>
  );
}

export default App;
