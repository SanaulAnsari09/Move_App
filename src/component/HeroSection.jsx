import React from "react";

const HeroSection = ({ setSearchValue, searchValue }) => {
  // stored search input value inside global state 'searchValue' is a global state and it's created inside Home.jsx
  const handleChange = (e) => {
    setSearchValue(e?.target?.value);
  };

  return (
    <>
      <div className="row pt-5">
        <div className=" col-12 col-sm-8 col-md-6 col-lg-5">
          <div>
            <h1 className="text-white">MaileHereKo</h1>
            <p className="text-secondary font-size-14">
              List of movies and Tv Shows, I have watched till date Explore what
              i have watched and also feel free to make a suggestion.
            </p>
          </div>
          <div className="position-relative">
            <input
              type="text"
              placeholder="Search Movie or TV Shows"
              className="w-100 w-md-50 input-style"
              value={searchValue}
              onChange={handleChange}
            />
            <i className="fa-solid fa-magnifying-glass position-absolute start-2 top-35 search-icon-color"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
