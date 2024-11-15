import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Goal from "./pages/goal";
import Home from "./pages/home";
import Mastery from "./pages/mastery";
import ThisDesk from "./pages/thisdesk";

function App() {
  return (
    <Router>
      <header className="bg-gradient-to-r from-[#0f172a] to-[#1c2c50] min-h-screen flex flex-col items-center justify-center text-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                {/* <Directory /> */}
              </>
            }
          />
          {/* <Route path="/directory" element={<Directory />} /> */}
          <Route path="/goal" element={<Goal />} />
          <Route path="/mastery" element={<Mastery />} />
          <Route path="/thisdesk" element={<ThisDesk />} />
        </Routes>
      </header>
    </Router>
  );
}

export default App;
