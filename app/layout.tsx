import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wiz",
  description: "Not a clue on what this is",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
