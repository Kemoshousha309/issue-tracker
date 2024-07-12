"use client";
import { Card } from "@radix-ui/themes";
import { Value } from "@radix-ui/themes/dist/esm/components/data-list.js";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
interface Props {
    open: number,
    closed: number,
    inProgress: number,
  }
const StatusChart = ({closed, inProgress ,open}: Props) => {
  console.log("chart run")
  const data = [
    {
      name: "Open",
      value: open,
    },
    {
      name: "Closed",
      value: closed,
    },
    {
      name: "In Progress",
      value: inProgress,
    },
  ];
  return (
    <Card className="h-80">
      <button onClick={() => {
        throw new Error("sentry error")
      }} >click</button>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
          barSize={50}
            dataKey="value"
            width={20}
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default StatusChart;
