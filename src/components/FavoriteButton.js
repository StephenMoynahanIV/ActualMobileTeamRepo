import React from "react"
// import './FavoriteButton.scss'


export default function FavoriteButton () {
    return (
        // <div className="heart-box">
        //     {/* <script>
        //         function animation() {
        //             document.getElementById("heart").click(function () {
        //                 document.getElementById("heart").toggleClass("press", 1000);
        //             })
        //         }
        //     </script> */}
        //     <i className="heart" onClick="animation()"></i>
        //     <span className="click-message">liked!</span>
        // </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Add to Favorites</label>
        </div>
    )
}


// import React, { useState } from 'react';
// // import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// // import FavoriteIcon from '@material-ui/icons/Favorite';
// // import Favorite from "@material-ui/icons/Favorite";
// // import IconButton from '@material-ui/core/IconButton';


// export default function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [fav, setFav] = React.useState(false);

//   return (
//     <div>
//       <p>Added to Fav: {fav}</p>
//       <button onClick={() => setFav(!fav)}>
//         Add to Favorites
//       </button>
//     </div>
//   );
// }

// // export default function FavoriteButton() {
// //     const [fav, setFav] = React.useState(false);

// //     return (
// //         <IconButton onClick={() => { setFav(!fav) }}  aria-label="delete" color="primary">
// //         <FavoriteBorderIcon></FavoriteBorderIcon>
// //         </IconButton>
// //     )


// //     // return fav ? (
// //     //     <IconButton onClick={() => { setFav(!fav) }}  aria-label="delete" color="primary">
// //     //     <FavoriteBorderIcon></FavoriteBorderIcon>
// //     //     </IconButton>) : (
// //     //     <IconButton onClick={() => { setFav(!fav) }} aria-label="delete" color="primary">
// //     //     <Favorite></Favorite>
// //     //     </IconButton> )
// // }