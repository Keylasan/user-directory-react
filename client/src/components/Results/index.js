import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Results() {
  return (
    <div className="about">
    <div class="container">
      <div class="row align-items-center my-5">
        <div class="col-lg-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="http://placehold.it/900x400"
            alt=""
          />
        </div>
        <div class="col-lg-5">
          <h1 class="font-weight-light"> Your Search Results</h1>
          <h2 class="font-weight-light"></h2>
          <p>
            Lorem Ipsum is simply dummy text o
          </p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Results;