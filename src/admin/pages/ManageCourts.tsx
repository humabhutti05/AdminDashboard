import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const courtBookings = [
  {
    id: 1,
    title: "Evening Match Deal",
    description: "Book Court #1 from 6-7 PM for just Rs. 1,200",
    period: "July 20, 2024 - August 10, 2024",
  },
  {
    id: 2,
    title: "Weekend Padel Pass",
    description: "Court #2 full hour just Rs. 1,500 on Sat/Sun",
    period: "July 15, 2024 - September 15, 2024",
  },
  {
    id: 3,
    title: "Morning Smash Offer",
    description: "Court #3 from 8-9 AM only Rs. 1,000",
    period: "August 1, 2024 - October 1, 2024",
  },
  {
    id: 4,
    title: "Student Special",
    description: "Court #4 available for Rs. 900 with student ID",
    period: "July 25, 2024 - September 25, 2024",
  },
];

export default function CourtBooking() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-semibold mb-6">Court Booking Deals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courtBookings.map((deal) => (
          <Card
            key={deal.id}
            className="bg-[#1e293b]/60 border border-[#adef0e] shadow-md rounded-2xl h-full"
          >
            <CardContent className="p-4 flex flex-col h-full">
              <div>
                <h3 className="text-lg font-bold mb-1 text-[#adef0e]">
                  {deal.title}
                </h3>
                <p className="text-sm text-gray-300">{deal.description}</p>
                <div className="text-xs text-gray-400 mt-3">
                  Promo Period: <br />
                  {deal.period}
                </div>
              </div>

              <div className="flex gap-2 mt-auto pt-4">
                <Button
                  variant="outline"
                  className="w-1/2 border-[#adef0e] text-white hover:bg-[#adef0e]/10 bg-transparent"
                >
                  Delete
                </Button>
                <Button
                  variant="outline"
                  className="w-1/2 border-[#adef0e] text-white hover:bg-[#adef0e]/10 bg-transparent"
                >
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
