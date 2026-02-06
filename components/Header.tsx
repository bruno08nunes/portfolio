import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { getTranslations } from "next-intl/server";
import LanguageToggle from "./LanguageToggle";

export default async function Header() {
    const t = await getTranslations("Header");

    return (
        <>
            <header className="text-white bg-(--bg-header) p-4 flex flex-row text-2xl items-center gap-4 justify-between">
                <h1 className="md:basis-40">Bruno Nunes</h1>
                <nav className="justify-center md:flex gap-2 flex-1 hidden">
                    <Link
                        href="/"
                        className="border-b-2 border-(--link-underline-color) p-1 hover:px-4 transition-all duration-400"
                    >
                        {t("homeLinkText")}
                    </Link>
                    <Link
                        href="/projetos"
                        className="border-b-2 border-(--link-underline-color) p-1 hover:px-4 transition-all duration-400"
                    >
                        {t("projectsLinkText")}
                    </Link>
                    <Link
                        href="/sobre-mim"
                        className="border-b-2 border-(--link-underline-color) p-1 hover:px-4 transition-all duration-400"
                    >
                        {t("aboutMeLinkText")}
                    </Link>
                </nav>
                <div className="flex justify-end gap-4 md:basis-40">
                    <ThemeToggle />
                    <LanguageToggle />
                </div>
            </header>
            <nav className="justify-center flex gap-8 flex-1 fixed bottom-0 bg-(--bg-header) w-full text-[1.4rem] p-2 md:hidden border-t-3 border-(--link-underline-color) py-4 text-white">
                <Link
                    href="/"
                    className="border-b-2 border-(--link-underline-color) p-1 hover:px-4 transition-all duration-400"
                >
                    {t("homeLinkText")}
                </Link>
                <Link
                    href="/projetos"
                    className="border-b-2 border-(--link-underline-color) p-1 hover:px-4 transition-all duration-400"
                >
                    {t("projectsLinkText")}
                </Link>
                <Link
                    href="/sobre-mim"
                    className="border-b-2 border-(--link-underline-color) p-1 hover:px-4 transition-all duration-400"
                >
                    {t("aboutMeLinkText")}
                </Link>
            </nav>
        </>
    );
}