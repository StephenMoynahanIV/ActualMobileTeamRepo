import React from "react";

function UMass() {
  return (
    <div className="umass">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              // src="http://placehold.it/900x400"
              src="https://cdn.discordapp.com/attachments/910276735038267422/912099519980781608/1200px-University_of_Massachusetts_Amherst_seal_Small.jpeg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">UMass People Finder Instructions</h1>
            <p>
              Welcome to UMass People Finder! You can use the tabs above to <br />
              -find Places in or around UMass <br />
              -find People in or related to UMass, <br />
              -navigate through your saved favorite information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UMass;
