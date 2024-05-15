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
          <strong>Currently </strong>: 📍 Back in SF!
        </p>
        <p>
          <strong>Building:</strong>{" "}
          <a className="text-blue-400" href="https://assumptions.app">
            automatic.chat
          </a>
          {/* <a className="text-blue-400" href="https://automatic.chat">
            automatic.chat
            </a>{" "}
            &{" "}
            <a className="text-blue-400" href="llm.report">
            llm.report
          </a> */}
        </p>
        <br></br>
        <p>
          Know more:{" "}
          <Link className="text-purple-300" to="/directory">
            Start Here
          </Link>
        </p>
        <br></br>
        <p>Last Updated: May 15 2024</p>
      </div>
    </div>
  );
};
export default Home;
