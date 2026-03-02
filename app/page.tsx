"use client";

import Sidebar from "@/components/layout/Sidebar";
import StatsCards from "@/components/temp/StatsCards";
import AnalyticsChart from "@/components/Dashboard/AnalyticsChart";
import RevenueChart from "@/components/Dashboard/RevenueChart";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0F] text-white overflow-hidden">

      {/* 🔥 AMBIENT BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        {/* Orange Glow */}
        <div className="absolute w-[700px] h-[700px] bg-orange-500/40 blur-[200px] rounded-full top-[-250px] left-[-250px]" />

        {/* Yellow Glow */}
        <div className="absolute w-[700px] h-[700px] bg-yellow-400/30 blur-[200px] rounded-full bottom-[-250px] right-[-250px]" />
      </div>

      <div className="flex min-h-screen relative z-10">

        <Sidebar />

        <div className="flex-1 p-8">

          {/* ================= TOP BAR ================= */}
          <div className="flex justify-between items-center mb-10">
            <div className="text-sm text-gray-400">
              <span className="text-white">Home</span> &gt; Overviews
            </div>

            <div className="flex items-center gap-6">
              <input
                placeholder="Search..."
                className="bg-[#141418] px-5 py-2.5 rounded-2xl 
                border border-white/[0.06] text-sm
                focus:outline-none focus:border-orange-400/60
                focus:shadow-[0_0_0_1px_rgba(255,140,0,0.4)]
                transition-all duration-300 w-64"
              />

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                  RS
                </div>
                <div>
                  <p className="text-sm">RajithShetty</p>
                  <p className="text-xs text-gray-500">@Sahyadri</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= MAIN GLASS CONTAINER ================= */}
          <div
            className="
            relative
            rounded-[28px]
            bg-gradient-to-b from-[#141418] to-[#101014]
            border border-white/5
            shadow-[0_0_80px_rgba(0,0,0,0.8)]
            p-10
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none rounded-[28px]" />

            {/* ================= STATS ================= */}
            <StatsCards />

            {/* ================= ANALYTICS + REVENUE ================= */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="col-span-2">
                <AnalyticsChart />
              </div>
              <RevenueChart />
            </div>

            {/* ================= LIST DEALS ================= */}
            <div className="mt-16">

              <div className="flex justify-between items-center mb-8">
                <h3 className="text-sm text-gray-400 tracking-wide">
                  List Deals
                </h3>

                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Search deals..."
                    className="
                      bg-[#121217]
                      border border-white/[0.06]
                      rounded-2xl
                      px-5 py-2.5
                      text-sm
                      w-72
                      placeholder:text-gray-500
                      focus:outline-none
                      focus:border-orange-400/60
                      focus:shadow-[0_0_0_1px_rgba(255,140,0,0.4)]
                      transition-all duration-300
                    "
                  />

                  <button
                    className="
                      px-5 py-2.5
                      rounded-2xl
                      text-sm
                      bg-[#121217]
                      border border-white/[0.06]
                      hover:border-white/[0.12]
                      hover:bg-white/[0.04]
                      transition-all duration-300
                    "
                  >
                    Filter
                  </button>

                  <button
                    className="
                      px-5 py-2.5
                      rounded-2xl
                      text-sm
                      bg-[#121217]
                      border border-white/[0.06]
                      hover:border-white/[0.12]
                      hover:bg-white/[0.04]
                      transition-all duration-300
                    "
                  >
                    Sort
                  </button>
                </div>
              </div>

              <div
                className="
                  bg-gradient-to-b from-[#121217] to-[#0F0F14]
                  border border-white/[0.06]
                  rounded-3xl
                "
              >
                <table className="w-full text-sm">
                  <thead className="text-gray-500 bg-white/[0.02]">
                    <tr className="border-b border-white/[0.05]">
                      <th className="text-left px-8 py-5 font-medium">Title</th>
                      <th className="text-left px-8 py-5 font-medium">Brands</th>
                      <th className="text-left px-8 py-5 font-medium">Activities</th>
                      <th className="text-left px-8 py-5 font-medium">Name of deals</th>
                      <th className="text-left px-8 py-5 font-medium">Category</th>
                      <th className="text-left px-8 py-5 font-medium">Created</th>
                      <th className="text-left px-8 py-5 font-medium">Stage</th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-300">
                    {[
                      {
                        title: "Winter Ends",
                        brand: "Adidas",
                        activity: "Mar 20, 2025 23:14",
                        name: "Bessie Cooper",
                        category: "Streetwear",
                        created: "Last month",
                        stage: "Won",
                        stageColor: "bg-green-500/20 text-green-400 border-green-500/30",
                      },
                      {
                        title: "Vintage Chronicles",
                        brand: "Nike",
                        activity: "Feb 2, 2025 19:28",
                        name: "Arlene McCoy",
                        category: "Shoes",
                        created: "15 minutes ago",
                        stage: "Qualified",
                        stageColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
                      },
                      {
                        title: "Urban Pulse",
                        brand: "Uniqlo",
                        activity: "Dec 30, 2025 07:52",
                        name: "Devon Lane",
                        category: "Crewneck",
                        created: "12 minutes ago",
                        stage: "Lost",
                        stageColor: "bg-red-500/20 text-red-400 border-red-500/30",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="
                          border-b border-white/[0.04]
                          hover:bg-white/[0.03]
                          transition-all duration-300
                        "
                      >
                        <td className="px-8 py-6">{row.title}</td>
                        <td className="px-8 py-6">{row.brand}</td>
                        <td className="px-8 py-6 text-gray-400">{row.activity}</td>
                        <td className="px-8 py-6">{row.name}</td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1 rounded-full bg-white/[0.06] text-xs border border-white/[0.08]">
                            {row.category}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-gray-400">{row.created}</td>
                        <td className="px-8 py-6">
                          <span
                            className={`px-3 py-1 rounded-full text-xs border ${row.stageColor}`}
                          >
                            {row.stage}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}