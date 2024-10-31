// src/pages/Viewer.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { cubes } from "../data";

const Viewer: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ background: "black" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls />

        {/* Render each cube */}
        {cubes.map((cube, index) => (
          <mesh
            key={cube.name}
            position={[index * 2 - 5, 0, 0]} // Position cubes in a row
            scale={[cube.size, cube.size, cube.size]} // Scale cube by size
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
