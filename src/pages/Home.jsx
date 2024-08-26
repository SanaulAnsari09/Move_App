import React, { createContext, useState } from "react";
import HeroSection from "../component/HeroSection";
import Movies from "../component/Movies";

// created context for making search input value available globally in this project. 
const Context = createContext("");

const Home = () => {

  const [searchValue, setSearchValue] = useState("");

  return (
    <Context.Provider value={{searchValue,setSearchValue}}>
      <div className="home-background-color">
        <div className="container px-3 px-md-5">
          <HeroSection setSearchValue={setSearchValue} searchValue={searchValue}/>
          <Movies />
        </div>
      </div>
    </Context.Provider>
  );
};

export default Home;
export {Context}