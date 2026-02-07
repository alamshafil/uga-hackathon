import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MailCheck, WalletCards } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <WalletCards className="h-6 w-6 text-primary" />
              FinSight AI
            </Link>
          </div>
          <Card className="border-none shadow-lg text-center p-4">
            <CardHeader>
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                 <MailCheck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Welcome Aboard!</CardTitle>
              <CardDescription>
                Check your email to confirm your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                You&apos;ve successfully signed up. We&apos;ve sent a verification link to your email. Please click it to activate your account.
              </p>
              <Button asChild className="w-full">
                  <Link href="/auth/login">Back to Login</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}