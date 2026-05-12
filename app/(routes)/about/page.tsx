import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { companyInfo } from "@/lib/data";
import Button from "@/components/ui/Button";
import { Award, Users, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1d4ed8] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="About Ahmad & Associates"
              subtitle="25+ Years of Excellence in Government Approvals"
              centered
            />
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#0f172a] mb-6">Who We Are</h2>
                <p className="text-lg text-slate-700 mb-4">
                  Ahmad and Associates is Mumbai's most trusted architecture liasoning and government approvals consultancy, founded by Sharif Ahmad.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  With over 25 years of dedicated expertise, we have successfully guided 1000+ projects through complex municipal approval processes, from initial applications to final certifications.
                </p>
                <p className="text-lg text-slate-700 mb-6">
                  Our deep relationships with BMC officials, fire department authorities, and other regulatory bodies ensure your projects receive the fastest, most efficient approvals possible.
                </p>
                <Button href="/contact">Start Your Project</Button>
              </div>
              <div className="bg-slate-100 rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-5xl font-bold text-[#1d4ed8]">25+</p>
                    <p className="text-slate-600 font-semibold mt-2">Years In Business</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-[#1d4ed8]">1000+</p>
                    <p className="text-slate-600 font-semibold mt-2">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-[#1d4ed8]">95%</p>
                    <p className="text-slate-600 font-semibold mt-2">On-Time Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-[#1d4ed8] to-[#0f172a] rounded-xl h-80 flex items-center justify-center text-6xl text-white">
                SA
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Founder: Sharif Ahmad</h2>
                <p className="text-lg text-slate-700 mb-4">
                  Sharif Ahmad is the visionary founder of Ahmad and Associates, bringing 25+ years of hands-on expertise in architecture liasoning and government approvals.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  His deep understanding of Mumbai's municipal systems, coupled with strong relationships built over decades, has made Ahmad and Associates the go-to consultancy for complex approval processes.
                </p>
                <p className="text-lg text-slate-700">
                  Under his leadership, the firm has evolved from a solo practice to a trusted consultancy serving builders, developers, architects, and real-estate firms across Mumbai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Strengths */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Core Strengths"
              subtitle="What makes us Mumbai's most trusted consultancy"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="p-8 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                <Award className="w-16 h-16 text-[#1d4ed8] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Deep Expertise</h3>
                <p className="text-slate-600">
                  Comprehensive knowledge of all government approval processes, municipal regulations, and compliance requirements.
                </p>
              </div>

              <div className="p-8 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                <Users className="w-16 h-16 text-[#1d4ed8] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Strong Relationships</h3>
                <p className="text-slate-600">
                  Built over 25 years with BMC officials, fire department, and regulatory authorities ensures smooth processing.
                </p>
              </div>

              <div className="p-8 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                <TrendingUp className="w-16 h-16 text-[#1d4ed8] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Proven Track Record</h3>
                <p className="text-slate-600">
                  1000+ successfully completed projects with 95% on-time delivery and 100% client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1d4ed8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Partner With Mumbai's Leading Consultancy</h2>
            <p className="text-xl text-slate-200 mb-8">
              Let us handle your government approvals while you focus on building exceptional projects.
            </p>
            <Button href="/contact" variant="secondary">
              Get Your Free Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
