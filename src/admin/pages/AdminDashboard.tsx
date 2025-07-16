import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { title: "Bookings", value: 120 },
  { title: "Users", value: 45 },
  { title: "Courts", value: 5 },
];

const chartData = [
  { day: "Mon", bookings: 10 },
  { day: "Tue", bookings: 18 },
  { day: "Wed", bookings: 12 },
  { day: "Thu", bookings: 22 },
  { day: "Fri", bookings: 15 },
  { day: "Sat", bookings: 30 },
  { day: "Sun", bookings: 17 },
];

export default function AdminDashboard() {
  return (
    <div className="bg-[#0F172A] min-h-screen text-white flex flex-col">
      {/* --- Header */}
      <header className="flex items-center justify-between p-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button className="inline-flex items-center gap-2 bg-[#ADEF0E] text-black px-4 py-2 rounded-md hover:opacity-90">
          <Plus size={18} /> Add Booking
        </button>
      </header>

      {/* --- Stats Cards */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="relative bg-[#1E293B]/60 border border-[#ADEF0E] text-white overflow-hidden"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-[#ADEF0E]"></div>
            <CardContent className="pl-4">
              <CardTitle>{stat.title}</CardTitle>
              <p className="mt-2 text-4xl font-semibold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* --- Chart Section */}
      <div className="px-6 mt-auto pb-6">
        <Card className="bg-[#1E293B]/60 border border-[#ADEF0E]">
          <CardHeader>
            <CardTitle>Weekly Booking Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <XAxis dataKey="day" stroke="#ADEF0E" />
                <YAxis stroke="#ADEF0E" />
                <Tooltip contentStyle={{ background: "#1E293B", borderRadius: 4 }} />
                <Bar dataKey="bookings" fill="#ADEF0E" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
