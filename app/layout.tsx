import type { Metadata } from "next";
import "./global.css";
import Navbar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Judy | Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
