"use client";

import { useState } from "react";
import { MessageSquare, Plus, History, Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mockConversations = [
  { id: "1", title: "Quantum Physics Discussion", date: "2 hours ago" },
  { id: "2", title: "Creative Writing Help", date: "Yesterday" },
  { id: "3", title: "Project Planning Session", date: "2 days ago" },
  { id: "4", title: "Math Problem Solving", date: "1 week ago" },
];

export function ChatSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 w-80 bg-card border-r border-border transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-purple-cyan flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">ChatGPT Clone</span>
          </Link>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <Button
            className="w-full bg-gradient-blue hover:opacity-90 rounded-pill glow-blue"
            onClick={() => window.location.href = "/chat"}
          >
            <Plus className="w-5 h-5 mr-2" />
            New Chat
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 space-y-1">
          <Link
            href="/chat"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              pathname === "/chat"
                ? "bg-accent/20 text-accent"
                : "hover:bg-accent/10 text-muted-foreground"
            )}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">Chat</span>
          </Link>

          <Link
            href="/history"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              pathname === "/history"
                ? "bg-accent/20 text-accent"
                : "hover:bg-accent/10 text-muted-foreground"
            )}
          >
            <History className="w-5 h-5" />
            <span className="font-medium">History</span>
          </Link>

          <Link
            href="/settings"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              pathname === "/settings"
                ? "bg-accent/20 text-accent"
                : "hover:bg-accent/10 text-muted-foreground"
            )}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </Link>

          {/* Recent Conversations */}
          <div className="pt-6">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-2">
              Recent Chats
            </h3>
            <div className="space-y-1">
              {mockConversations.map((conv) => (
                <button
                  key={conv.id}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate group-hover:text-accent transition-colors">
                        {conv.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{conv.date}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-purple-cyan flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">User Account</p>
              <p className="text-xs text-muted-foreground">Free Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
