import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-background-color">
      <div className="container px-5">
        <div className="row py-2 justify-content-between align-items-center">
          <div className="col-2">
            <NavLink to="/">
              <img
                src="../public/assets/logo/logo.png"
                className="logo-style"
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="col-10  lg-col-6 d-none d-sm-flex align-items-center justify-content-end">
            <ul className="d-flex align-items-center text-white gap-3 md-gap-5 m-0 cursor-pointer">
              <NavLink to="/" className="decoration-none">
                <li className="font-size-14 pointer list-none">Movie</li>
              </NavLink>
              <NavLink to="/" className="decoration-none">
                <li className="font-size-14 pointer list-none">Tv Shows</li>
              </NavLink>
              <li className="d-flex align-items-center gap-2 font-size-14 pointer list-none">
                Suggest Me <i className="fa-solid fa-arrow-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
