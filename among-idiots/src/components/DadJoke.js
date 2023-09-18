import React, { useEffect, useState } from "react";
import './DadJokes.css';
//import { Link } from "react-router-dom";

function DadJoke (){
 
      const [item, setitem] = useState([])
      useEffect(()=>{
        let options = {
            method: 'GET',
            headers: { 'x-api-key': '3HZiU6cNrs2l/hZ8ZOpJeQ==qy6nDF8ouiBmorz0' }
          }
          let url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1' 
        fetch(url,options)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          //console.log(data)
          console.log(data[0].joke)
         let mainData = JSON.stringify(data[0].joke)
         setitem(mainData)
         //console.log("This is the :+++"+mainData)
        })
        .catch(err => {
            console.log(`error ${err}`)
        }); 
      },[])
      
    return(
        <div className="dadStop">
            <div className="dadStopImg">
                <div className="daddy">
                {item}
                </div>
            </div>
        </div>
        
        
    )
}

export default DadJoke

