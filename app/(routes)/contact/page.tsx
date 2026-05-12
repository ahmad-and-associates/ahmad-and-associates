"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FormEvent, useRef, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const fullName = String(formData.get("fullName") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const company = String(formData.get("company") || "");
    const projectType = String(formData.get("projectType") || "");
    const message = String(formData.get("message") || "");

    const subject = "New inquiry from Ahmad & Associates website";
    const body = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company / Project: ${company}`,
      `Project Type: ${projectType}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailtoLink = `mailto:shaikh.ashhar6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const anchor = document.createElement("a");
    anchor.href = mailtoLink;
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setSubmitted(true);
    setIsLoading(false);

    setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset();
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1d4ed8] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Get In Touch"
              subtitle="Let's discuss your project needs and how we can help"
              centered
            />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-8">Contact Information</h3>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-[#1d4ed8] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0f172a] mb-1">Email</p>
                      <a
                        href="mailto:ahmadandassociates23@gmail.com"
                        className="text-slate-600 hover:text-[#1d4ed8] transition-colors break-all"
                      >
                        ahmadandassociates23@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-[#1d4ed8] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0f172a] mb-1">Location</p>
                      <p className="text-slate-600">Mumbai, India</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-[#1d4ed8] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0f172a] mb-1">Response Time</p>
                      <p className="text-slate-600">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="mt-12 p-6 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-700 mb-4">
                    <strong>Founder:</strong> Sharif Ahmad
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Experience:</strong> 25+ years in architecture liasoning and government approvals
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-slate-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Send Us a Message</h3>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      ✓ Thank you! We've received your message and will get back to you within 24 hours.
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                          Full Name *
                        </label>
                        <input
                          name="fullName"
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                          Email *
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                          Phone *
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                          Company / Project Name
                        </label>
                        <input
                          name="company"
                          type="text"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-colors"
                          placeholder="Your company or project"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-colors"
                      >
                        <option value="">Select a project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="redevelopment">Redevelopment</option>
                        <option value="mixed-use">Mixed-Use</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-colors resize-none"
                        placeholder="Tell us about your project and what approvals you need..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#1d4ed8] text-white font-semibold py-3 rounded-lg hover:bg-[#0f172a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </form>

                  <p className="text-xs text-slate-500 mt-4">
                    * Required fields. We respect your privacy and will only use your information to contact you about your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <h4 className="text-lg font-bold text-[#0f172a] mb-3">Free Consultation</h4>
                <p className="text-slate-600">
                  Every new inquiry gets a free initial consultation. We'll assess your needs and provide recommendations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <h4 className="text-lg font-bold text-[#0f172a] mb-3">Transparent Pricing</h4>
                <p className="text-slate-600">
                  We provide detailed, upfront quotes after understanding your project scope and requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <h4 className="text-lg font-bold text-[#0f172a] mb-3">No Hidden Charges</h4>
                <p className="text-slate-600">
                  What you see is what you get. All fees and costs are clearly communicated upfront.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
