import React from "react";
import { Link } from "react-router-dom";

const Goal = () => {
  return (
    <div>
      <p className="text-3xl"> 💎 Seeking Clarity</p>
      <br></br>
      <p className="prose-xl">The root cause behind all your suffering...</p>
      <br></br>
      <p className="prose-xl">
        is due to your{" "}
        <a
          className="text-blue-500"
          href="https://haseab.notion.site/Flawed-Life-Assumptions-06e84f1e1a2c4bc4b67355aabd2c36b4"
        >
          flawed assumptions.
        </a>{" "}
      </p>
      <br></br>
      <p className="prose-xl">You&apos;re so confident about how you work.</p>
      <br></br>
      <p className="prose-xl">
        <strong>
          But are you willing to bet your mom&apos;s life that you&apos;re
          right?
        </strong>
      </p>
      <br></br>
      <p className="prose-xl">
        If you&apos;re not willing, then are you really that confident?
      </p>
      <br></br>
      <p className="prose-xl">
        Your lack of rigor stems from a flawed assumption.
      </p>
      <br></br>
      <p className="prose-xl">And that is why you suffer.</p>
      <br></br>
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <br></br>

      <p className="prose-xl">
        my goal:{" "}
        <Link className="text-blue-500" to="/mastery">
          mastering the 5 pillars of life
        </Link>
      </p>
    </div>
  );
};

export default Goal;
