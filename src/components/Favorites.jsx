import React from "react";
import { Outlet } from "react-router-dom";
import Search from "./search/Search"
import fakeFavListings from "./data/fakeFavlistings"

function Favorites() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Collection of Favorites</h1>
        <Search details={fakeFavListings}/>
      </div>
    </div>
  );
}

export default Favorites;