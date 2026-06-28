'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Award, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-accent/20 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About ProSports</h1>
            <p className="text-2xl text-muted-foreground">
              Your premier destination for sports news, analysis, and exclusive coverage
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-8">
              ProSports is dedicated to delivering comprehensive, accurate, and insightful sports coverage to fans worldwide. We believe in the power of sports to unite communities, inspire excellence, and create unforgettable moments. Our team is committed to bringing you the latest news, expert analysis, and engaging stories from the world of professional athletics.
            </p>
            <p className="text-xl leading-relaxed">
              Whether you're a casual fan or a dedicated enthusiast, ProSports provides the content and perspective you need to stay informed about your favorite sports and athletes.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                <p className="text-lg">We strive for excellence in every article, analysis, and piece of content we produce.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Community</h3>
                <p className="text-lg">We build a vibrant community of sports fans united by their passion for athletics.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Integrity</h3>
                <p className="text-lg">We maintain the highest standards of journalistic integrity and ethical reporting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Our Team</h2>
            <p className="text-xl leading-relaxed mb-8">
              ProSports is staffed by passionate sports journalists, analysts, and enthusiasts with decades of combined experience covering professional athletics. Our team includes former athletes, sports broadcasters, and dedicated writers who bring unique perspectives to sports coverage.
            </p>
            <p className="text-xl leading-relaxed">
              Each team member brings expertise in their specific sports and subject areas, allowing us to provide in-depth analysis and insider knowledge that you won't find elsewhere. We're committed to maintaining the highest standards of accuracy and journalistic integrity in everything we publish.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Why Choose ProSports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Coverage</h3>
                <p className="text-lg leading-relaxed">From major leagues to emerging athletes, we cover all aspects of professional sports worldwide.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Expert Analysis</h3>
                <p className="text-lg leading-relaxed">Our analysts break down games, trades, and trends with professional insight and perspective.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Breaking News</h3>
                <p className="text-lg leading-relaxed">Stay updated with real-time news and updates from your favorite sports and teams.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Engaging Stories</h3>
                <p className="text-lg leading-relaxed">Discover inspiring stories about athletes, teams, and the moments that define sports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl mb-8">Have feedback, story tips, or partnership inquiries?</p>
            <a href="/contact" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition">
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
