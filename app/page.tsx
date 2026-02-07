import { Hero } from "@/components/hero";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, TrendingUp, Zap, ShieldCheck, PieChart, Sparkles, WalletCards } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-16 w-full border-b" />}>
        <Navbar />
      </Suspense>
      <main className="flex flex-col items-center">
        <Hero />
        
        <section id="features" className="w-full py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-semibold">
                Powerful Features
              </div>
              <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl">
                Everything you need to manage finances
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI-driven platform provides deep insights into your spending habits and helps you make better financial decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-background/60 backdrop-blur border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">AI-Powered Analysis</CardTitle>
                  <CardDescription className="text-base">
                    Automatically categorizes transactions and identifies spending patterns you might have missed.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-background/60 backdrop-blur border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Smart Forecasts</CardTitle>
                  <CardDescription className="text-base">
                    Predicts future spending based on your history to help you plan your monthly budget accurately.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-background/60 backdrop-blur border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Instant Insights</CardTitle>
                  <CardDescription className="text-base">
                    Get immediate feedback on large purchases and advice on how it affects your financial goals.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-background/60 backdrop-blur border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Secure & Private</CardTitle>
                  <CardDescription className="text-base">
                    Your data is encrypted and protected. We never sell your personal information to third parties.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-background/60 backdrop-blur border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <PieChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Visual Reports</CardTitle>
                  <CardDescription className="text-base">
                    Beautiful, easy-to-understand charts that break down where every dollar is going.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-background/60 backdrop-blur border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Habit Optimization</CardTitle>
                  <CardDescription className="text-base">
                    Personalized suggestions on small lifestyle changes that lead to big long-term savings.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-24 border-t">
          <div className="container mx-auto px-4 text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tighter mb-4">Ready to take control?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of users who are using FinSight AI to master their finances and build a better future.
              </p>
              <Link href="/auth/sign-up" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                  Start Your Journey Now
              </Link>
          </div>
        </section>

        <footer className="w-full py-12 border-t mt-auto">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 font-serif font-bold">
                  <WalletCards className="h-5 w-5" />
                  <span>FinSight AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                  © 2026 FinSight AI. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                  <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                  <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
              </div>
          </div>
        </footer>
      </main>
    </div>
  );
}