import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "./query-provider";

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "SafeDep Insights Frontend",
  description:
    "A Nextjs 16 Frontend Application for exploring open-source package insights using the SAFEDEP API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={satoshi.className}>{children}</body>
      </QueryProvider>
    </html>
  );
}
