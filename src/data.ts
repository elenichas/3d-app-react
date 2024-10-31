// src/data.ts or wherever CubeData is defined
import * as THREE from "three";
import React from "react";

export interface CubeData {
  name: string;
  color: string;
  size: number;
  value: number;
  ref?: React.RefObject<THREE.Mesh>; // Add ref property for the mesh
}

// Create cubes with refs
export const cubes: CubeData[] = [
  {
    name: "Cube 1",
    color: "red",
    size: 1,
    value: Math.floor(Math.random() * 100) + 1,
    ref: React.createRef(),
  },
  {
    name: "Cube 2",
    color: "green",
    size: 1.5,
    value: Math.floor(Math.random() * 100) + 1,
    ref: React.createRef(),
  },
  {
    name: "Cube 3",
    color: "blue",
    size: 1.2,
    value: Math.floor(Math.random() * 100) + 1,
    ref: React.createRef(),
  },
  {
    name: "Cube 4",
    color: "yellow",
    size: 0.8,
    value: Math.floor(Math.random() * 100) + 1,
    ref: React.createRef(),
  },
  {
    name: "Cube 5",
    color: "purple",
    size: 1.4,
    value: Math.floor(Math.random() * 100) + 1,
    ref: React.createRef(),
  },
  {
    name: "Cube 6",
    color: "orange",
    size: 1.1,
    value: Math.floor(Math.random() * 100) + 1,
    ref: React.createRef(),
  },
];
