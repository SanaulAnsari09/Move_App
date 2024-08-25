import React, { useContext } from "react";
import AllListCard from "./AllListCard";
import { Context } from "../pages/Home";

// Inside this componet i made tab for all/movies and TV Shows 
const Movies = () => {

  // got seaarchValue state setter function from context
  const {setSearchValue} = useContext(Context);

  // onclick search input will be empty 
  const handleEmptySearchInput = () => {
    setSearchValue("");
  };

  return (
    <div className="row mt-5">
      <ul className="nav nav-tabs custom-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link custom-tab-link active"
            id="supplier-selection"
            data-bs-toggle="tab"
            data-bs-target="#supplier-selection-control"
            type="button"
            role="tab"
            aria-controls="supplier-selection-control"
            aria-selected="false"
            onClick={handleEmptySearchInput}
          >
            All
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link custom-tab-link"
            id="reservation-request"
            data-bs-toggle="tab"
            data-bs-target="#reservation-request-control"
            type="button"
            role="tab"
            aria-controls="reservation-request-control"
            aria-selected="false"
            onClick={handleEmptySearchInput}
          >
            Movies
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link custom-tab-link"
            id="final-price"
            data-bs-toggle="tab"
            data-bs-target="#final-price-control"
            type="button"
            role="tab"
            aria-controls="final-price-control"
            aria-selected="false"
            onClick={handleEmptySearchInput}
          >
            TV Shows
          </button>
        </li>
      </ul>
      <div className="tab-content p-0" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="supplier-selection-control"
          role="tabpanel"
          aria-labelledby="supplier-selection"
        >
          <AllListCard keyword={"hollywood"} section={'Movies & Shows'}/>
        </div>
        <div
          className="tab-pane fade show"
          id="reservation-request-control"
          role="tabpanel"
          aria-labelledby="reservation-request"
        >
          <AllListCard keyword={"movies"} section={'Movies'}/>
        </div>
        <div
          className="tab-pane fade show"
          id="final-price-control"
          role="tabpanel"
          aria-labelledby="final-price"
        >
          <AllListCard keyword={"show"} section={'TV Shows'}/>
        </div>
      </div>
    </div>
  );
};

export default Movies;
