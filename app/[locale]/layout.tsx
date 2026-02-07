import { Providers } from "../providers";
import { NextIntlClientProvider } from "next-intl";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <NextIntlClientProvider>
            <Providers>{children}</Providers>
        </NextIntlClientProvider>
    );
}
