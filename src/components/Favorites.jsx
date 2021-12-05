import React from "react";
import { Outlet } from "react-router-dom";
import Search from "./search/Search"
import fakeFavListings from "./data/fakeFavlistings"
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";


function Favorites() {

  const [easybaseData, setEasybaseData] = useState([]);
  const { db } = useEasybase();

  const getFavorites = async() => {
    const ebData = await db("FAVORITES").return().limit(100).all();
    setEasybaseData(ebData);
    //console.log("I ran");
  }

  getFavorites();

  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Collection of Favorites</h1>
        <Search details={easybaseData}/>
      </div>
    </div>
  );
}

export default Favorites;