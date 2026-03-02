"use client";

import { useEffect, useState } from "react";

export default function RevenueChart() {
  const income = 70;
  const expenses = 30;

  const size = 220;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const incomeOffset = circumference - (income / 100) * circumference;
  const expenseOffset = circumference - (expenses / 100) * circumference;

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="
      relative
      rounded-3xl
      bg-gradient-to-b from-[#15151B] to-[#101015]
      border border-white/5
      p-8
      shadow-[0_40px_100px_rgba(0,0,0,0.7)]
      overflow-hidden
    ">

      {/* Bottom glow */}
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-80 h-40 bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative">
        <h3 className="text-sm text-gray-400">Revenue</h3>

        <div className="flex gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]" />
            Income
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D6FF00]" />
            Expenses
          </div>
        </div>
      </div>

      {/* Donut */}
      <div className="relative flex items-center justify-center">

        <svg width={size} height={size}>

          {/* OUTER TRACK */}
          <circle
            stroke="rgba(255,255,255,0.06)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />

          {/* OUTER RING (ROTATING CLOCKWISE) */}
          <circle
            className="animate-spin-slow"
            stroke="url(#incomeGradient)"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={circumference}
            strokeDashoffset={animate ? incomeOffset : circumference}
            style={{
              transition: "stroke-dashoffset 1.2s ease",
              transformOrigin: "50% 50%",
            }}
          />

          {/* INNER TRACK */}
          <circle
            stroke="rgba(255,255,255,0.04)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius - 26}
            cx={size / 2}
            cy={size / 2}
          />

          {/* INNER RING (ROTATING OPPOSITE) */}
          <circle
            className="animate-spin-reverse"
            stroke="url(#expenseGradient)"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            r={radius - 26}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={circumference}
            strokeDashoffset={animate ? expenseOffset : circumference}
            style={{
              transition: "stroke-dashoffset 1.4s ease",
              transformOrigin: "50% 50%",
            }}
          />

          {/* GRADIENTS */}
          <defs>
            <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3C00" />
              <stop offset="100%" stopColor="#FF8C00" />
            </linearGradient>

            <linearGradient id="expenseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B4FF00" />
              <stop offset="100%" stopColor="#FFE600" />
            </linearGradient>
          </defs>
        </svg>

        {/* CENTER CONTENT (STAYS STILL) */}
        <div className="absolute text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            $40.856
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            June 2025
          </p>
        </div>
      </div>
    </div>
  );
}