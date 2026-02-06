import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "../providers";
import { NextIntlClientProvider } from "next-intl";

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
        <html suppressHydrationWarning>
            <body className="text-(--text-color) flex flex-col bg-(--bg-color)">
                <NextIntlClientProvider>
                    <Providers>{children}</Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
