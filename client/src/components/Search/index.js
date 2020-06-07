import React from "react";
import { find } from "../../index";
import "./style.css";
import { femaleEmployee } from "../../index";
import { maleEmployee } from "../../index";
import { sortNameAscending } from "../../index";
import { sortNameDescending } from "../../index";
import { filterByLocation } from "../../index";
import { nonBinaryEmployee } from "../../index";

function Search() {
  find();
  return (
    <div className="search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <input type="text" id="filterState"></input>
          <button onClick={filterByLocation}>Search by State</button>
          </div><div>
          <button onClick={femaleEmployee}>Female Employees</button>
          <button onClick={nonBinaryEmployee}>Non Binary Employees</button>
          <button onClick={maleEmployee}>Male Employees</button>
          <button onClick={sortNameAscending}>Name Ascending</button>
          <button onClick={sortNameDescending}>Name Descending</button>
         
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
}
export default Search;

