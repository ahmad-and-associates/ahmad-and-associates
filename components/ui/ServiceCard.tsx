import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 text-[#1d4ed8]">{icon}</div>
      <h3 className="text-2xl font-bold text-[#0f172a] mb-3">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      
      <div className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-[#1d4ed8] rounded-full mt-2 flex-shrink-0" />
            <p className="text-slate-700 text-sm">{feature}</p>
          </div>
        ))}
      </div>

      <a
        href="/contact"
        className="text-[#1d4ed8] font-semibold hover:text-[#0f172a] inline-flex items-center gap-2 transition-colors"
      >
        Learn More →
      </a>
    </div>
  );
}
