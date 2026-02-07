import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { AuthButton } from "./auth-button";
import { Suspense } from "react";
import { WalletCards } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

async function DashboardLink() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  return (
    <Link
      href="/dashboard"
      className="transition-colors hover:text-primary text-muted-foreground"
    >
      Dashboard
    </Link>
  );
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <WalletCards className="h-6 w-6 text-primary" />
            <span className="font-serif font-bold text-xl tracking-tight">
              FinSight AI
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/#features"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Features
            </Link>
            <Suspense fallback={null}>
               <DashboardLink />
            </Suspense>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <Suspense fallback={<div className="h-8 w-20 animate-pulse bg-muted rounded" />}>
             <AuthButton />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
