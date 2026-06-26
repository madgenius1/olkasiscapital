import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Olkasis Capital — Africa's Wealth, Invested Wisely",
  description:
    "Olkasis Capital is a Kenya-based investment firm offering the Zanari retail investment app, ETFs, asset management, and wealth advisory services for Africa and the diaspora.",
  keywords: "Kenya investing, Africa ETFs, Zanari app, wealth management Kenya, diaspora investing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
