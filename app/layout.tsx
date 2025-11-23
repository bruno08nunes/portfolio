import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruno Nunes - Portfolio",
  description: "Portfolio do Bruno Nunes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="text-white flex flex-col bg-[#131315]">
        {children}
      </body>
    </html>
  );
}
