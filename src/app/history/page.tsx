"use client";

import { useState } from "react";
import { Search, MessageSquare, Calendar, Trash2 } from "lucide-react";
import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Conversation {
  id: string;
  title: string;
  preview: string;
  messageCount: number;
  date: string;
  timestamp: Date;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    title: "Quantum Physics Discussion",
    preview: "Explain quantum computing simply...",
    messageCount: 24,
    date: "2 hours ago",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "2",
    title: "Creative Writing Help",
    preview: "Help me write a science fiction story...",
    messageCount: 18,
    date: "Yesterday",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: "3",
    title: "Project Planning Session",
    preview: "Let's plan out the project timeline...",
    messageCount: 32,
    date: "2 days ago",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: "4",
    title: "Math Problem Solving",
    preview: "Can you help me solve this calculus problem...",
    messageCount: 15,
    date: "3 days ago",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: "5",
    title: "Learning Python",
    preview: "What's the best way to learn Python...",
    messageCount: 28,
    date: "1 week ago",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  },
  {
    id: "6",
    title: "Recipe Ideas",
    preview: "Suggest some healthy dinner recipes...",
    messageCount: 12,
    date: "1 week ago",
    timestamp: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
  },
];

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [conversations, setConversations] = useState(mockConversations);

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setConversations(conversations.filter((conv) => conv.id !== id));
  };

  const handleResumeChat = (id: string) => {
    window.location.href = `/chat?id=${id}`;
  };

  return (
    <div className="flex h-screen bg-background">
      <ChatSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Conversation History</h1>
            <p className="text-muted-foreground">
              Browse and resume your previous conversations
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-card border-border text-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Conversations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">
                  {conversations.length}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Messages This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-secondary">147</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">3</p>
              </CardContent>
            </Card>
          </div>

          {/* Conversations List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Recent Conversations</h2>

            {filteredConversations.length === 0 ? (
              <Card className="bg-card border-border shadow-card p-12 text-center">
                <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No conversations found</p>
              </Card>
            ) : (
              filteredConversations.map((conv) => (
                <Card
                  key={conv.id}
                  className="bg-card border-border shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-purple-cyan flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold truncate group-hover:text-primary transition-colors">
                              {conv.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {conv.messageCount} messages
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {conv.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground ml-[52px] line-clamp-2">
                          {conv.preview}
                        </p>
                      </div>

                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          onClick={() => handleResumeChat(conv.id)}
                          className="bg-gradient-blue hover:opacity-90 rounded-pill"
                        >
                          Resume
                        </Button>
                        <Button
                          onClick={() => handleDelete(conv.id)}
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
