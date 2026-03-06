"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

import Sidebar from "@/components/layout/Sidebar";
import StatsCards from "@/components/temp/StatsCards";
import AnalyticsChart from "@/components/Dashboard/AnalyticsChart";
import RevenueChart from "@/components/Dashboard/RevenueChart";

export default function Dashboard() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const [leads, setLeads] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchLeads() {
    console.log("🚀 Fetching leads...");

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    console.log("📦 DATA FROM SUPABASE:", data);
    console.log("❌ ERROR FROM SUPABASE:", error);

    if (!error) {
      setLeads(data || []);
    }
  }

  // 🔐 Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.replace("/admin-login");
  };

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (!isAdmin) {
      router.replace("/admin-login");
      return;
    }

    setAuthorized(true);

    fetchLeads();

    const channel = supabase
      .channel("realtime-leads-dashboard")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "leads" },
        () => fetchLeads()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const filteredLeads = leads.filter((lead) =>
    lead.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateLead = async (id: string, field: string, value: string) => {
    const { error } = await supabase
      .from("leads")
      .update({ [field]: value })
      .eq("id", id);

    if (error) {
      console.error("Update error:", error.message);
    } else {
      fetchLeads();
    }
  };

  if (!authorized) return null;

  return (
    <div className="relative min-h-screen bg-[#0B0B0F] text-white overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-orange-500/40 blur-[200px] rounded-full top-[-250px] left-[-250px]" />
        <div className="absolute w-[700px] h-[700px] bg-yellow-400/30 blur-[200px] rounded-full bottom-[-250px] right-[-250px]" />
      </div>

      <div className="flex min-h-screen relative z-10">
        <Sidebar />

        <div className="flex-1 p-8">

          {/* HEADER */}
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

              {/* LOGOUT BUTTON */}
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-sm transition"
              >
                Logout
              </button>

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

          <div className="relative rounded-[28px] bg-gradient-to-b from-[#141418] to-[#101014] border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.8)] p-10">

            <StatsCards />

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

                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-[#121217] border border-white/[0.06] rounded-2xl px-5 py-2.5 text-sm w-72 placeholder:text-gray-500 focus:outline-none focus:border-orange-400/60 focus:shadow-[0_0_0_1px_rgba(255,140,0,0.4)] transition-all duration-300"
                />
              </div>

              <div className="bg-gradient-to-b from-[#121217] to-[#0F0F14] border border-white/[0.06] rounded-3xl">
                <table className="w-full text-sm">

                  <thead className="text-gray-500 bg-white/[0.02]">
                    <tr className="border-b border-white/[0.05]">
                      <th className="text-left px-8 py-5 font-medium">Name</th>
                      <th className="text-left px-8 py-5 font-medium">Email</th>
                      <th className="text-left px-8 py-5 font-medium">Phone</th>
                      <th className="text-left px-8 py-5 font-medium">message</th>
                      <th className="text-left px-8 py-5 font-medium">status</th>
                      <th className="text-left px-8 py-5 font-medium">notes</th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-300">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-8 text-gray-500">
                          No leads found
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead) => (
                        <tr
                          key={lead.id}
                          className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-all duration-300"
                        >
                          <td className="px-8 py-6">{lead.name}</td>
                          <td className="px-8 py-6 text-gray-400">{lead.email}</td>
                          <td className="px-8 py-6 text-gray-400">{lead.phone || "—"}</td>
                          <td className="px-8 py-6">{lead.message}</td>

                          <td className="px-8 py-6">
                            <select
                              value={lead.status}
                              onChange={(e) =>
                                updateLead(lead.id, "status", e.target.value)
                              }
                              className="bg-[#101014] border border-white/10 rounded px-3 py-1 text-sm"
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Converted">Converted</option>
                              <option value="Lost">Lost</option>
                              <option value="Old">Old</option>
                            </select>
                          </td>

                          <td className="px-8 py-6">
                            <input
                              type="text"
                              value={lead.notes || ""}
                              onChange={(e) =>
                                updateLead(lead.id, "notes", e.target.value)
                              }
                              placeholder="Add note..."
                              className="bg-[#101014] border border-white/10 rounded px-3 py-1 text-sm w-full"
                            />
                          </td>

                        </tr>
                      ))
                    )}
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