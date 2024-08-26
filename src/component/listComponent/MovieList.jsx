import React, { useContext, useEffect, useState } from "react";
import { getDataFromApiWithSearchParamter } from "../../http/fetchData";
import { Context } from "../../pages/Home";
import { NavLink } from "react-router-dom";

const MovieList = ({ keyword, section }) => {
  const [allList, setAllList] = useState([]);

  const arrayList = new Array(8).fill(null);

  console.log("arrayList", arrayList);

  const { searchValue } = useContext(Context);

  const getApiResponse = async () => {
    const { data } = await getDataFromApiWithSearchParamter(
      // inside this function api called
      searchValue ? searchValue : keyword
    );
    setAllList(data.Search);
  };

  useEffect(() => {
    getApiResponse();
  }, [searchValue]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <p className="m-0 p-0 mt-3 text-secondary">
            <span className="fs-4 font-weight-bold">All</span>(
            {allList ? allList?.length : 0})
          </p>
        </div>
      </div>
      {allList != "" ? (
        <div className="row row-gap-4 my-4">
          {allList?.length > 0 ? (
            allList?.map((movie) => {
              return movie?.Poster == "N/A" ? (
                ""
              ) : (
                <div className="col-6 col-md-4 col-lg-3" key={movie?.imdbID}>
                  <NavLink
                    to={`/single-view/${movie?.imdbID}`}
                    className="decoration-none"
                  >
                    <div className="poster poster-bg rounded width-90">
                      <div>
                        <img
                          src={movie?.Poster}
                          alt={movie?.Title}
                          className="movie-image p-2 pb-0"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <div className="px-2 py-3">
                        <p className="font-size-12 m-0 text-white overflow-text font-weight">
                          Everything Everything At Once
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })
          ) : (
            <h1 className="text-secondary">{section} Not Found</h1>
          )}
        </div>
      ) : (
        <div className="row row-gap-4 my-4">
          {arrayList?.map((_, ind) => {
            return (
              <div className="col-6 col-md-4 col-lg-3" key={ind}>
                  <div class="image-content"></div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MovieList;
