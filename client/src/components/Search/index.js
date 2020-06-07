import React from "react";
import { find } from "../../index"
import "./style.css";
import { femaleEmployee } from "../../index"
import { maleEmployee } from "../../index"


function Search() {
  find()
  return (
    <div className="search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <button onClick={find}>Search</button>
          <input type="text" id="filterNationality"></input>
        <button onClick={femaleEmployee}>Female Employees</button>
        <button onClick={maleEmployee}>Male Employees</button>
        <button onClick={nonBinaryEmployee}>Non Binary Employees</button>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
}
export default Search;