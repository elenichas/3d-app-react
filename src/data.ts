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
    color: "red",
    size: 1,
    value: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Cube 2",
    color: "green",
    size: 1.5,
    value: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Cube 3",
    color: "blue",
    size: 1.2,
    value: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Cube 4",
    color: "yellow",
    size: 0.8,
    value: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Cube 5",
    color: "purple",
    size: 1.4,
    value: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Cube 6",
    color: "orange",
    size: 1.1,
    value: Math.floor(Math.random() * 100) + 1,
  },
];
