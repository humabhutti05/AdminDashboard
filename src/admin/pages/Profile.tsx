import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardHeader } from "../components/DashboardHeader";

export default function ProfilePage() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (!avatar) {
      alert("Please select an avatar image.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    formData.append("email", email);

    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred during upload.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0F172A] text-white">
      <DashboardHeader toggleSidebar={() => {}} />

      <div className="p-6 max-w-2xl mx-auto">
        <Card className="bg-slate-900 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Edit Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label className="text-white">Name</Label>
              <Input
                className="bg-slate-800 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Email</Label>
              <Input
                className="bg-slate-800 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Avatar</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="bg-slate-800 text-white"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Avatar Preview"
                  className="mt-2 w-24 h-24 rounded-full object-cover border border-slate-600"
                />
              )}
            </div>

            <Button onClick={handleSave} disabled={loading} className="mt-4">
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
