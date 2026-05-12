import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ahmad & Associates</h3>
            <p className="text-slate-400 text-sm mb-4">
              25+ years of expertise in government approvals and architecture liasoning in Mumbai.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/ahmad-and-associates-co"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-[#c8a96b] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-[#c8a96b] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-[#c8a96b] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-[#c8a96b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-[#c8a96b] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-[#c8a96b] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-[#c8a96b] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-400">BMC Approvals</span>
              </li>
              <li>
                <span className="text-slate-400">Fire NOC</span>
              </li>
              <li>
                <span className="text-slate-400">OC/CC Approvals</span>
              </li>
              <li>
                <span className="text-slate-400">Compliance Consulting</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#c8a96b]" />
                <a href="mailto:ahmadandassociates23@gmail.com" className="text-slate-400 hover:text-[#c8a96b] transition-colors break-all">
                  ahmadandassociates23@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#c8a96b]" />
                <span className="text-slate-400">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} Ahmad and Associates. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <Link href="#" className="text-slate-400 hover:text-[#c8a96b] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-[#c8a96b] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
