"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Lightbulb, Users, ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-purple-cyan flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ChatGPT Clone</span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/chat">
                <Button className="bg-gradient-blue hover:opacity-90 rounded-pill glow-blue">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Unlock Intelligence. Revolutionize Communication
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the power of AI conversation with your personal assistant.
                Get instant answers, creative help, and intelligent insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/chat">
                  <Button size="lg" className="bg-gradient-blue hover:opacity-90 rounded-pill glow-blue h-14 px-8 text-base">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="rounded-pill h-14 px-8 text-base border-border">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-purple-cyan rounded-full blur-[100px] opacity-30"></div>
                <div className="relative">
                  <Image
                    src="/generated/hero-phone-mockup.png"
                    alt="ChatGPT Clone Interface"
                    width={400}
                    height={400}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for intelligent conversations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-card border-border shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-purple-cyan mx-auto flex items-center justify-center glow-cyan">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Instant Responses</h3>
                <p className="text-muted-foreground">
                  Get lightning-fast answers to your questions with advanced AI technology
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-card border-border shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-purple-cyan mx-auto flex items-center justify-center glow-cyan">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Personalized Learning</h3>
                <p className="text-muted-foreground">
                  AI adapts to your preferences and learns from your conversations
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-card border-border shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-purple-cyan mx-auto flex items-center justify-center glow-cyan">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Works perfectly across all your devices for consistent experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Image
                    src="/generated/avatar-placeholder.png"
                    alt="User"
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-border flex-shrink-0"
                  />
                  <div className="space-y-3">
                    <p className="text-lg italic">
                      "Amazing experience overall! This AI has completely transformed how I work and learn. Highly recommend!"
                    </p>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Product Designer</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-card border-border shadow-card hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Basic</h3>
                  <p className="text-4xl font-bold text-primary mb-4">
                    Free
                  </p>
                  <p className="text-muted-foreground">Perfect for getting started</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>50 messages per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>Basic AI capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>Standard support</span>
                  </li>
                </ul>
                <Button className="w-full rounded-pill" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-card border-border shadow-card hover:shadow-xl transition-all duration-300 border-primary/50">
              <CardContent className="p-8 space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <p className="text-4xl font-bold text-primary mb-4">
                    $19<span className="text-lg text-muted-foreground">/mo</span>
                  </p>
                  <p className="text-muted-foreground">For power users</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>Unlimited messages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>Advanced AI capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>Custom personality</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-blue hover:opacity-90 rounded-pill glow-blue">
                  Sign Up Now
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-card border-border shadow-card hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-4xl font-bold text-primary mb-4">
                    Custom
                  </p>
                  <p className="text-muted-foreground">For large teams</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">✓</span>
                    </div>
                    <span>Custom integration</span>
                  </li>
                </ul>
                <Button className="w-full rounded-pill" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of users already using our AI assistant
          </p>
          <Link href="/chat">
            <Button size="lg" className="bg-gradient-blue hover:opacity-90 rounded-pill glow-blue h-14 px-12 text-lg">
              Join Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-purple-cyan flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ChatGPT Clone</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your intelligent AI conversation partner
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/chat" className="hover:text-foreground transition-colors">Try Now</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 ChatGPT Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}