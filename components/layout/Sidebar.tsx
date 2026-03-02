"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Folder,
  Mail,
  Box,
  BarChart2,
  Briefcase,
  Building2,
  User,
  Activity,
  FileText,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (menu: string) => {
    setOpen(open === menu ? null : menu);
  };

  return (
    <aside className="w-64 bg-[#0F0F14]/90 backdrop-blur-xl border-r border-white/5 p-6 flex flex-col min-h-screen">

      {/* LOGO */}
      <div className="mb-10">
        <div className="w-30 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold">
          CRMPRO
        </div>
      </div>

      {/* MAIN MENU */}
      <SectionTitle title="MAIN MENU" />

      <SidebarItem icon={<LayoutDashboard size={18} />} active>
        Dashboard
      </SidebarItem>

      <DropdownItem
        icon={<Users size={18} />}
        label="Leads"
        open={open === "leads"}
        onClick={() => toggle("leads")}
      >
        <SubItem label="All Leads" />
        <SubItem label="Add Lead" />
      </DropdownItem>

      <DropdownItem
        icon={<Folder size={18} />}
        label="Projects"
        open={open === "projects"}
        onClick={() => toggle("projects")}
      >
        <SubItem label="All Projects" />
        <SubItem label="Create Project" />
      </DropdownItem>

      <SidebarItem icon={<Mail size={18} />}>
        Inbox
      </SidebarItem>

      <DropdownItem
        icon={<Box size={18} />}
        label="Products"
        open={open === "products"}
        onClick={() => toggle("products")}
      >
        <SubItem label="All Products" />
        <SubItem label="Add Product" />
      </DropdownItem>

      <SidebarItem icon={<BarChart2 size={18} />}>
        Sales
      </SidebarItem>

      {/* RECORD */}
      <SectionTitle title="RECORD" />

      <DropdownItem
        icon={<Briefcase size={18} />}
        label="Deals"
        open={open === "deals"}
        onClick={() => toggle("deals")}
      >
        <SubItem label="All Deals" />
        <SubItem label="Create Deal" />
      </DropdownItem>

      <SidebarItem icon={<Building2 size={18} />}>
        Companies
      </SidebarItem>

      <SidebarItem icon={<User size={18} />}>
        Peoples
      </SidebarItem>

      {/* INSIGHT */}
      <SectionTitle title="INSIGHT" />

      <SidebarItem icon={<Activity size={18} />}>
        Activities
      </SidebarItem>

      <DropdownItem
        icon={<FileText size={18} />}
        label="Reports"
        open={open === "reports"}
        onClick={() => toggle("reports")}
      >
        <SubItem label="Monthly Report" />
        <SubItem label="Annual Report" />
      </DropdownItem>

      <SidebarItem icon={<HelpCircle size={18} />}>
        Support
      </SidebarItem>

    </aside>
  );
}

/* ================= COMPONENTS ================= */

function SectionTitle({ title }: { title: string }) {
  return (
    <p className="text-xs text-gray-500 mt-8 mb-4 tracking-widest">
      {title}
    </p>
  );
}

function SidebarItem({
  icon,
  children,
  active = false,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 mb-1
        ${
          active
            ? "bg-gradient-to-r from-white/20 to-white/10 text-white shadow-inner border border-white/10"
            : "text-gray-400 hover:bg-white/5 hover:text-white"
        }`}
    >
      {icon}
      <span className="text-sm">{children}</span>
    </div>
  );
}

function DropdownItem({
  icon,
  label,
  open,
  onClick,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-1">
      <div
        onClick={onClick}
        className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-gray-400 hover:bg-white/5 hover:text-white transition-all"
      >
        {icon}
        <span className="text-sm">{label}</span>
        <ChevronDown
          size={16}
          className={`ml-auto transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`ml-10 mt-1 space-y-2 text-sm text-gray-400 overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function SubItem({ label }: { label: string }) {
  return (
    <div className="hover:text-white cursor-pointer transition">
      {label}
    </div>
  );
}