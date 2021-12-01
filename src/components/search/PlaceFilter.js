import React from "react";
import './styles/Filter.css';

function Filter() {
    return (
        <div className="Row">
            <form>
                <div className="Column">
                <label className="checkbox-container"> Restaurant
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                <label className="checkbox-container"> Fast Food
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                </div>

                <div className="Column">
                <label className="checkbox-container"> Bars
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                <label className="checkbox-container"> Convenience Store
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                </div>

                <div className="Column">
                <label className="checkbox-container"> Cafe
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                <label className="checkbox-container"> Bank
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                </div>
            </form>
        </div>
    );
}

export default Filter;