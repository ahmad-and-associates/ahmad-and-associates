"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1d4ed8] to-[#0f172a] text-white flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block bg-[#c8a96b]/20 text-[#c8a96b] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ 25+ Years of Excellence
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight">
            Mumbai's Trusted BMC Approval & Government Liasoning Experts
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-200 max-w-2xl">
            Fast, compliant, hassle-free approvals for your architecture, construction, and redevelopment projects.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button href="/contact">
              Get Your Free Consultation
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" href="/services">
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-12 border-t border-slate-400/30">
            <div>
              <p className="text-4xl font-bold text-[#c8a96b]">25+</p>
              <p className="text-slate-300">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#c8a96b]">1000+</p>
              <p className="text-slate-300">Projects Done</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#c8a96b]">100%</p>
              <p className="text-slate-300">Satisfaction Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
