import React from "react";
import './styles/JobItem.css';
import StarRatings from '../StarRatings.js'
import FavoriteButton from "../FavoriteButton.js";


function JobItem({listing}) {
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
                        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                        {StarRatings(parseFloat(listing.rating))}
                        <FavoriteButton />
                        
                    </div>
                    <div>

                        <button type="button" onClick={open.bind(this, listing.location)}> Get Directions </button>

                    </div>
                </div>
                <br />
            </div>
            {/* <div className="job-posted-details">
                <div className="profile-button">
                    <div className="profile-photo">
                        <img src={listing.photo} />
                    </div>
                    &nbsp;
                    <a>{listing.name}</a>
                </div>
                <div>
                    <a>{listing.date}</a>
                </div>
            </div> */}
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