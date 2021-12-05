import React from "react";
import './styles/JobItem.css';
import StarRatings from '../StarRatings.js'
import FavoriteButton from "../FavoriteButton.js";
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";

function JobItem({listing}) {


    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();
    
    function insertToFavorites(location, tag1, tag2, name, title, photo, description, rating){

        const insertAsync = async() => {
            // await db("FAVORITES").insert(easybaseData[1]).one();
            await db("FAVORITES").insert({
            title: title,
            name: name,
            tag1: tag1,
            tag2: tag2,
            description: description,
            locationText: location,
            photo: photo,
            rating: rating
            }).one();
          }
        insertAsync();
    
    }


    return (
        <div className="job-item-container">
            <div class="Row">
                <h2>
                    {listing.title}
                    <h5 style={{color: "maroon"}}>| {listing.name}</h5>
                </h2>
            </div>

            <div class="Row">
                <div class="place-image">
                    <img src={listing.photo} />
                </div>
                <div clss="Column">
                    <p>{listing.description}</p>
                    <div className="job-tags">
                        <a>{listing.tag1}</a>
                        <a>{listing.tag2}</a>
                    </div>
                    <br />
                    <div>
                        {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                        {StarRatings(parseFloat(listing.rating))}
                        <FavoriteButton /> */}
                        
                    </div>
                    <div>
                        <button type="button" onClick={open.bind(this, listing.location)}> Get Directions </button>
                        <button type="button" onClick={insertToFavorites.bind(this, 
                            listing.location, listing.tag1, listing.tag2, listing.name, listing.title,
                            listing.photo, listing.description, listing.rating)}> Add To Favorites </button>

                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

function open(url) {
    const win = window.open(url, '_blank');
    if (win != null) {
      win.focus();
    }
  }



export default JobItem;