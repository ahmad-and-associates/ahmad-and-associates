"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { whyChooseUs } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Why Choose Ahmad & Associates?"
            subtitle="Partner with Mumbai's most trusted architecture liasoning consultancy"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyChooseUs.map((reason, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex gap-4 p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <CheckCircle2 className="w-8 h-8 text-[#1d4ed8] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
