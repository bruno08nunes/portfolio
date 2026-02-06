import Image from "next/image";
import Link from "next/link";
import SkillsSection from "../../components/SkillsSection";
import Projects from "@/components/project/Projects";
import Header from "@/components/Header";
import profileImage from "@/public/purple-picture.jpeg";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";
import EducationList from "@/components/EducationList";

export default async function Home() {
    const t = await getTranslations("HomePage");

    return (
        <>
            <Header />
            <main className="min-w-[320px] w-full mx-auto flex flex-col md:text-xl text-lg md:py-8">
                <section className="md:grid grid-cols-[3fr_2fr] flex flex-col-reverse w-full items-center gap-10 min-h-[55svh] max-w-[1300px] mx-auto px-6 md:py-15 py-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="md:text-[1.8em] text-2xl text-balance font-bold">
                            {t.rich("headline", {
                                highlight: (chunks) => (
                                    <span className="bg-[#5E17EB] md:p-1 px-1 text-white">
                                        {chunks}
                                    </span>
                                ),
                            })}
                        </h2>
                        <p>
                            {t.rich("intro", {
                                name: () => (
                                    <span className="text-shadow-(--text-shadow) text-[1.1em] text-balance">
                                        &lt;Bruno Nunes&gt;
                                    </span>
                                ),
                                b: (chunks) => <b>{chunks}</b>,
                            })}
                        </p>
                    </div>
                    <Image
                        src={profileImage}
                        alt={t("imageAlt")}
                        className="max-w-full md:w-[70%] w-[200px] rounded-full object-cover"
                        loading="eager"
                        placeholder="blur"
                    />
                </section>
                <section className="max-w-[1300px] mx-auto w-full px-6">
                    <h2 className="text-[1.5em] text-balance font-bold mb-2">
                        {t("projectSectionTitle")}
                    </h2>
                    <Projects />
                    <Link
                        href="/projetos"
                        className="mx-auto mt-4 block w-max border-3 py-1 px-3 rounded-3xl text-xl hover:px-8 transition-all duration-400 border-current"
                    >
                        {t("projectSectionButton")}
                    </Link>
                </section>
                <SkillsSection />
                <section className="bg-[#5E17EB] w-full min-h-[50vh] flex justify-center p-8 text-white">
                    <div className="max-w-[1300px] text-xl flex gap-8 items-center">
                        <div className="flex flex-col gap-4 text-justify">
                            <h2 className="text-[1.5em] text-balance font-bold mb-2">
                                {t("aboutMeSectionTitle")}
                            </h2>
                            <p>{t("aboutMeFirstParagraph")}</p>
                            <p>{t("aboutMeSecondParagraph")}</p>
                            <Link
                                href="/sobre-mim"
                                className="mx-auto mt-4 block w-max border-3 py-1 px-4 rounded-3xl text-xl hover:px-10 transition-all duration-400 border-current"
                            >
                                {t("aboutMeButton")}
                            </Link>
                        </div>
                        <Image
                            src="https://avatars.githubusercontent.com/u/139359503?v=4"
                            alt=""
                            width={200}
                            height={200}
                            className="max-w-full lg:w-[20%] w-[30%] rounded-full object-cover hidden sm:block"
                        />
                    </div>
                </section>
                <section className="max-w-[1300px] mx-auto w-full px-6 py-8">
                    <h2 className="text-[1.5em] text-balance font-bold mb-2">
                        {t("educationSectionTitle")}
                    </h2>
                    <EducationList />
                </section>
            </main>
            <Footer />
        </>
    );
}
