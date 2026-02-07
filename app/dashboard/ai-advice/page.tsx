"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Progress,
  Skeleton,
  Tooltip,
} from "@heroui/react";
import {
  Sparkles,
  Loader2,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  RefreshCw,
  Target,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AdviceData {
  overallScore: number;
  summary: string;
  topSpendingCategories: {
    category: string;
    amount: number;
    percentage: number;
    advice: string;
  }[];
  savingsTips: {
    tip: string;
    potentialSavings: string;
    priority: "high" | "medium" | "low";
  }[];
  monthlyTrend: string;
  warningFlags: string[];
  positiveHabits: string[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function AiAdvicePage() {
  const [advice, setAdvice] = useState<AdviceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAdvice = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/ai/advice", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setAdvice(data);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const scoreColor =
    !advice
      ? "text-default-500"
      : advice.overallScore >= 70
        ? "text-emerald-500"
        : advice.overallScore >= 40
          ? "text-orange-500"
          : "text-red-500";

  const priorityColors = {
    high: "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400",
    medium:
      "bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400",
    low: "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400",
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/25">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-tight">
              AI Financial Advice
            </h1>
            <p className="text-sm text-default-500">
              Get personalized insights from AI analysis
            </p>
          </div>
        </div>
        <Button
          onPress={getAdvice}
          isDisabled={loading}
          color="secondary"
          className="bg-gradient-to-r from-violet-500 to-pink-600 text-white shadow-lg shadow-violet-500/25"
          startContent={
            loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : advice ? (
              <RefreshCw className="h-4 w-4" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )
          }
        >
          {loading
            ? "Analyzing..."
            : advice
              ? "Re-analyze"
              : "Analyze My Finances"}
        </Button>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-danger-50 border border-danger-200 rounded-xl p-4 text-danger text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {loading && (
        <div className="space-y-4">
          <Skeleton className="h-40 w-full rounded-xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-60 rounded-xl" />
            <Skeleton className="h-60 rounded-xl" />
          </div>
          <Skeleton className="h-40 w-full rounded-xl" />
        </div>
      )}

      {advice && !loading && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div variants={item}>
            <Card className="bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 dark:from-blue-950/20 dark:via-violet-950/20 dark:to-pink-950/20 border border-blue-200/50 dark:border-blue-800/30">
              <CardBody className="py-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative">
                      <svg className="w-32 h-32" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="currentColor"
                          className="text-default-200"
                          strokeWidth="8"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={
                            advice.overallScore >= 70
                              ? "#10b981"
                              : advice.overallScore >= 40
                                ? "#f97316"
                                : "#ef4444"
                          }
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${advice.overallScore * 2.51} 251`}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-3xl font-bold ${scoreColor}`}>
                          {advice.overallScore}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-default-500">
                      Health Score
                    </span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="font-serif text-xl font-bold mb-2">
                      Financial Health Overview
                    </h2>
                    <p className="text-default-500">{advice.summary}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  <h3 className="font-serif text-lg font-semibold">
                    Top Spending Categories
                  </h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  {advice.topSpendingCategories.map((cat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">
                          {cat.category}
                        </span>
                        <span className="text-sm text-default-500">
                          ${cat.amount.toFixed(0)} ({cat.percentage.toFixed(1)}
                          %)
                        </span>
                      </div>
                      <Progress
                        value={cat.percentage}
                        size="sm"
                        color="primary"
                      />
                      <p className="text-xs text-default-500">{cat.advice}</p>
                    </div>
                  ))}
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  <h3 className="font-serif text-lg font-semibold">
                    Savings Tips
                  </h3>
                </CardHeader>
                <CardBody className="space-y-3">
                  {advice.savingsTips.map((tip, i) => (
                    <Tooltip key={i} content={`Priority: ${tip.priority}`}>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-default-100 hover:bg-default-200 transition-colors cursor-default">
                        <Chip
                          size="sm"
                          className={priorityColors[tip.priority]}
                        >
                          {tip.priority}
                        </Chip>
                        <div>
                          <p className="text-sm font-medium">{tip.tip}</p>
                          <p className="text-xs text-default-500 mt-1">
                            Potential savings: {tip.potentialSavings}
                          </p>
                        </div>
                      </div>
                    </Tooltip>
                  ))}
                </CardBody>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={item}>
            <Card>
              <CardHeader className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <h3 className="font-serif text-lg font-semibold">
                  Monthly Trend Analysis
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-default-500">
                  {advice.monthlyTrend}
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advice.warningFlags.length > 0 && (
              <motion.div variants={item}>
                <Card className="border border-orange-200/50 dark:border-orange-800/30">
                  <CardHeader className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      <h3 className="font-serif text-lg font-semibold">
                        Warning Flags
                      </h3>
                    </div>
                    <p className="text-sm text-default-500">
                      Areas that need attention
                    </p>
                  </CardHeader>
                  <CardBody>
                    <ul className="space-y-2">
                      {advice.warningFlags.map((flag, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-orange-600 dark:text-orange-400"
                        >
                          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </motion.div>
            )}

            {advice.positiveHabits.length > 0 && (
              <motion.div variants={item}>
                <Card className="border border-emerald-200/50 dark:border-emerald-800/30">
                  <CardHeader className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <h3 className="font-serif text-lg font-semibold">
                        Positive Habits
                      </h3>
                    </div>
                    <p className="text-sm text-default-500">
                      Keep up the good work!
                    </p>
                  </CardHeader>
                  <CardBody>
                    <ul className="space-y-2">
                      {advice.positiveHabits.map((habit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-emerald-600 dark:text-emerald-400"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                          {habit}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {!advice && !loading && !error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center mb-4">
            <Sparkles className="h-10 w-10 text-violet-500" />
          </div>
          <h2 className="font-serif text-xl font-bold mb-2">
            Ready to analyze your finances?
          </h2>
          <p className="text-default-500 max-w-md mb-6">
            Click the button above to get AI-powered insights about your
            spending habits, savings tips, and financial health score.
          </p>
        </motion.div>
      )}
    </div>
  );
}
