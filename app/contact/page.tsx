'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { FAQSchema } from '@/components/schema-markup';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    {
      question: 'How quickly will I get a response?',
      answer: 'We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.',
    },
    {
      question: 'How can I submit a story tip?',
      answer: 'You can submit story tips through this contact form by selecting "Story Tip" as the subject, or email us directly at contact@sportsoffer.shop.',
    },
    {
      question: 'Do you accept advertising?',
      answer: 'Yes! We work with brands to create sponsored content opportunities. Contact us for details about advertising options.',
    },
    {
      question: 'Can I apply for a job at ProSports?',
      answer: 'We\'re always looking for talented writers, editors, and producers. Email your resume to contact@sportsoffer.shop.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <FAQSchema faqs={faqs} />
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have a story tip, partnership inquiry, or just want to say hello? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Info Card 1 */}
              <div className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Send us an email and we&apos;ll respond within 24 business hours.</p>
                <a href="mailto:contact@sportsoffer.shop" className="text-primary font-semibold hover:text-primary/80 transition">
                  contact@sportsoffer.shop
                </a>
              </div>

              {/* Contact Info Card 2 */}
              <div className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Story Tips &amp; Feedback</h3>
                <p className="text-muted-foreground mb-4">Have a tip, correction, or feedback on our coverage? We&apos;d love to hear it.</p>
                <a href="mailto:contact@sportsoffer.shop" className="text-accent font-semibold hover:text-accent/80 transition">
                  contact@sportsoffer.shop
                </a>
              </div>

              {/* Contact Info Card 3 */}
              <div className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advertising &amp; Partnerships</h3>
                <p className="text-muted-foreground mb-4">For advertising, sponsorship, or partnership inquiries, get in touch.</p>
                <a href="mailto:contact@sportsoffer.shop" className="text-primary font-semibold hover:text-primary/80 transition">
                  contact@sportsoffer.shop
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card text-foreground rounded border border-border focus:outline-none focus:border-primary transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card text-foreground rounded border border-border focus:outline-none focus:border-primary transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card text-foreground rounded border border-border focus:outline-none focus:border-primary transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="story-tip">Story Tip</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="advertising">Advertising</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-card text-foreground rounded border border-border focus:outline-none focus:border-primary transition resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded font-bold hover:bg-primary/90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      How quickly will I get a response?
                    </h3>
                    <p className="text-muted-foreground">
                      We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      How can I submit a story tip?
                    </h3>
                    <p className="text-muted-foreground">
                      You can submit story tips through this contact form by selecting &quot;Story Tip&quot; as the subject, or email us directly at contact@sportsoffer.shop.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Do you accept advertising?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes! We work with brands to create sponsored content opportunities. Contact us for details about advertising options.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Can I apply for a job at ProSports?
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;re always looking for talented writers, editors, and producers. Email your resume to contact@sportsoffer.shop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
