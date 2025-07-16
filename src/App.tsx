import { Routes, Route } from "react-router-dom";
import AdminLayout from "@/admin/layouts/AdminLayout";
import AdminDashboard from "@/admin/pages/AdminDashboard";
import ManageCourts from "@/admin/pages/ManageCourts";
import ManageUsers from "@/admin/pages/ManageUsers";
import ScheduleBooking from "@/admin/pages/ScheduleBooking";
import Booking from "@/admin/pages/Booking"; // ✅ Correct import

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="courts" element={<ManageCourts />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="schedule" element={<ScheduleBooking />} />
        <Route path="bookings" element={<Booking />} />
      </Route>
    </Routes>
  );
}

export default App;
