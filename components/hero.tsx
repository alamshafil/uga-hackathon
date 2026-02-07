"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

interface HeroProps {
  user: { email: string } | null;
}

export function Hero({ user }: HeroProps) {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight">
          Master Your Money with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            AI Magic
          </span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-default-500 sm:text-xl sm:leading-8">
          Analyze spending, track habits, and get actionable insights instantly.
          Stop guessing and start saving with the power of artificial
          intelligence.
        </p>
        <div className="space-x-4">
          {user ? (
            <Button
              as={Link}
              href="/dashboard"
              color="primary"
              size="lg"
              radius="lg"
            >
              Go to Dashboard
            </Button>
          ) : (
            <>
              <Button
                as={Link}
                href="/auth/sign-up"
                color="primary"
                size="lg"
                radius="lg"
              >
                Get Started
              </Button>
              <Button
                as={Link}
                href="/auth/login"
                variant="bordered"
                size="lg"
                radius="lg"
              >
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
