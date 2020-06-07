import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from 'axios'
import registerServiceWorker from "./registerServiceWorker";

var results;

//sorting by gender
femaleEmployee =[];
maleEmployee =[];

export function find() {
    var queryURL = "https://randomuser.me/api/?results=33";
    return axios
        .get(queryURL).then(response => {
            results = response.data.results
            console.log(results);
            newEmployeeRow()
            
        })
}
export function newEmployeeRow() {
    for (var i = 0; i < results.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="employee-`+i+`
            <p id="firstName-`+i+`">First Name: `+results[i].name.first+`</p>
            <p id="lastName-`+i+`">Last Name: `+results[i].name.last+`</p>
            <p id="gender-`+i+`">Gender: `+results[i].gender+`</p>
            <p id="email-`+i+`">Email: `+results[i].email+`</p>
            <p id="number-`+i+`">Phone: `+results[i].cell+`</p>
            <img id="image-`+i+`" src="`+results[i].picture.thumbnail+`">
        </div>
        `;
        document.getElementById('content').appendChild(div);
    }
}
//sorting by gender
femaleEmployee =[];
maleEmployee =[];
nonBinaryEmployee= "I'm Sorry; There are no employees found in our system under that category. Try again later."


export function FemaleEmployees(){
    femaleEmployee =[];
    for(var i = 0; i < results.length; i++){
        if (results[i].gender === "female"){
femaleEmployee.push(results[i]);
        }
    }
}

export function MaleEmployees(){
    maleEmployee =[];
    for(var i = 0; i < results.length; i++){
        if (results[i].gender === "male"){
maleEmployee.push(results[i]);
        }
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();










