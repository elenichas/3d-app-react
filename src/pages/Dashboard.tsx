// src/pages/Dashboard.tsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { cubes } from "../data";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  cubes: {
    label: "Values",
    color: "#ff0000", // Default color if specific cube colors are not directly used
  },
} satisfies ChartConfig;

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart
          width={600}
          height={300}
          data={cubes}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* Each bar is colored by the cube's specific color */}
          <Bar dataKey="value" radius={4}>
            {cubes.map((cube, index) => (
              <Cell key={`cell-${index}`} fill={cube.color} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default Dashboard;
