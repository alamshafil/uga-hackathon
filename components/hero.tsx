"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Wand2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingSparkles } from "@/components/magic-sparkles";

interface HeroProps {
  user: { email: string } | null;
}

export function Hero({ user }: HeroProps) {
  return (
    <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 overflow-hidden">
      {/* Magic background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="magic-orb magic-orb-1" />
        <div className="magic-orb magic-orb-2" />
        <div className="magic-orb magic-orb-3" />
      </div>

      <FloatingSparkles count={10} />

      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm font-medium mb-2"
        >
          <Sparkles className="h-4 w-4 animate-twinkle" />
          Powered by Magic
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight"
        >
          Master Your Money with{" "}
          <span className="magic-gradient-text relative">
            Magic
            <motion.span
              className="absolute -top-2 -right-6"
              animate={{ rotate: [0, 15, -5, 10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Wand2 className="h-8 w-8 sm:h-10 sm:w-10 text-amber-400" />
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[42rem] leading-normal text-default-500 sm:text-xl sm:leading-8"
        >
          Wave your wand over your finances. Analyze spending, track habits, and
          conjure actionable insights instantly with magical intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-x-4"
        >
          {user ? (
            <Button
              as={Link}
              href="/dashboard"
              size="lg"
              radius="lg"
              className="magic-gradient-bg text-white shadow-lg shadow-violet-500/25 magic-glow"
              startContent={<Wand2 className="h-5 w-5 animate-wand-wave" />}
            >
              Enter the Magic Portal
            </Button>
          ) : (
            <>
              <Button
                as={Link}
                href="/auth/sign-up"
                size="lg"
                radius="lg"
                className="magic-gradient-bg text-white shadow-lg shadow-violet-500/25 magic-glow"
                startContent={<Wand2 className="h-5 w-5" />}
              >
                Get Started
              </Button>
              <Button
                as={Link}
                href="/auth/login"
                variant="bordered"
                size="lg"
                radius="lg"
                className="border-violet-500/30 text-violet-600 dark:text-violet-400 hover:bg-violet-500/10"
              >
                Login
              </Button>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
