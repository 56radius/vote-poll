import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing main components
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";

// Importing dashboard components
import DashboardScreen from "./components/Dashboard/DashboardScreen";
import PollScreen from "./components/Dashboard/PollScreen"; // Import the PollScreen component

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={showSplash ? <SplashScreen /> : <HomeScreen />}
          />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/poll/:pollId" element={<PollScreen />} /> {/* Add route for PollScreen */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
