import { Outlet } from "react-router-dom";
import StrategistSidebar from "@/components/StrategistSidebar";

export default function StrategistLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <StrategistSidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
