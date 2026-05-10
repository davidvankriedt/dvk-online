import type { Metadata } from "next";
import { bitcount } from '@/app/ui/fonts';
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "David Van Kriedt",
  description: "Artist page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${bitcount.className} antialised`}>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
