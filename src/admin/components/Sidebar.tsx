import { Link, useLocation } from "react-router-dom";
import { Menu, X, LayoutDashboard, CalendarClock, CreditCard, Users } from "lucide-react";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Auto-close sidebar on route change (mobile only)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false); // no need to keep open state on large screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  const linkClass = (path: string) =>
    clsx(
      "flex items-center gap-2 p-2 rounded hover:text-[#ADEF0E] transition-colors",
      pathname === path && "text-[#ADEF0E] font-bold bg-[#0f172a]"
    );

  return (
    <>
      {/* Toggle Button */}
      {!open && (
        <div className="md:hidden absolute top-4 left-4 z-50">
          <button className="text-white" onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "bg-[#1E293B]/60 border-r border-[#ADEF0E] p-4 min-h-screen w-64 text-white md:block z-50 fixed md:static top-0 left-0 transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Close Button (Mobile) */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-xl font-semibold">Admin Panel</h2>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-6 hidden md:block">Admin Panel</h2>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <Link to="/admin" className={linkClass("/admin")} onClick={handleLinkClick}>
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link to="/admin/courts" className={linkClass("/admin/courts")} onClick={handleLinkClick}>
            <CalendarClock size={18} /> Manage Courts
          </Link>
          <Link to="/admin/bookings" className={linkClass("/admin/bookings")} onClick={handleLinkClick}>
            <CalendarClock size={18} /> Booking
          </Link>
          <Link to="/admin/payments" className={linkClass("/admin/payments")} onClick={handleLinkClick}>
            <CreditCard size={18} /> Payments
          </Link>
          <Link to="/admin/users" className={linkClass("/admin/users")} onClick={handleLinkClick}>
            <Users size={18} /> Users (view)
          </Link>
        </nav>
      </aside>
    </>
  );
}
