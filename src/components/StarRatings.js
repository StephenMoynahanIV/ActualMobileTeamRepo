import React from "react"

export default function StarRatings (rating) {
    if (rating <= 0.5) {
        return (
            <div>
                <span>Rating: </span>
                <i class="fa fa-star-half-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
            </div>
        )
    }
    else if (rating <= 1) {
        return (
            <div>
                <span>Rating: </span>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
            </div>
        )
    }
    else if (rating <= 1.5) {
        return (
            <div>
                <span>Rating: </span>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-half-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
            </div>
        )
    }
    else if (rating <= 2) {
        return (
            <div>
                <span>Rating: </span>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
            </div>
        )
    }
    else if (rating <= 2.5) {
        return (
            <div>
                <span>Rating: </span>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-half-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
            </div>
        )
    }
    else if (rating <= 3) {
        return (
            <div>
                <span>Rating: </span>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
            </div>
        )
    }
    else if (rating <= 3.5) {
        return (
            <div>
                <span>Rating: </span>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-half-o" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
            </div>
        )
    }
    else if (rating <= 4) {
        return (
            <div>
                <span>Rating: </span>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-o" aria-hidden="true" style={{color: "gold"}}></i>
            </div>
        )
    }
    else if (rating <= 4.5) {
        return (
            <div>
                <span>Rating: </span>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star-half-o" aria-hidden="true" style={{color: "gold"}}></i>
            </div>
        )
    }
    else if (rating <= 5) {
        return (
            <div>
                <span>Rating: </span>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
                <i class="fa fa-star" aria-hidden="true" style={{color: "gold"}}></i>
            </div>
        )
    }
}