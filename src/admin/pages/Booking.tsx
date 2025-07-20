import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MoreHorizontal, Search, Filter, Plus, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";



const bookings = [
  {
    id: "1",
    airline: "CloudNova Airlines",
    logo: "/logos/cloudnova.png",
    time: "7:30 AM - 10:30 AM",
    date: "2025-07-12",
    from: "LAX",
    to: "ORD",
    passengers: ["/avatars/u1.jpg", "/avatars/u2.jpg"],
    price: 350,
  },
  {
    id: "2",
    airline: "QuickWing Air",
    logo: "/logos/quickwing.png",
    time: "10:00 PM - 7:00 AM",
    date: "2025-07-12",
    from: "NYC",
    to: "LHR",
    passengers: ["/avatars/u3.jpg"],
    price: 420,
  },
  {
    id: "3",
    airline: "AeroBlue",
    logo: "/logos/aeroblue.png",
    time: "1:00 PM - 4:00 PM",
    date: "2025-07-13",
    from: "SFO",
    to: "SEA",
    passengers: ["/avatars/u4.jpg"],
    price: 180,
  },
];

export default function BookingsPage() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const formattedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
  const filteredBookings = bookings.filter((b) => b.date === formattedDate);

  return (
  
    <div className="p-6 space-y-6 bg-[#1E293B]/60 min-h-screen">

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-[#ADEF0E] bg-[#1E293B] p-4 text-white shadow-md">
          <p className="text-sm text-gray-300">Total Bookings</p>
          <p className="text-2xl font-bold mt-1">1,240</p>
        </div>
        <div className="rounded-xl border border-[#ADEF0E] bg-[#1E293B] p-4 text-white shadow-md">
          <p className="text-sm text-gray-300">Revenue</p>
          <p className="text-2xl font-bold mt-1">$87,500</p>
        </div>
        <div className="rounded-xl border border-[#ADEF0E] bg-[#1E293B] p-4 text-white shadow-md">
          <p className="text-sm text-gray-300">Active Users</p>
          <p className="text-2xl font-bold mt-1">532</p>
        </div>
        <div className="rounded-xl border border-[#ADEF0E] bg-[#1E293B] p-4 text-white shadow-md">
          <p className="text-sm text-gray-300">Today booking</p>
          <p className="text-2xl font-bold mt-1">27</p>
        </div>
      </div>

      {/* Header Section */}
      <div className="flex items-center justify-between border-b border-[#ADEF0E] pb-4">
        <h1 className="text-2xl font-bold text-white">Bookings</h1>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 text-white border-[#ADEF0E] bg-transparent hover:bg-[#ADEF0E]/10">
                <CalendarIcon className="w-4 h-4" />
                {selectedDate ? format(selectedDate, "dd MMM yyyy") : "Pick date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-transparent" align="end">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border shadow-xl hover:border-[#ADEF0E] focus:border-[#ADEF0E]"
              />
            </PopoverContent>
          </Popover>

          <Button variant="ghost" size="icon" className="text-white hover:bg-[#ADEF0E]/10"><Search className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#ADEF0E]/10"><Filter className="h-4 w-4" /></Button>
          <Button variant="default" className="gap-2 bg-[#ADEF0E] text-black hover:bg-[#c7ff3d]">
            <Plus className="h-4 w-4" /> Add Booking
          </Button>
        </div>
      </div>

      {/* Tabs Filter */}
      <div className="flex justify-end">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="bg-[#0f172a] border border-[#ADEF0E]">
            <TabsTrigger value="all" className="text-white hover:bg-[#ADEF0E]/10 data-[state=active]:bg-[#ADEF0E] data-[state=active]:text-black">All</TabsTrigger>
            <TabsTrigger value="economy" className="text-white hover:bg-[#ADEF0E]/10 data-[state=active]:bg-[#ADEF0E] data-[state=active]:text-black">Low</TabsTrigger>
            <TabsTrigger value="business" className="text-white hover:bg-[#ADEF0E]/10 data-[state=active]:bg-[#ADEF0E] data-[state=active]:text-black">Medium</TabsTrigger>
            <TabsTrigger value="deluxe" className="text-white hover:bg-[#ADEF0E]/10 data-[state=active]:bg-[#ADEF0E] data-[state=active]:text-black">Premium</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Bookings Table */}
      <div className="overflow-x-auto rounded-xl border border-[#ADEF0E] bg-[#0f172a]">
        <table className="w-full table-auto text-sm text-white">
          <thead className="bg-[#1E293B] text-[#ADEF0E]">
            <tr>
              <th className="px-4 py-2 text-left">Court</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Route</th>
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b.id} className="border-t border-[#334155] hover:bg-[#1e293b]">
                <td className="px-4 py-3 flex items-center gap-2">
                  <img src={b.logo} alt={b.airline} className="w-6 h-6" />
                  {b.airline}
                </td>
                <td className="px-4 py-3">{b.time}</td>
                <td className="px-4 py-3">{format(new Date(b.date), "dd MMM yyyy")}</td>
                <td className="px-4 py-3">{b.from} → {b.to}</td>
                <td className="px-4 py-3 flex -space-x-2">
                  {b.passengers.map((p, idx) => (
                    <Avatar key={idx} className="w-6 h-6 border">
                      <AvatarImage src={p} />
                    </Avatar>
                  ))}
                </td>
                <td className="px-4 py-3 font-medium text-[#ADEF0E]">${b.price}</td>
                <td className="px-4 py-3">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-[#ADEF0E]/10">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
            {filteredBookings.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-6 text-muted-foreground">No bookings found for this date.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
