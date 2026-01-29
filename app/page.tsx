import Image from "next/image";
import Link from "next/link";
import SkillsSection from "../components/SkillsSection";
import Projects from "@/components/project/Projects";
import Header from "@/components/Header";
import { projects } from "@/data/projects";
import profileImage from "@/public/purple-picture.jpeg"

export default function Home() {
    return (
        <>
            <Header />
            <main className="min-w-[320px] w-full mx-auto flex flex-col text-xl py-8">
                <section className="grid grid-cols-[3fr_2fr] w-full items-center gap-10 min-h-[55svh] max-w-[1300px] mx-auto px-6 py-15">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[1.8em] text-balance font-bold">
                            Transformando ideias e construindo experiências
                            através da{" "}
                            <span className="bg-[#5E17EB] p-1">
                                lógica e da imaginação!
                            </span>
                        </h2>
                        <p>
                            Olá! Eu sou{" "}
                            <span className="text-shadow-[3px_3px_#5E17EB] text-[1.1em] text-balance">
                                &lt;Bruno Nunes&gt;
                            </span>
                            , um desenvolvedor <b>Full-Stack</b> em início de
                            carreira com formação técnica pelo SENAC e{" "}
                            <b>Game Developer</b> em formação. Trabalho com foco
                            em <b>TypeScript</b>, <b>Next.js</b>, <b>Express</b>{" "}
                            para o desenvolvimento Web, além de <b>Unity</b>{" "}
                            para a criação de jogos. Meu objetivo é transformar
                            suas ideias em código!
                        </p>
                    </div>
                    <Image
                        src={profileImage}
                        alt="Ilustração estilizada representando o autor do portfólio, com óculos e barba rala, em estilo cartoon, sobre fundo roxo."
                        className="max-w-full w-[70%] rounded-full object-cover"
                        loading="eager"
                        placeholder="blur"
                    />
                </section>
                <section className="max-w-[1300px] mx-auto w-full px-6">
                    <h2 className="text-[1.5em] text-balance font-bold mb-2">
                        Projetos
                    </h2>
                    <Projects projects={projects} />
                    <Link
                        href="/projetos"
                        className="mx-auto mt-4 block w-max border-2 py-1 px-3 rounded-3xl text-xl hover:px-8 transition-all shadow-[0px_3px_10px_#5E17EB] hover:shadow-[0px_8px_17px_#5E17EB] duration-400"
                    >
                        Ver Todos Os Projetos
                    </Link>
                </section>
                <SkillsSection />
                <section className="bg-[#5E17EB] w-full min-h-[50vh] flex justify-center p-8">
                    <div className="max-w-[1300px] text-xl flex gap-8 items-center">
                        <div className="flex flex-col gap-4 text-justify">
                            <h2 className="text-[1.5em] text-balance font-bold mb-2">
                                Sobre Mim
                            </h2>
                            <p>
                                Eu sou Bruno Nunes, um desenvolvedor full-stack
                                em início de carreira e game developer em
                                formação. Sou apaixonado por transformar simples ideias em
                                experiências digitais, desde aplicações web até
                                mundos jogáveis.
                            </p>
                            <p>
                                Atualmente, meu foco maior está em TypeScript,
                                Next.js, Express e Unity, tecnologias que me
                                permitem criar projetos reais e impactantes.
                                Esse foco começou durante minha formação técnica
                                no SENAC, onde aprendi conceitos essenciais de
                                frontend, backend e banco de dados. Além de ter
                                aprofundado meus conhecimentos por conta
                                própria.
                            </p>
                            <Link
                                href="/sobre-mim"
                                className="mx-auto mt-4 block w-max border-2 py-1 px-4 rounded-3xl text-xl hover:px-10 transition-all shadow-[0px_3px_10px_#5E17EB] hover:shadow-[0px_8px_17px_#5E17EB] duration-400"
                            >
                                Veja mais
                            </Link>
                        </div>
                        <Image
                            src="https://avatars.githubusercontent.com/u/139359503?v=4"
                            alt=""
                            width={200}
                            height={200}
                            className="max-w-full w-[20%] rounded-full object-cover"
                        />
                    </div>
                </section>
            </main>
            <footer className="text-white bg-[#1a1a1a] p-4 grid grid-cols-3 text-xl items-center px-6">
                <div className="mx-auto">
                    <h2 className="text-[1.5em] text-balance font-bold mb-2">
                        Contato
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
                    </ul>
                </div>
            </footer>
        </>
    );
}
