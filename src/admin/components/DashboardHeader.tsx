// src/admin/components/DashboardHeader.tsx
import { Bell, Settings, LogOut, User, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#0F172A] border-b border-[#ADEF0E]/20 px-6 py-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
      {/* Dashboard Title */}
      <h2 className="text-2xl font-bold text-white">Dashboard</h2>

      {/* Right Section */}
      <div className="flex items-center gap-4 flex-wrap justify-end w-full md:w-auto">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search anything..."
          className="px-4 py-2 rounded-lg bg-[#1E293B] text-white placeholder-gray-400 border border-[#ADEF0E]/40 focus:outline-none focus:ring-2 focus:ring-[#ADEF0E] w-full md:w-64 transition"
        />

        {/* Icon Buttons */}
        <button className="p-2 rounded-full hover:bg-[#ADEF0E]/20 transition">
          <Bell size={20} className="text-[#ADEF0E]" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#ADEF0E]/20 transition">
          <Settings size={20} className="text-[#ADEF0E]" />
        </button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 bg-[#1E293B]/60 px-3 py-2 rounded-lg border border-[#ADEF0E]/40 hover:shadow-md transition">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://i.pravatar.cc/150?img=32" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div className="text-sm text-left hidden sm:block">
              <p className="text-white font-semibold leading-none">
                Martin Septimus
              </p>
              <p className="text-gray-400 text-xs">Admin</p>
            </div>
            <ChevronDown className="text-[#ADEF0E] hidden sm:block" size={16} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-[#1E293B] text-white border border-[#ADEF0E]/40 shadow-lg mt-2 w-48">
            <DropdownMenuLabel className="text-[#ADEF0E]">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#ADEF0E]/30" />
            <DropdownMenuItem className="hover:bg-[#ADEF0E]/10 cursor-pointer gap-2">
              <User size={16} /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#ADEF0E]/10 cursor-pointer gap-2">
              <Settings size={16} /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#ADEF0E]/30" />
            <DropdownMenuItem className="hover:bg-[#ADEF0E]/10 cursor-pointer gap-2 text-red-400">
              <LogOut size={16} /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
