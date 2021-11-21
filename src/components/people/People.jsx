import React from "react";
import { Outlet } from "react-router-dom";
import Search from "../search/Search"
import placeListings from "../data/placelistings"
import jobListings from "../data/placelistings";

function Blog() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Search for Places!</h1>
        <Search details={placeListings}/>
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;
