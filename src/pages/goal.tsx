import { Link } from "react-router-dom";

const Goal = () => {
  return (
    <div className="max-w-3xl rounded-lg p-12">
      <p className="text-3xl"> 💎 Seeking Clarity</p>
      <br></br>
      <p className="prose-lg">The root cause behind all suffering...</p>
      <br></br>
      <p className="prose-lg">
        is due to{" "}
        <a
          className="text-blue-500"
          href="https://haseab.notion.site/Flawed-Life-Assumptions-06e84f1e1a2c4bc4b67355aabd2c36b4"
        >
          flawed assumptions.
        </a>{" "}
      </p>
      <br></br>
      <p className="prose-lg">You&apos;re so confident about how you work.</p>
      <br></br>
      <p className="prose-lg">
        <strong>
          But are you willing to bet everything that you&apos;re right?
        </strong>
      </p>
      <br></br>
      <p className="prose-lg">
        If you&apos;re not willing, then are you really that confident?
      </p>
      <br></br>
      <p className="prose-lg">
        Your lack of rigor stems from a flawed assumption.
      </p>
      <br></br>
      <p className="prose-lg">And that is why you suffer.</p>
      <br></br>
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
