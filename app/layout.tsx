import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Physio Clinic | Physiotherapy Clinic in Erode",
  description:
    "Physiotherapy clinic in Erode offering rehabilitation, back pain care, knee pain treatment, post-surgical rehabilitation, and movement-focused recovery support.",
  keywords: [
    "Physiotherapy clinic in Erode",
    "Physiotherapist in Erode",
    "Physiotherapy treatment Erode",
    "Physiotherapy rehabilitation Erode",
    "Back pain physiotherapy Erode",
    "Knee pain physiotherapy Erode",
    "Post-surgical rehabilitation Erode",
  ],
  openGraph: {
    title: "Vivek Physio Clinic",
    description:
      "Physiotherapy clinic in Erode focused on mobility, pain relief, and recovery.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
