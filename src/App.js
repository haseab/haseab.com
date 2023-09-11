import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="bg-gradient-to-r from-[#0f172a] to-[#1c2c50] min-h-screen flex flex-col items-center justify-center text-white">
        <img
          src="https://pbs.twimg.com/profile_images/1587840259764649984/BJTh4xl9_400x400.jpg"
          className="rounded-full"
          alt="logo"
          width="200vh"
        />
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
          <a className="text-purple-300" href="https://haseab.com/knowme">
            Start Here
          </a>
        </p>
        <p></p>
      </header>
    </div>
  );
}

export default App;
