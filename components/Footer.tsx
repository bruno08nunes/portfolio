import { getTranslations } from "next-intl/server";

export default async function Footer() {
    const t = await getTranslations("Footer");

    return (
        <footer className="text-white bg-(--bg-header) p-4 text-xl items-center px-6 md:pb-4 pb-23">
            <h2 className="text-[1.5em] text-balance font-bold mb-2">
                {t("contactsTitle")}
            </h2>
            <ul>
                <li>
                    Email:{" "}
                    <a
                        href="mailto:brunonunes.sl08@gmail.com"
                        target="_blank"
                        className="underline hover:no-underline"
                    >
                        brunonunes.sl08@gmail.com
                    </a>
                </li>
                <li>
                    Linkedin:{" "}
                    <a
                        href="https://www.linkedin.com/in/bruno08nunes/"
                        target="_blank"
                        className="underline hover:no-underline"
                    >
                        bruno08nunes
                    </a>
                </li>
                <li>
                    Github:{" "}
                    <a
                        href="https://github.com/bruno08nunes"
                        target="_blank"
                        className="underline hover:no-underline"
                    >
                        bruno08nunes
                    </a>
                </li>
                <li>
                    Itch.io:{" "}
                    <a
                        href="https://bruno08nunes.itch.io/"
                        target="_blank"
                        className="underline hover:no-underline"
                    >
                        bruno08nunes
                    </a>
                </li>
                <li>
                    {t("resume.label")}:{" "}
                    <a
                        href={t("resume.file")}
                        download={t("resume.download")}
                        className="underline hover:no-underline"
                    >
                        {t("resume.linkText")}
                    </a>
                </li>
            </ul>
        </footer>
    );
}
