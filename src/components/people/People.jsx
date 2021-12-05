import React from "react";
import { Outlet } from "react-router-dom";
import Search from "../search/Search"
import peopleListings from "../data/peoplelistings"
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";


function People() {

  const [easybaseData, setEasybaseData] = useState([]);
  const { db } = useEasybase();

  const getPlaces = async() => {
    const ebData = await db("PEOPLE").return().limit(10).all();
    setEasybaseData(ebData);
    //console.log("I ran");
  }

  getPlaces();
  //console.log(easybaseData);


  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Search for People!</h1>
        <Search details={easybaseData}/>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default People;
