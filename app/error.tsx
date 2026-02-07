"use client";

import { useTranslations } from "next-intl";

export default function Error({
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const t = useTranslations("Error");

    return (
        <>
            <main className="flex-1 flex flex-col justify-center items-center pb-23 gap-4">
                <h2 className="text-2xl">{t("title")}</h2>
                <p className="text-lg">{t("text")}</p>
                <button
                    onClick={() => reset()}
                >
                    {t("button")}
                </button>
            </main>
        </>
    );
}
