import type { Metadata } from "next";
import "@/app/globals.css";                 // <-- use alias import
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "CodeQube — Product & Engineering Consultancy",
  description:
    "CodeQube helps teams design, build, and ship software faster. We deliver full-stack product engineering, cloud, and DevOps consulting.",
  themeColor: "#0ea5e9",
  openGraph: {
    title: "CodeQube — Product & Engineering Consultancy",
    description:
      "We design, build, and scale web apps, APIs, and cloud infrastructure for startups and enterprises.",
    type: "website",
    url: "https://codeqube.io/",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
