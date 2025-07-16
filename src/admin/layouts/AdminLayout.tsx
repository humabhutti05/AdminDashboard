import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";


const AdminLayout = () => {
  return (
       <div className="flex bg-[#0F172A] min-h-screen text-white">
        <Sidebar />
      <main className="flex-1 bg-[#0f172a] text-white p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
