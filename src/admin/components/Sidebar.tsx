import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    clsx(
      "p-2 rounded hover:text-[#ADEF0E]",
      pathname === path && "text-[#ADEF0E] font-bold"
    );

  return (
    <aside className="w-64 bg-[#1E293B]/60 border-r border-[#ADEF0E] p-4">
      <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/admin" className={linkClass("/admin")}>Dashboard</Link>
        <Link to="/admin/courts" className={linkClass("/admin/courts")}>Manage Courts</Link>
        <Link to="/admin/bookings" className={linkClass("/admin/bookings")}>Booking</Link>
        <Link to="/admin/payments" className={linkClass("/admin/payments")}>Payments</Link>
        <Link to="/admin/users" className={linkClass("/admin/users")}>Users(view)</Link>
      </nav>
    </aside>
  );
}
