import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Court {
  id: number;
  name: string;
  type: string;
  isEditing?: boolean;
}

export default function ManageCourts() {
  const [courts, setCourts] = useState<Court[]>([
    { id: 1, name: "Court 1", type: "Indoor" },
    { id: 2, name: "Court 2", type: "Outdoor" },
  ]);

  const [newCourt, setNewCourt] = useState({ name: "", type: "" });

  const handleAddCourt = () => {
    if (!newCourt.name || !newCourt.type) return;

    setCourts([
      ...courts,
      { id: Date.now(), name: newCourt.name, type: newCourt.type },
    ]);
    setNewCourt({ name: "", type: "" });
  };

  const handleDelete = (id: number) => {
    setCourts(courts.filter((court) => court.id !== id));
  };

  const handleEdit = (id: number) => {
    setCourts(
      courts.map((court) =>
        court.id === id ? { ...court, isEditing: true } : court
      )
    );
  };

  const handleSave = (id: number, updated: { name: string; type: string }) => {
    setCourts(
      courts.map((court) =>
        court.id === id ? { ...court, ...updated, isEditing: false } : court
      )
    );
  };

  return (
    <div className="bg-[#0F172A] min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Manage Courts</h1>

      {/* Add Court Form */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input
          className="bg-[#1E293B]/60 text-white border-[#ADEF0E] placeholder:text-gray-400"
          placeholder="Court Name"
          value={newCourt.name}
          onChange={(e) => setNewCourt({ ...newCourt, name: e.target.value })}
        />
        <Input
          className="bg-[#1E293B]/60 text-white border-[#ADEF0E] placeholder:text-gray-400"
          placeholder="Court Type"
          value={newCourt.type}
          onChange={(e) => setNewCourt({ ...newCourt, type: e.target.value })}
        />
        <Button
          onClick={handleAddCourt}
          className="bg-[#ADEF0E] text-black hover:opacity-90"
        >
          Add Court
        </Button>
      </div>

      {/* Court Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courts.map((court) => (
          <Card
            key={court.id}
            className="bg-[#1E293B]/60 text-white border border-[#ADEF0E]"
          >
            <CardHeader>
              {court.isEditing ? (
                <>
                  <Input
                    className="mb-2 bg-[#1E293B]/60 text-white border-[#ADEF0E]"
                    value={court.name}
                    onChange={(e) =>
                      setCourts((prev) =>
                        prev.map((c) =>
                          c.id === court.id
                            ? { ...c, name: e.target.value }
                            : c
                        )
                      )
                    }
                  />
                  <Input
                    className="bg-[#1E293B]/60 text-white border-[#ADEF0E]"
                    value={court.type}
                    onChange={(e) =>
                      setCourts((prev) =>
                        prev.map((c) =>
                          c.id === court.id
                            ? { ...c, type: e.target.value }
                            : c
                        )
                      )
                    }
                  />
                </>
              ) : (
                <CardTitle>{court.name}</CardTitle>
              )}
            </CardHeader>
            <CardContent>
              <p>Type: {court.type}</p>
              <div className="flex gap-2 mt-4">
                {court.isEditing ? (
                  <Button
                    onClick={() =>
                      handleSave(court.id, {
                        name: court.name,
                        type: court.type,
                      })
                    }
                    className="bg-green-600 hover:bg-green-500 text-white"
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleEdit(court.id)}
                    className="bg-yellow-600 hover:bg-yellow-500 text-white"
                  >
                    Edit
                  </Button>
                )}
                <Button
                  onClick={() => handleDelete(court.id)}
                  className="bg-red-600 hover:bg-red-500 text-white"
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
