import { Bell, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type DashboardHeaderProps = {
  toggleSidebar?: () => void;
};

export function DashboardHeader({ toggleSidebar }: DashboardHeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-[#1E293B] text-white px-6 py-4 flex justify-between items-center border-b border-[#334155]">
      {/* Left: Logo and Mobile Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <span className="text-xl font-bold text-neon-green">Padel Admin</span>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-6 relative">
        <Link to="/admin/notifications">
          <Bell className="w-5 h-5 hover:text-neon-green cursor-pointer" />
        </Link>

        <div className="relative">
          <button
            onClick={() => setIsProfileOpen((prev) => !prev)}
            className="flex items-center space-x-2"
          >
            <img
              src="https://i.pravatar.cc/30"
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm hidden sm:block">Admin</span>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1E293B] rounded-md shadow-lg border border-[#334155] z-10">
              <Link
                to="/admin/profile"
                className="px-4 py-2 text-sm text-white hover:bg-[#334155] flex items-center gap-2"

              >
                <User className="w-4 h-4" /> Profile
              </Link>
              <Link
                to="/admin/settings"
               className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#334155]"

              >
                <Settings className="w-4 h-4" /> Settings
              </Link>
              <button
                onClick={() => {
                  console.log("Logging out...");
                }}
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#334155]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
