import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1d4ed8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Your Approvals?</h2>
        <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
          Let Ahmad & Associates handle your government approvals and compliance needs. Get your free consultation today.
        </p>
        <Button
          href="/contact"
          variant="secondary"
        >
          Start Your Journey
          <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
}
