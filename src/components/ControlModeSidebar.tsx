// src/components/ControlModeSidebar.tsx
import React from "react";
import { Button } from "@/components/ui/button";

interface ControlModeSidebarProps {
  mode: "translate" | "rotate" | "scale";
  setMode: (mode: "translate" | "rotate" | "scale") => void;
}

const ControlModeSidebar: React.FC<ControlModeSidebarProps> = ({
  mode,
  setMode,
}) => {
  return (
    <div
      style={{
        zIndex: 10,
        position: "fixed",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        backgroundColor: "#1f2937",
        padding: "10px",
        borderRadius: "0 8px 8px 0",
      }}
      className="flex flex-col space-y-2 shadow-lg"
    >
      <Button
        variant="ghost"
        className="text-white hover:bg-gray-700"
        onClick={() => setMode("translate")}
      >
        Move
      </Button>
      <Button
        variant="ghost"
        className="text-white hover:bg-gray-700"
        onClick={() => setMode("rotate")}
      >
        Rotate
      </Button>
      <Button
        variant="ghost"
        className="text-white hover:bg-gray-700"
        onClick={() => setMode("scale")}
      >
        Scale
      </Button>
    </div>
  );
};

export default ControlModeSidebar;
