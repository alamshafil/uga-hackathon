"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh(); // Refresh to update AuthButton state
    router.push("/auth/login");
  };

  return (
    <Button variant="outline" size="sm" onClick={logout} className="gap-2">
      <LogOut className="h-4 w-4" />
      <span>Logout</span>
    </Button>
  );
}