import React from "react";
import DayImage from "../Assets/day-sunny-svgrepo-com.svg";
import NightImage from "../Assets/night-svgrepo-com.svg";

function Header({ changeSettings, settings }) {
  return (
    <div className="w-full flex justify-end z-40 fixed top-0 bg-gray-500/75 border-b-2">
      <picture className="w-10 ">
        <button onClick={changeSettings}>
          {!settings ? (
            <img
              className="bg-gray-200 rounded-full border-2 border-black"
              src={DayImage}
              alt="dayImage"
            />
          ) : (
            <img
              className=" rounded-full border bg-gray-300 border border-gray-700 border-2"
              src={NightImage}
              alt="nightImage"
            />
          )}
        </button>
      </picture>
    </div>
  );
}

export default Header;
