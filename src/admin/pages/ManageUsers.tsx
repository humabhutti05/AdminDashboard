import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface User {
  id: number
  name: string
  email: string
}

export default function ManageUsers() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Areeba Khan", email: "areeba@example.com" },
    { id: 2, name: "Fahad Ali", email: "fahad@example.com" },
    { id: 3, name: "Sana Raza", email: "sana@example.com" },
  ])

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="bg-[#0F172A] min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      <div className="overflow-x-auto rounded-lg border border-[#ADEF0E] bg-[#1E293B]/60">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left border-b border-[#ADEF0E] text-[#ADEF0E]">
              <th className="p-4">User</th>
              <th className="p-4">Email</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-[#334155] hover:bg-[#334155]/50"
              >
                <td className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ADEF0E] text-black font-bold">
                    {getInitials(user.name)}
                  </div>
                  <span>{user.name}</span>
                </td>
                <td className="p-4 text-gray-300">{user.email}</td>
                <td className="p-4 text-right">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleDelete(user.id)}
                  >
                    <Trash2 className="text-red-500 w-5 h-5" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
