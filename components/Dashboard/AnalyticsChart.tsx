"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", value: 18000 },
  { name: "Feb", value: 32000 },
  { name: "Mar", value: 24000 },
  { name: "Apr", value: 21000 },
  { name: "May", value: 30000 },
  { name: "Jun", value: 40856 },
  { name: "Jul", value: 33000 },
  { name: "Aug", value: 20000 },
];

export default function AnalyticsChart() {
  return (
    <div
      className="
      relative
      rounded-3xl
      bg-gradient-to-b from-[#18181D] to-[#121216]
      border border-white/5
      p-8
      h-[360px]
      shadow-[0_0_40px_rgba(0,0,0,0.6)]
      overflow-hidden
      "
    >
      {/* Soft Orange Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none rounded-3xl" />

      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-sm text-gray-400">Analytics</h3>

        <div className="flex items-center gap-3">
          <button className="px-4 py-1 text-sm rounded-lg bg-white/10 border border-white/10">
            Income
          </button>
          <button className="px-4 py-1 text-sm rounded-lg text-gray-400 hover:text-white transition">
            Expenses
          </button>
          <select className="premium-card rounded-3xl p-8 text-sm px-3 py-1 rounded-lg">
            <option>This year</option>
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid
            stroke="rgba(255,255,255,0.05)"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            stroke="rgba(255,255,255,0.4)"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            stroke="rgba(255,255,255,0.4)"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1A1A1F",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Bar dataKey="value" radius={[18, 18, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  entry.name === "Jun"
                    ? "url(#colorGradient)"
                    : "rgba(255,255,255,0.1)"
                }
              />
            ))}
          </Bar>

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFD000" />
              <stop offset="50%" stopColor="#FF9F00" />
              <stop offset="100%" stopColor="#FF5F2E" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}