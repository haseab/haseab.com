import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center text-center">
      {" "}
      <div className="items-center">
        <div className="flex justify-center">
          <img
            src="https://pbs.twimg.com/profile_images/1750678675798855680/2sqTuFi-_400x400.jpg"
            className="rounded-full"
            alt="logo"
            width="200vh"
          />
        </div>
        <p className="pt-2 text-2xl">🤙 My name is Haseab (Ha - seeb). </p>
        <p className="pt-2 text-base">
          <strong>Currently: </strong>📍 San Francisco
        </p>
        <p>
          <strong>Building:</strong>{" "}
          <a className="text-blue-400" href="https://automatic.chat">
            automatic.chat
          </a>
        </p>
        <p>
          <strong>See me live on:</strong>{" "}
          <a className="text-blue-400" href="https://timetracking.live">
            timetracking.live
          </a>
        </p>
        <br></br>
        <p>
          Know more:{" "}
          <Link className="text-purple-300" to="/directory">
            Start Here
          </Link>
        </p>
        <br></br>
        <p>Last Updated: July 3 2024</p>
      </div>
    </div>
  );
};
export default Home;
