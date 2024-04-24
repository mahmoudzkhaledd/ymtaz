import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "@/styles/globals.css";

const almarai = Almarai({ subsets: ['arabic'], weight: "400" });

export const metadata: Metadata = {
  title: "Ymtaz",
  description: "Ymtaz Website Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={almarai.className}>{children}</body>
    </html>
  );
}
