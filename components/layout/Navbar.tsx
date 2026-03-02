"use client";

import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="h-20 flex items-center justify-between px-8 border-b border-white/5 bg-[#0D0D0F]/80 backdrop-blur-md">
      <h2 className="text-lg font-medium">Overview</h2>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-500" size={16} />
          <input
            className="bg-[#141418] border border-white/5 pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center font-semibold">
            RS
          </div>
          <div className="text-sm">
            <p className="font-medium">Rajith</p>
            <p className="text-gray-400 text-xs">@admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}