// src/cubeData.ts
export interface CubeData {
  name: string;
  color: string;
  size: number;
  value: number;
}

// Generate 6 cubes with different properties
export const cubes: CubeData[] = [
  {
    name: "Cube 1",
    color: "#f6c8c8",
    size: 1,
    value: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Cube 2",
    color: "#ccebee",
    size: 1.5,
    value: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Cube 3",
    color: "#d0c2ed",
    size: 1.2,
    value: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Cube 4",
    color: "#c2edce",
    size: 0.8,
    value: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Cube 5",
    color: "#c1c1c1",
    size: 1.4,
    value: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Cube 6",
    color: "#d7d9f3",
    size: 1.1,
    value: Math.floor(Math.random() * 100) + 1,
  },
];
