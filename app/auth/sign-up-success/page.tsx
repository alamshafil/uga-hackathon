"use client";

import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { MailCheck, WalletCards } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl mb-4"
            >
              <WalletCards className="h-6 w-6 text-primary" />
              FinSight
            </Link>
          </div>
          <Card shadow="lg" className="border-none text-center p-4">
            <CardHeader className="flex flex-col items-center gap-2">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MailCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Welcome Aboard!</h2>
              <p className="text-default-500 text-sm">
                Check your email to confirm your account
              </p>
            </CardHeader>
            <CardBody className="space-y-4">
              <p className="text-sm text-default-500">
                You&apos;ve successfully signed up. We&apos;ve sent a
                verification link to your email. Please click it to activate
                your account.
              </p>
              <Button
                as={Link}
                href="/auth/login"
                color="primary"
                className="w-full"
              >
                Back to Login
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
