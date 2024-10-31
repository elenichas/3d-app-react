// src/pages/Viewer.tsx
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { cubes } from "../data";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

const Viewer: React.FC = () => {
  const [mode, setMode] = useState<"translate" | "rotate" | "scale">(
    "translate"
  );
  const [selectedCube, setSelectedCube] = useState<number>(0); // Default to first cube
  const transformControlsRef = useRef(null);
  const orbitControlsRef = useRef(null);

  // Update TransformControls target when selectedCube changes
  useEffect(() => {
    const object = cubes[selectedCube].ref?.current;
    if (transformControlsRef.current && object) {
      (transformControlsRef.current as any).attach(object);
    }
  }, [selectedCube]);

  // Disable OrbitControls when TransformControls is active
  useEffect(() => {
    if (transformControlsRef.current && orbitControlsRef.current) {
      const controls = transformControlsRef.current as any;
      controls.setMode(mode);
      const callback = (event: any) =>
        (orbitControlsRef.current.enabled = !event.value);
      controls.addEventListener("dragging-changed", callback);
      return () => controls.removeEventListener("dragging-changed", callback);
    }
  }, [mode]);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Sidebar Control Mode */}
      <div
        style={{
          zIndex: 100,
          position: "fixed",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          padding: "10px",
          borderRadius: "0 8px 8px 0",
        }}
        className="flex flex-col space-y-2 shadow-lg  bg-gray-900 p-4 text-white"
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

      {/* Three.js Canvas */}
      <Canvas style={{ background: "black" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls ref={orbitControlsRef} />

        {/* TransformControls attached to the selected cube */}
        <TransformControls ref={transformControlsRef} mode={mode} />

        {/* Render each cube */}
        {cubes.map((cube, index) => (
          <mesh
            key={cube.name}
            position={[index * 2 - 5, 0, 0]} // Position cubes in a row
            scale={[cube.size, cube.size, cube.size]}
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event from reaching OrbitControls
              setSelectedCube(index); // Set the selected cube to attach TransformControls
            }}
            ref={cube.ref} // Attach the reference from cube data
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={cube.color} />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
};

export default Viewer;
