"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { Loader2, WalletCards, MailCheck, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6"
      >
        <motion.div variants={item} className="flex flex-col items-center gap-2 text-center">
          <Link href="/" className="flex items-center gap-2 font-serif font-bold text-2xl mb-4 group">
            <WalletCards className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            FinSight AI
          </Link>
        </motion.div>
        
        <motion.div variants={item}>
          {success ? (
            <Card className="border-none shadow-lg text-center p-4">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                   <MailCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-3xl font-bold">Check Your Email</CardTitle>
                <CardDescription>
                  We&apos;ve sent password reset instructions to your email address.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  If you registered using your email and password, you will receive
                  a password reset email shortly.
                </p>
                <Button asChild variant="outline" className="w-full">
                    <Link href="/auth/login">Back to Login</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-none shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif text-3xl font-bold tracking-tight">Reset Password</CardTitle>
                  <Button asChild variant="ghost" size="sm" className="h-8 gap-1 text-muted-foreground hover:text-foreground">
                    <Link href="/auth/login">
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </Link>
                  </Button>
                </div>
                <CardDescription>
                  Enter your email address and we&apos;ll send you a link to reset your password
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  {error && (
                    <div className="p-3 text-sm bg-destructive/10 text-destructive rounded-md border border-destructive/20">
                      {error}
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isLoading ? "Sending link..." : "Send Reset Link"}
                  </Button>
                  <div className="text-center text-sm">
                    Remember your password?{" "}
                    <Link
                      href="/auth/login"
                      className="font-medium text-primary hover:underline underline-offset-4"
                    >
                      Sign in
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}