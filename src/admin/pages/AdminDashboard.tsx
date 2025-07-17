// src/pages/AdminDashboard.tsx
import { DashboardSection } from "../components/Dashboard";


export default function AdminDashboard() {
  return (
    <main className="bg-[#0F172A] min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#ADEF0E]">Admin Dashboard</h1>
      <DashboardSection />
    </main>
  );
}