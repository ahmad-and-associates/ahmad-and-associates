import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1d4ed8] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Services"
              subtitle="End-to-end solutions for all your government approval and compliance needs"
              centered
            />
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  icon={<span className="text-5xl">{service.icon}</span>}
                  title={service.title}
                  description={service.fullDescription}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How We Deliver Excellence"
              subtitle="Our approach to every project"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">✓ Comprehensive Analysis</h3>
                <p className="text-slate-700 mb-4">
                  We thoroughly analyze your project requirements and identify all necessary approvals, compliance requirements, and potential challenges before they arise.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">✓ Expert Documentation</h3>
                <p className="text-slate-700 mb-4">
                  Our team prepares all required documents with precision, ensuring complete accuracy and compliance with current regulations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">✓ Active Coordination</h3>
                <p className="text-slate-700 mb-4">
                  We maintain regular contact with authorities, schedule inspections, and address any concerns proactively to keep projects moving forward.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">✓ Timely Delivery</h3>
                <p className="text-slate-700 mb-4">
                  Our established relationships and streamlined processes ensure approvals are obtained faster than industry standard timelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Each Service Matters */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Why Each Service Matters"
              subtitle="Understanding the importance of proper approvals"
            />

            <div className="mt-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-[#1d4ed8] mb-4">Without Proper Approvals:</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li>❌ Project delays and cost overruns</li>
                    <li>❌ Legal compliance issues</li>
                    <li>❌ Difficulty obtaining occupancy certificates</li>
                    <li>❌ Potential fines and penalties</li>
                    <li>❌ Property sale/transfer complications</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#1d4ed8] mb-4">With Ahmad & Associates:</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li>✅ Faster approvals and clearances</li>
                    <li>✅ Complete legal compliance</li>
                    <li>✅ Smooth occupancy processes</li>
                    <li>✅ Reduced risk and liability</li>
                    <li>✅ Peace of mind throughout project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1d4ed8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Contact us today for a free consultation and let's discuss how we can help with your approvals.
            </p>
            <Button href="/contact" variant="secondary">
              Get Free Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
