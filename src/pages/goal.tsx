import { Link } from "react-router-dom";

const Goal = () => {
  return (
    <div className="max-w-3xl rounded-lg p-12">
      <p className="text-3xl"> 💎 About Me</p>
      <br></br>
      <p className="prose-lg">What is your ultimate goal in life?</p>
      <br></br>
      <p className="prose-lg">Is it to maximize happiness? to attain peace?</p>
      <br></br>
      <p className="prose-lg">
        If you could push a button to forever be in a peaceful and happy state,
      </p>
      <br></br>
      <p className="prose-lg">would you push it?</p>
      <br></br>
      <p className="prose-lg">
        <strong>what if the catch is:</strong> you have to live in a farm for
        the rest of your life?
      </p>
      <br></br>
      <p className="prose-lg">
        what if the catch is: you have to give up all of your memories?
      </p>
      <br></br>
      <p className="prose-lg">Be honest with yourself:</p>
      <br></br>
      <p className="prose-lg">
        <strong>Do you even know what you want in life?</strong>
      </p>
      <br></br>
      {/* <p className="prose-lg">
        is due to{" "}
        <a
          className="text-blue-500"
          href="https://haseab.notion.site/Flawed-Life-Assumptions-06e84f1e1a2c4bc4b67355aabd2c36b4"
        >
          flawed assumptions.
        </a>{" "}
      </p> */}
      <p className="prose-lg">I do.</p>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <br></br>

      <p className="prose-lg">
        my goal:{" "}
        <Link className="text-blue-500" to="/mastery">
          mastering the 5 pillars of life
        </Link>
      </p>
    </div>
  );
};

export default Goal;
