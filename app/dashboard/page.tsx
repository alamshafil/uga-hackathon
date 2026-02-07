import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login");
  }

  return (
    <div className="container py-10 max-w-5xl mx-auto px-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <h1 className="font-serif text-4xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to your financial insights.</p>
        </div>
        
        <div className="flex items-center gap-4 rounded-lg border bg-accent/50 p-4 text-sm text-foreground">
          <Info className="h-4 w-4" />
          <span>
            This is a protected page. You are logged in as <strong>{user.email}</strong>.
          </span>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
            <CardHeader>
                <CardTitle className="font-serif text-2xl">User Profile</CardTitle>
                <CardDescription>
                Your account information.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Email</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">User ID</p>
                    <p className="text-sm font-mono text-muted-foreground break-all">{user.id}</p>
                </div>
                 <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Last Sign In</p>
                    <p className="text-sm text-muted-foreground">
                         {new Date(user.last_sign_in_at || new Date()).toLocaleString()}
                    </p>
                </div>
                </div>
            </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-serif text-2xl">Recent Activity</CardTitle>
                    <CardDescription>
                        Your latest financial insights.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <p className="text-sm text-muted-foreground">No recent activity to show.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}