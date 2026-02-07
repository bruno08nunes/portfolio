"use client";

import "./globals.css";

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html suppressHydrationWarning>
            <body className="text-(--text-color) flex flex-col bg-(--bg-color) min-h-svh p-7 items-center gap-4 justify-center">
                <h2 className="text-2xl">Something went wrong!</h2>
                <button onClick={() => reset()} className="border border-current w-max px-2 py-1">Try again</button>
            </body>
        </html>
    );
}
