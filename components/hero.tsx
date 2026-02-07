import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          href="/#features"
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
        >
          <span className="text-muted-foreground">Introducing FinSight AI</span>
          <span className="ml-2 text-primary">Explore features <ArrowRight className="inline-block h-4 w-4" /></span>
        </Link>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight">
          Master Your Money with <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500">AI Magic</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Analyze spending, track habits, and get actionable insights instantly. 
          Stop guessing and start saving with the power of artificial intelligence.
        </p>
        <div className="space-x-4">
          <Link href="/auth/sign-up">
            <Button size="lg" className="h-12 px-8">Get Started</Button>
          </Link>
          <Link href="/#features">
            <Button size="lg" variant="outline" className="h-12 px-8">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}