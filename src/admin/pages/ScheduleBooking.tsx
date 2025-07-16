import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Slot {
  id: number
  court: string
  time: string
  user?: string
}

const initialSlots: Slot[] = [
  { id: 1, court: "Court 1", time: "09:00 - 10:00", user: "Ali" },
  { id: 2, court: "Court 1", time: "10:00 - 11:00" },
  { id: 3, court: "Court 2", time: "09:00 - 10:00", user: "Sara" },
  { id: 4, court: "Court 2", time: "10:00 - 11:00" },
]

export default function ScheduleBooking() {
  const [slots] = useState(initialSlots)

  return (
    <div className="bg-[#0F172A] min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Schedule Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {slots.map((slot) => (
          <Card
            key={slot.id}
            className="bg-[#1E293B]/60 border border-[#ADEF0E] text-white"
          >
            <CardHeader>
              <CardTitle>{slot.court}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ADEF0E] font-semibold">{slot.time}</p>
              {slot.user ? (
                <p className="mt-2">Booked by: {slot.user}</p>
              ) : (
                <p className="mt-2 text-gray-400">Available</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
