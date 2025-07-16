import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

export default function AdminDashboard() {
  return (
    <div className="space-y-6 bg-amber-200">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Card>
          <CardHeader>
            <CardTitle>Total Courts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">26</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">178</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">PKR 8,400</p>
          </CardContent>
        </Card>
      </div>

      {/* You can add more sections here, like recent bookings or chart */}
    </div>
  );
}
