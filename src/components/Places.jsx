import React, { useCallback } from "react";
import { Outlet } from "react-router-dom";
import Search from "./search/Search"
import placeListings from "./data/placelistings"
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";

function Places() {  
  
  const [easybaseData, setEasybaseData] = useState([]);
  const { db } = useEasybase();

  const getPlaces = async() => {
    const ebData = await db("PLACES").return().limit(100).all();
    setEasybaseData(ebData);
    //console.log("I ran");
  }

  getPlaces();
  useCallback();
  // console.log(easybaseData);


  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Search for Places!</h1>
        <Search details={easybaseData}/>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default Places;