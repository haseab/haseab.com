import React from "react";
import { Link } from "react-router-dom";

const Goal = () => {
  return (
    <div>
      <p className="text-3xl"> 💎 Seeking Clarity</p>
      <p className="pt-2 prose-xl">
        I have made a monumental realization in my life
      </p>
      <br></br>
      <p className="prose-xl">
        The root cause behind all problems, all suffering...
      </p>
      <br></br>
      <p className="prose-xl">
        is due to{" "}
        <a
          className="text-blue-500"
          href="https://haseab.notion.site/Flawed-Life-Assumptions-06e84f1e1a2c4bc4b67355aabd2c36b4"
        >
          flawed assumptions{" "}
        </a>{" "}
        about life.
      </p>
      <br></br>
      <p className="prose-xl">
        99% reading this won't understand the weight of those words.
      </p>
      <br></br>
      <p className="prose-xl">
        My number one goal is to gain as much clarity about myself and about
        life.
      </p>
      <br></br>
      <p className="prose-xl">
        I desire clarity more than anyone else that I know.
      </p>
      <br></br>
      <p className="prose-xl">And it's worked.</p>
      <br></br>
      <p className="prose-xl">Every year, life gets better.</p>
      <br></br>
      <p className="prose-xl">Less flawed assumptions, less suffering.</p>
      <br></br>
      <p className="prose-xl">
        my goal is now focused on{" "}
        <Link className="text-blue-500" to="/mastery">
          mastering the 5 pillars of life
        </Link>
      </p>
    </div>
  );
};

export default Goal;
