import { Navbar } from "@/components/navbar";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-16 w-full border-b" />}>
        <Navbar />
      </Suspense>
      <main className="flex-1 w-full flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
