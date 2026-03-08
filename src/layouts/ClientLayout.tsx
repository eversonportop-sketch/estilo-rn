import { Outlet } from "react-router-dom";
import ClientSidebar from "@/components/ClientSidebar";

export default function ClientLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <ClientSidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
