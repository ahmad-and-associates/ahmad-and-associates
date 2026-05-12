"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Our Process"
            subtitle="A streamlined approach to getting your approvals quickly and efficiently"
          />
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative">
                  {/* Step Circle */}
                  <div className="bg-gradient-to-br from-[#1d4ed8] to-[#0f172a] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                    {step.step}
                  </div>

                  {/* Connection Line */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-4 h-0.5 bg-gradient-to-r from-[#1d4ed8] to-transparent -translate-x-4" />
                  )}

                  {/* Content */}
                  <h3 className="text-center font-bold text-[#0f172a] mb-2">{step.title}</h3>
                  <p className="text-center text-slate-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
