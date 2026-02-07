import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
    const t = await getTranslations("NotFound");

    return (
        <>
            <main className="flex-1 flex flex-col justify-center items-center pb-23 gap-4">
                <h2 className="text-2xl">{t("title")}</h2>
                <p className="text-lg">{t("text")}</p>
                <Link href={"/"} className="px-2 py-1 border border-current rounded-md">{t("button")}</Link>
            </main>
        </>
    );
}
