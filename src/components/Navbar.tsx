// src/components/Navbar.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 p-4 text-white">
      <h1 className="text-xl font-semibold">3D Viewer App</h1>
      <div className="flex space-x-4">
        <Link to="/">
          <Button variant="ghost" className="text-white hover:bg-gray-700">
            3D Viewer
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="ghost" className="text-white hover:bg-gray-700">
            Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
