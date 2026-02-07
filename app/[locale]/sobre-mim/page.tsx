import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ideaImage from "@/public/idea.png";
import programingImage from "@/public/programming.png";
import programingImage2 from "@/public/programming2.png";
import pcImage from "@/public/pc.png";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

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
        title: t("aboutMe.title"),
        description: t("aboutMe.description"),
        openGraph: {
            title: t("aboutMe.ogTitle"),
            description: t("aboutMe.ogDescription"),
            type: "website",
        },
        twitter: {
            title: t("aboutMe.ogTitle"),
            description: t("aboutMe.ogDescription"),
        }
    };
}

export default async function AboutMePage() {
    const t = await getTranslations("AboutMe");
    const webSkilsInfo = t.raw("skills.web.info") as string[];
    const gameSkilsInfo = t.raw("skills.games.info") as string[];

    return (
        <>
            <Header />
            <main className="min-w-[320px] w-full mx-auto flex flex-col md:text-[20px] text-lg md:py-8">
                <section className="md:grid grid-cols-[3fr_2fr] flex flex-col-reverse w-full items-center md:gap-10 gap-4 min-h-[55svh] max-w-[1300px] mx-auto px-6 md:py-15 py-4">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[1.8em] text-balance font-bold">
                            {t("hero.title")}
                        </h2>
                        <p>
                            {t.rich("hero.description", {
                                name: () => (
                                    <span className="text-shadow-(--text-shadow) text-[1.1em] text-balance">
                                        &lt;Bruno Nunes&gt;
                                    </span>
                                ),
                                strong: (chunks) => <b>{chunks}</b>,
                            })}
                        </p>
                    </div>
                    <Image
                        src="https://avatars.githubusercontent.com/u/139359503?v=4"
                        alt=""
                        width={400}
                        height={400}
                        className="max-w-full md:w-[70%] w-[200px] rounded-full object-cover"
                        loading="eager"
                    />
                </section>
                <section className="lg:grid grid-cols-[1fr_2fr] flex flex-col w-full items-center md:gap-10 min-h-[55svh] max-w-[1300px] mx-auto px-6 md:py-15 py-2">
                    <Image
                        src={programingImage}
                        alt=""
                        className="max-w-full lg:full w-[300px] md:max-lg:hidden rounded-full object-cover"
                        placeholder="blur"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[1.8em] text-balance font-bold">
                            {t("journey.title")}
                        </h2>
                        <p>
                            {t.rich("journey.paragraph1", {
                                link: (chunks) => (
                                    <a
                                        href="https://www.youtube.com/watch?v=Sd56qiZq2-g"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline underline-offset-3 hover:decoration-[#5E17EB]"
                                    >
                                        {chunks}
                                    </a>
                                ),
                            })}
                        </p>
                        <p>{t("journey.paragraph2")}</p>
                        <p>{t("journey.paragraph3")}</p>
                    </div>
                </section>
                <section className="md:grid grid-cols-[3fr_2fr] flex flex-col-reverse w-full items-center md:gap-10 gap-4 min-h-[55svh] max-w-[1300px] mx-auto px-6 md:py-15 py-4">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[1.8em] text-balance font-bold">
                            {t("motivation.title")}
                        </h2>
                        <p>{t("motivation.paragraph1")}</p>
                        <p>{t("motivation.paragraph2")}</p>
                    </div>
                    <Image
                        src={programingImage2}
                        alt=""
                        className="max-w-full md:w-[70%] w-[300px] object-cover"
                        placeholder="blur"
                    />
                </section>
                <section className="bg-[#5E17EB] w-full min-h-[50vh] flex justify-center p-8 text-white">
                    <div className="max-w-[1300px] flex gap-8 items-center">
                        <div className="flex flex-col gap-4 text-justify">
                            <h2 className="text-[1.5em] text-balance font-bold mb-2">
                                {t("goals.title")}
                            </h2>
                            <p>{t("goals.paragraph1")}</p>
                            <p>{t("goals.paragraph2")}</p>
                            <p>{t("goals.paragraph3")}</p>
                        </div>
                        <Image
                            src={ideaImage}
                            alt=""
                            width={200}
                            height={200}
                            className="max-w-full w-[60%] rounded-full object-cover hidden sm:block"
                        />
                    </div>
                </section>
                <section className="grid md:grid-cols-[3fr_2fr] w-full items-center gap-2 min-h-[55svh] max-w-[1300px] mx-auto px-6 py-15">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[1.8em] text-balance font-bold">
                            {t("skills.title")}
                        </h2>
                        <ul className="flex gap-7 sm:flex-row flex-col">
                            <li className="flex-1">
                                <strong>{t("skills.web.title")}</strong>
                                <ul className="ml-5 list-disc">
                                    {webSkilsInfo.map((_, index) => (
                                        <li key={index}>
                                            {t.rich(
                                                `skills.web.info.${index}`,
                                                {
                                                    b: (chunks) => (
                                                        <b>{chunks}</b>
                                                    ),
                                                },
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="flex-1">
                                <strong>{t("skills.games.title")}</strong>
                                <ul className="ml-5 list-disc">
                                    {gameSkilsInfo.map((_, index) => (
                                        <li key={index}>
                                            {t.rich(
                                                `skills.games.info.${index}`,
                                                {
                                                    b: (chunks) => (
                                                        <b>{chunks}</b>
                                                    ),
                                                },
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Image
                        src={pcImage}
                        alt=""
                        className="max-w-full w-[70%] rounded-full object-cover hidden md:block"
                        placeholder="blur"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
