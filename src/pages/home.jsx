import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center text-center">
      {" "}
      <div className="items-center">
        <div className="flex justify-center">
          <img
            src="https://pbs.twimg.com/profile_images/1587840259764649984/BJTh4xl9_400x400.jpg"
            className="rounded-full"
            alt="logo"
            width="200vh"
          />
        </div>
        <p className="pt-2 text-2xl">🤙 My name is Haseab (Ha - seeb). </p>
        <p className="pt-2 text-base">
          <strong>Currently </strong>: 📍 indiehacking in SF
        </p>
        <p>
          <strong>Building:</strong>{" "}
          <a className="text-blue-400" href="https://automatic.chat">
            automatic.chat
          </a>{" "}
          &{" "}
          <a className="text-blue-400" href="llm.report">
            llm.report
          </a>
        </p>
        <br></br>
        <p>
          Know more:{" "}
          <Link className="text-purple-300" to="/directory">
            Start Here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Home;
