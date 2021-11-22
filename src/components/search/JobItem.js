import React from "react";
import { Link } from "react-router-dom"
import './styles/JobItem.css';
import StarRatings from '../StarRatings.js'
import FavoriteButton from "../FavoriteButton.js";


function JobItem({listing}) {
    const dest = "./" + listing.title
    return (

            <div className="job-item-container">
                <h2>{listing.title}</h2>
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
                            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                            {StarRatings(parseFloat(listing.rating))}
                        </div>
                    </div>
                    <br />
                </div>
                <FavoriteButton />
                <div className="job-posted-details">
                    <div className="profile-button">
                        <div className="profile-photo">
                            <img src={listing.photo} />
                            {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                            <i class="fas fa-star"></i> */}
                        </div>
                        &nbsp;
                        <a>{listing.name}</a>
                    </div>
                    <div>
                        <a>{listing.date}</a>
                    </div>
                </div>
            </div>

    );
}


export default JobItem;