import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad and Associates - BMC Approvals & Government Liaising | Mumbai",
  description: "Mumbai's trusted BMC approval and government liaising experts. 25+ years of expertise in architecture approvals, fire clearances, and compliance.",
  keywords: "BMC approval, architecture liaising, government approvals, fire NOC, OC CC approvals, Mumbai",
  authors: [{ name: "Ahmad and Associates" }],
  openGraph: {
    title: "Ahmad and Associates - Architecture Liaising Experts",
    description: "Fast, compliant, hassle-free approvals for 25+ years",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
