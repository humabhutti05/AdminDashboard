import { useState } from "react"
// import { Card } from "@/components/ui/card"

interface Booking {
  id: number
  user: string
  court: string
  date: string
  time: string
}

export default function Bookings() {
  const [bookings] = useState<Booking[]>([
    { id: 1, user: "Ali", court: "Court 1", date: "2025-07-18", time: "09:00" },
    { id: 2, user: "Sara", court: "Court 2", date: "2025-07-18", time: "10:00" },
  ])

  return (
    <div className="bg-[#0F172A] min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">All Bookings</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#1E293B]/60 text-[#ADEF0E]">
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Court</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-[#334155] hover:bg-[#1E293B]/40"
              >
                <td className="p-3">{booking.user}</td>
                <td className="p-3">{booking.court}</td>
                <td className="p-3">{booking.date}</td>
                <td className="p-3">{booking.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
