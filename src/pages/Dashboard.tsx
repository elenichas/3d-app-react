// src/pages/Dashboard.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { cubes } from "../data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const data = {
    labels: cubes.map((cube) => cube.name),
    datasets: [
      {
        label: "Value",
        data: cubes.map((cube) => cube.value),
        backgroundColor: cubes.map((cube) => cube.color),
        borderColor: cubes.map((cube) => cube.color),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      <Bar data={data} options={{ plugins: { legend: { display: false } } }} />
    </div>
  );
};

export default Dashboard;
