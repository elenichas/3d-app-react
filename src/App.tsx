import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Viewer from "./pages/Viewer";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">3D Viewer</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Viewer />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
