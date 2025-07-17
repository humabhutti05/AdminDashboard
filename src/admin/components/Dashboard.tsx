// src/admin/components/dashboard.tsx

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { title: "Top Courts", value: "120 Courts" },
  { title: "Active Bookings", value: "64 Bookings" },
  { title: "Pending Requests", value: "9 Requests" },
];

const chartData = [
  { name: "Mon", value: 10 },
  { name: "Tue", value: 15 },
  { name: "Wed", value: 22 },
  { name: "Thu", value: 18 },
  { name: "Fri", value: 25 },
  { name: "Sat", value: 30 },
  { name: "Sun", value: 20 },
];

export function DashboardSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* --- Left Main Content --- */}
      <div className="flex-1 space-y-6">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="bg-[#1E293B]/60 border-l-4 border-[#ADEF0E] text-white"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-md text-[#ADEF0E]">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart Card */}
        <Card className="bg-[#1E293B]/60 border border-[#ADEF0E] text-white">
          <CardHeader>
            <CardTitle className="text-[#ADEF0E]">Booking Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#ADEF0E" />
                <YAxis stroke="#ADEF0E" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1E293B",
                    color: "white",
                    border: "1px solid #ADEF0E",
                    borderRadius: 6,
                  }}
                />
                <Bar dataKey="value" fill="#ADEF0E" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* --- Right Sidebar --- */}
      <div className="w-full lg:w-[300px] space-y-4">
        <Card className="bg-[#1E293B]/60 border border-[#ADEF0E] text-white">
          <CardHeader>
            <CardTitle className="text-[#ADEF0E]">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="border-b border-[#ADEF0E]/40 pb-2">
                <p className="text-sm">#1234 - Korangi Court</p>
                <p className="text-xs text-gray-400">Booked 2 hrs ago</p>
              </li>
              <li className="border-b border-[#ADEF0E]/40 pb-2">
                <p className="text-sm">#1235 - Ocean Court</p>
                <p className="text-xs text-gray-400">Booked 4 hrs ago</p>
              </li>
              <li>
                <p className="text-sm">#1236 - Clifton Court</p>
                <p className="text-xs text-gray-400">Booked yesterday</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
