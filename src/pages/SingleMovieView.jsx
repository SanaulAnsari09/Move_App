import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataFromApiWithMovieID } from "../http/fetchData";

// Note : I used static image for portrait header image because i couldn't find a portrait image in api

const SingleMovieView = () => {
  // got id from url with useParams
  const { id } = useParams();

  const [singleData, setSingleData] = useState("");

  const getApiResponse = async () => {
    const { data } = await getDataFromApiWithMovieID(id); //inside this function api called for single data with id
    setSingleData(data);
  };
  console.log("response", singleData);

  useEffect(() => {
    getApiResponse();
  }, []);

  return (
    <div className="home-background-color">
      <div className="container lg-px-5 pt-2">
        <div className="row height position-relative">
          <div className="col-12 h-100">
            <div className="head-image w-100 h-100">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDM3NzQzOWMtNTZjMC00YzE0LWEwYmItYzg1OGZkZGQ0MzM1XkEyXkFqcGdeQXVyNDc5NDc2Nw@@._V1_.jpg"
                alt="head"
                className="h-100 w-100 object-fit-cover rounded-5"
              />
            </div>
          </div>
          <div className="d-none d-lg-block name-box position-absolute poster-bg-transparent bottom-10 py-3 left-10 title-box-width rounded shadow">
            <span className="text-secondary font-size-12">
              MaileHereKo / Single Move
            </span>
            <p className="text-white m-0 font-weight-bold overflow-text">
              {singleData?.Title}
            </p>
          </div>
        </div>
        {singleData != "" ? (
          <div className="row justify-content-center py-5 row-gap-3 row-gap-md-0">
            <div className="col-12 col-md-6 col-lg-5">
              <img
                src={singleData?.Poster}
                alt=""
                className="rounded-2 w-auto"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <h5 className="font-weight-bold text-white">
                {singleData?.Actors}
              </h5>
              <p className="mt-4 text-secondary">{singleData?.Plot}</p>
              <span className="mt-2 poster-bg px-2 text-warning rounded py-1">
                <i className="fa-regular fa-star"></i> {singleData?.imdbRating}
              </span>
              <div className="d-flex flex-column mt-2">
                <span className="text-secondary font-size-14 font-weight-bold">
                  Type
                </span>
                <span className="mt-1 text-white">Move</span>
              </div>
              <div className="d-flex flex-column mt-2">
                <span className="text-secondary font-size-14 font-weight-bold">
                  Release Date:
                </span>
                <span className="mt-1 text-white">{singleData?.Released}</span>
              </div>
              <div className="d-flex flex-column mt-2">
                <span className="text-secondary font-size-14 font-weight-bold">
                  Run Time
                </span>
                <span className="mt-1 text-white">{singleData?.Runtime}</span>
              </div>
              <div className="d-flex flex-column mt-2">
                <span className="text-secondary font-size-14 font-weight-bold">
                  Generes
                </span>
                <span className="mt-1 text-white">{singleData?.Genre}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center py-5 row-gap-3 row-gap-md-0">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="single-skeleton-image"></div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <h5 className="single-skeleton-text py-3"></h5>
              <p className="single-skeleton-text py-2 mt-2"></p>
              <p className="single-skeleton-text py-2 mt-2"></p>
              <p className="single-skeleton-text py-2 mt-2 "></p>
              <p className="single-skeleton-text py-2 mt-2 w-75"></p>
              <p className="single-skeleton-text py-2 mt-2 w-75"></p>
              <p className="single-skeleton-text py-2 mt-2 w-50"></p>
              <p className="single-skeleton-text py-2 mt-2 w-50"></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleMovieView;
