"use client";

import { useState } from "react";
import { Settings as SettingsIcon, Sliders, Brain, BookOpen } from "lucide-react";
import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  const [formality, setFormality] = useState([50]);
  const [creativity, setCreativity] = useState([70]);
  const [detailLevel, setDetailLevel] = useState([60]);
  const [responseLength, setResponseLength] = useState("medium");

  const [specializations, setSpecializations] = useState({
    science: true,
    business: false,
    creative: true,
    education: true,
    technical: false,
  });

  const toggleSpecialization = (key: string) => {
    setSpecializations((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  return (
    <div className="flex h-screen bg-background">
      <ChatSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">AI Settings</h1>
            <p className="text-muted-foreground">
              Customize your AI assistant's personality and capabilities
            </p>
          </div>

          <Tabs defaultValue="personality" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
              <TabsTrigger value="personality" className="data-[state=active]:bg-accent">
                <Sliders className="w-4 h-4 mr-2" />
                Personality
              </TabsTrigger>
              <TabsTrigger value="knowledge" className="data-[state=active]:bg-accent">
                <Brain className="w-4 h-4 mr-2" />
                Knowledge Areas
              </TabsTrigger>
              <TabsTrigger value="preferences" className="data-[state=active]:bg-accent">
                <SettingsIcon className="w-4 h-4 mr-2" />
                Preferences
              </TabsTrigger>
            </TabsList>

            {/* Personality Tab */}
            <TabsContent value="personality" className="space-y-6">
              <Card className="bg-card border-border shadow-card">
                <CardHeader>
                  <CardTitle>Response Style</CardTitle>
                  <CardDescription>
                    Adjust how the AI communicates with you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Formality Level */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="formality" className="text-base">
                        Formality Level
                      </Label>
                      <span className="text-sm text-muted-foreground">
                        {formality[0] < 33 ? "Casual" : formality[0] < 66 ? "Balanced" : "Professional"}
                      </span>
                    </div>
                    <Slider
                      id="formality"
                      value={formality}
                      onValueChange={setFormality}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Casual & Friendly</span>
                      <span>Professional & Formal</span>
                    </div>
                  </div>

                  {/* Creativity Level */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="creativity" className="text-base">
                        Creativity Level
                      </Label>
                      <span className="text-sm text-muted-foreground">
                        {creativity[0] < 33 ? "Conservative" : creativity[0] < 66 ? "Balanced" : "Creative"}
                      </span>
                    </div>
                    <Slider
                      id="creativity"
                      value={creativity}
                      onValueChange={setCreativity}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Factual & Conservative</span>
                      <span>Creative & Imaginative</span>
                    </div>
                  </div>

                  {/* Detail Level */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="detail" className="text-base">
                        Detail Level
                      </Label>
                      <span className="text-sm text-muted-foreground">
                        {detailLevel[0] < 33 ? "Brief" : detailLevel[0] < 66 ? "Moderate" : "Detailed"}
                      </span>
                    </div>
                    <Slider
                      id="detail"
                      value={detailLevel}
                      onValueChange={setDetailLevel}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Brief & Concise</span>
                      <span>Detailed & Thorough</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Knowledge Areas Tab */}
            <TabsContent value="knowledge" className="space-y-6">
              <Card className="bg-card border-border shadow-card">
                <CardHeader>
                  <CardTitle>Specialized Knowledge</CardTitle>
                  <CardDescription>
                    Enable specialized knowledge areas for more focused responses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Science */}
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50">
                      <div className="space-y-1">
                        <Label htmlFor="science" className="text-base font-semibold">
                          Science & Technology
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Physics, chemistry, biology, and tech
                        </p>
                      </div>
                      <Switch
                        id="science"
                        checked={specializations.science}
                        onCheckedChange={() => toggleSpecialization("science")}
                      />
                    </div>

                    {/* Business */}
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50">
                      <div className="space-y-1">
                        <Label htmlFor="business" className="text-base font-semibold">
                          Business & Finance
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Marketing, finance, and management
                        </p>
                      </div>
                      <Switch
                        id="business"
                        checked={specializations.business}
                        onCheckedChange={() => toggleSpecialization("business")}
                      />
                    </div>

                    {/* Creative */}
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50">
                      <div className="space-y-1">
                        <Label htmlFor="creative" className="text-base font-semibold">
                          Creative Writing
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Stories, poetry, and creative content
                        </p>
                      </div>
                      <Switch
                        id="creative"
                        checked={specializations.creative}
                        onCheckedChange={() => toggleSpecialization("creative")}
                      />
                    </div>

                    {/* Education */}
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50">
                      <div className="space-y-1">
                        <Label htmlFor="education" className="text-base font-semibold">
                          Education & Learning
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Teaching, tutoring, and explanations
                        </p>
                      </div>
                      <Switch
                        id="education"
                        checked={specializations.education}
                        onCheckedChange={() => toggleSpecialization("education")}
                      />
                    </div>

                    {/* Technical */}
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50">
                      <div className="space-y-1">
                        <Label htmlFor="technical" className="text-base font-semibold">
                          Programming & Dev
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Coding, debugging, and dev tools
                        </p>
                      </div>
                      <Switch
                        id="technical"
                        checked={specializations.technical}
                        onCheckedChange={() => toggleSpecialization("technical")}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6">
              <Card className="bg-card border-border shadow-card">
                <CardHeader>
                  <CardTitle>Response Preferences</CardTitle>
                  <CardDescription>
                    Configure how responses are formatted and delivered
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Response Length */}
                  <div className="space-y-3">
                    <Label htmlFor="length" className="text-base">
                      Default Response Length
                    </Label>
                    <Select value={responseLength} onValueChange={setResponseLength}>
                      <SelectTrigger id="length" className="bg-background border-border">
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brief">Brief - Quick, concise answers</SelectItem>
                        <SelectItem value="medium">Medium - Balanced responses</SelectItem>
                        <SelectItem value="detailed">Detailed - Comprehensive explanations</SelectItem>
                        <SelectItem value="comprehensive">Comprehensive - In-depth analysis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Additional Options */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="examples" className="text-base">
                          Include Examples
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Provide practical examples in responses
                        </p>
                      </div>
                      <Switch id="examples" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="sources" className="text-base">
                          Cite Sources
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Include source references when applicable
                        </p>
                      </div>
                      <Switch id="sources" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="followup" className="text-base">
                          Suggest Follow-ups
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Offer related questions to explore
                        </p>
                      </div>
                      <Switch id="followup" defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Preview Card */}
          <Card className="bg-card border-border shadow-card mt-6">
            <CardHeader>
              <CardTitle>Preview Your Settings</CardTitle>
              <CardDescription>
                See how your customizations affect AI responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-background/50 border border-border rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-purple-cyan flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="chat-bubble chat-bubble-ai inline-block">
                      <p>
                        {formality[0] > 66
                          ? "I would be delighted to assist you with your inquiry."
                          : formality[0] > 33
                          ? "I'd be happy to help you with that!"
                          : "Hey! I'd love to help you out with that 😊"}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Your AI will respond in this style based on your settings
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
