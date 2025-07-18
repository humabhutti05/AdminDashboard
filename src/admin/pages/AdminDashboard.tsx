import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardSection } from "../components/Dashboard";

export default function AdminDashboard() {
  return (
    <main className="bg-[#0F172A] min-h-screen text-white">
      <DashboardHeader />
      <div className="p-6">
        <DashboardSection />
      </div>
    </main>
  );
}
