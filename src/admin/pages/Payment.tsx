import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, Search, Filter } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";

export default function Payments() {
  const today = new Date();
  const formattedDate = format(today, "yyyy-MM-dd");

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-semibold mb-6">Payments</h2>

      <Card className="bg-[#1e293b]/60 border border-[#adef0e] rounded-2xl shadow-lg">
        <CardContent className="p-4 overflow-x-auto">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
            {/* Left: Title + Search */}
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <h3 className="text-lg font-medium text-white">Transactions</h3>
              <div className="flex items-center gap-2">
                <Search className="text-gray-400" size={20} />
                <Input
                  placeholder="Search by user, booking ID, or court"
                  className="bg-[#0f172a] border border-[#adef0e] text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Right: Filters */}
            <div className="flex items-center gap-2 justify-end w-full md:w-auto">
              <Button
                variant="outline"
                className="border-[rgb(173,239,14)] text-white bg-transparent hover:bg-[#959c85e6]"
              >
                <Filter className="mr-2" size={18} /> Status
              </Button>
              <Button
                variant="outline"
                className="border-[#adef0e] text-white bg-transparent hover:bg-[#959c85e6]"
              >
                <CalendarIcon className="mr-2" size={18} /> 1 - 8 July 2028
              </Button>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-8 text-sm font-medium text-gray-300 border-b border-[#adef0e]/30 pb-2">
            <div>User</div>
            <div>Booking ID</div>
            <div>Court</div>
            <div>Time Slot</div>
            <div>Booking Date</div>
            <div>Total Fee</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {/* Example Row */}
          <div className="grid grid-cols-8 items-center py-3 border-b border-[#adef0e]/10 text-sm text-white">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-[#0f172a] text-white text-xs">
                  HK
                </AvatarFallback>
              </Avatar>
              <span>Hamza Khan</span>
            </div>
            <div>PBK-1023</div>
            <div>Padel Court #3</div>
            <div>4:00 PM - 5:00 PM</div>
            <div>{formattedDate}</div>
            <div>Rs. 2,000</div>
            <div>
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-xs rounded-full">
                Confirmed
              </span>
            </div>
            <div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-[#adef0e]/20"
              >
                ✏️
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
