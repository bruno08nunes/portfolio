import type { Metadata } from "next";
import "./globals.css";
import { getTranslations } from "next-intl/server";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "Metadata",
    });

    return {
        title: t("home.title"),
        description: t("home.description"),
        openGraph: {
            title: t("home.ogTitle"),
            description: t("home.ogDescription"),
            type: "website",
        },
        twitter: {
            title: t("home.ogTitle"),
            description: t("home.ogDescription"),
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning>
            <body className="text-(--text-color) flex flex-col bg-(--bg-color) min-h-svh">
                {children}
            </body>
        </html>
    );
}
