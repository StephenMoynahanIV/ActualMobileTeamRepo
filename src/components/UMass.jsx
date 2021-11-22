import React from "react";
import "./FAQ.css"

function UMass() {
  return (
    <div className="umass">
      <div class="container">
        <div class="col align-items-center my-5">
          <div style={{display: "flex", justifyContent: "center", marginBottom: "50px"}}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              // src="http://placehold.it/900x400"
              src="https://cdn.discordapp.com/attachments/910276735038267422/912099519980781608/1200px-University_of_Massachusetts_Amherst_seal_Small.jpeg"
              alt=""
            />
          </div>
          <div>
            <h1 class="font-weight-bold" style={{textAlign: "center", marginTop: "30px"}}>UMass People Finder Instructions</h1>
            <h5 style={{textAlign: "center", marginTop: "15px"}}>
              Welcome to UMass People Finder! You can use the tabs above to...
            </h5>
            <h5 style={{marginTop: "15px"}}>
              <blockquote>
                + find <u><a href = "/Places">Places</a></u> in or around UMass <br />
                + find <u><a href = "/People">People</a></u> in or related to UMass <br />
                + navigate through your saved <u><a href = "/Favorites">Favorite</a></u> information
              </blockquote>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UMass;

