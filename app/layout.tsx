import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tradeo - Learn to Invest with Confidence",
  description: "Gamified investment learning platform for Southeast Asian youth. Master the stock market through interactive lessons, real-time simulations, and AI guidance.",
  keywords: ["investment", "stock market", "learning", "trading", "Southeast Asia", "financial literacy"],
  openGraph: {
    title: "Tradeo - Learn to Invest with Confidence",
    description: "Master the stock market through interactive lessons and real-time simulations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F5F5F5] text-[#212121]">{children}</body>
    </html>
  );
}
