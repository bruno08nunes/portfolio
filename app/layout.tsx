import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

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
        <html lang="pt-br" suppressHydrationWarning>
            <body className="text-(--text-color) flex flex-col bg-(--bg-color)" >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
