"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ArrowLeftRight,
  Sparkles,
  MessageSquare,
  WalletCards,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button, Tooltip, Divider } from "@heroui/react";
import { useSidebar } from "@/components/sidebar-context";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-blue-500",
  },
  {
    title: "Transactions",
    href: "/dashboard/transactions",
    icon: ArrowLeftRight,
    color: "text-emerald-500",
  },
  {
    title: "AI Advice",
    href: "/dashboard/ai-advice",
    icon: Sparkles,
    color: "text-violet-500",
  },
  {
    title: "AI Chat",
    href: "/dashboard/ai-chat",
    icon: MessageSquare,
    color: "text-pink-500",
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { isExpanded, toggle } = useSidebar();

  return (
    <motion.aside
      animate={{ width: isExpanded ? 240 : 64 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="hidden md:flex flex-col h-screen sticky top-0 border-r border-divider bg-content1/50 backdrop-blur-lg overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 h-14 border-b border-divider shrink-0">
        <Link href="/dashboard" className="flex items-center gap-2 min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/20">
            <WalletCards className="h-4 w-4" />
          </div>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-serif font-bold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap"
            >
              FinSight AI
            </motion.span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3 px-2 space-y-1 overflow-y-auto">
        <p className={cn(
          "text-xs uppercase tracking-wider text-default-400 mb-2 transition-all",
          isExpanded ? "px-2" : "text-center"
        )}>
          {isExpanded ? "Navigation" : ""}
        </p>
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          const button = (
            <Button
              key={item.title}
              as={Link}
              href={item.href}
              variant={isActive ? "flat" : "light"}
              className={cn(
                "w-full justify-start transition-all duration-200 min-h-10",
                isExpanded ? "px-3" : "px-0 justify-center min-w-10",
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-default-600 hover:text-foreground"
              )}
              startContent={
                isExpanded ? (
                  <item.icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      isActive ? "text-primary" : item.color
                    )}
                  />
                ) : undefined
              }
              isIconOnly={!isExpanded}
            >
              {isExpanded ? (
                item.title
              ) : (
                <item.icon
                  className={cn(
                    "h-4 w-4",
                    isActive ? "text-primary" : item.color
                  )}
                />
              )}
            </Button>
          );

          if (!isExpanded) {
            return (
              <Tooltip key={item.title} content={item.title} placement="right">
                {button}
              </Tooltip>
            );
          }

          return button;
        })}
      </nav>

      {/* Footer */}
      <Divider />
      <div className="p-2 shrink-0">
        <Button
          variant="light"
          size="sm"
          onPress={toggle}
          className="w-full text-default-500 hover:text-foreground"
          isIconOnly={!isExpanded}
        >
          {isExpanded ? (
            <>
              <ChevronLeft className="h-4 w-4 mr-2" />
              <span>Collapse</span>
            </>
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>
    </motion.aside>
  );
}
