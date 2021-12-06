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
            var all = await db('FAVORITES').return().where({title: title}).all()

            if (all.length == 0) {
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
          }

        insertAsync();
    }

    function deleteFromFavorites(title) {
        const deleteAsync = async() => {
            await db("FAVORITES").delete().where({title: title}).all()
        }
        deleteAsync();
    }

    return (
        <div className="job-item-container">
            <div className="Row">
                <h2>
                    {listing.title}
                    <h5 style={{color: "maroon"}}>| {listing.name}</h5>
                </h2>
            </div>

            <div className="Row">
                <div className="place-image">
                    <img src={listing.photo} />
                </div>
                <div className="Column">
                    <p>{listing.description}</p>
                    <div className="job-tags">
                        <a>{listing.tag1}</a>
                        <br />
                        <a>{listing.tag2}</a>
                    </div>
                    <div>
                        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                        {StarRatings(parseFloat(listing.rating))}
                        <button className='fav-button' type="button" onClick={insertToFavorites.bind(this, 
                            listing.locationtext, listing.tag1, listing.tag2, listing.name, listing.title,
                            listing.photo, listing.description, listing.rating)}> Add To Favorites </button>
                        <button className='fav-button' type="button" onClick={deleteFromFavorites.bind(this, listing.title)}>Remove from Favorites</button>
                        <br />
                        <button className='map-button' type="button" onClick={open.bind(this, listing.locationtext)}> Get Directions </button>
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