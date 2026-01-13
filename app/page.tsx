import Image from "next/image";
import Link from "next/link";
import SkillsSection from "./components/SkillsSection";

const projects = [
    {
        name: "Minerva",
        description:
            "Aplicação para ensino de lógica e programação de maneira gamificada, com um sistema de lições, progresso de usuário e desafios interativos.",
        tools: ["TypeScript", "Next.js", "Tailwind", "Prisma", "Express"],
    },
    {
        name: "Loja-Loja",
        description:
            "Loja virtual com catálogo de produtos e autenticação salvos no banco de dados e  um carrinho de compras salvo no computador do usuário.",
        tools: ["HTML/CSS", "JavaScript", "MySQL", "Express"],
    },
    {
        name: "Pokemon",
        description:
            "Jogo no qual o usuário precisa adivinhar qual Pokémon é pela sua silhueta.",
        tools: ["HTML/CSS", "JavaScript", "Poke API"],
    },
];

export default function Home() {
    return (
        <>
            <header className="text-white bg-[#1a1a1a] p-4 grid grid-cols-3 text-2xl items-center">
                <h1>Bruno Nunes</h1>
                <nav className="justify-center flex gap-2">
                    <Link href="/" className="border-b-2 border-[#5E17EB] p-1 hover:px-4 transition-all duration-400">
                        Home
                    </Link>
                    <Link
                        href="/projetos"
                        className="border-b-2 border-[#5E17EB] p-1 hover:px-4 transition-all duration-400"
                    >
                        Projetos
                    </Link>
                    <Link
                        href="/sobre-mim"
                        className="border-b-2 border-[#5E17EB] p-1 hover:px-4 transition-all duration-400"
                    >
                        Sobre Mim
                    </Link>
                </nav>
                <div className="flex justify-end gap-4">
                    <button className="cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-moon-icon lucide-moon"
                        >
                            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                        </svg>
                    </button>
                </div>
            </header>
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
                        src="https://avatars.githubusercontent.com/u/139359503?v=4"
                        alt=""
                        width={500}
                        height={500}
                        className="max-w-full w-[70%] rounded-full object-cover"
                    />
                </section>
                <section className="max-w-[1300px] mx-auto w-full px-6">
                    <h2 className="text-[1.5em] text-balance font-bold mb-2">
                        Projetos
                    </h2>
                    <div className="flex justify-center flex-wrap gap-12">
                        {projects.map((project, i) => (
                            <div
                                className="flex-1 max-w-[400px] border-[#5E17EB] rounded-md border-4 overflow-hidden hover:scale-105 hover:translate-y-[-19px] transition-all duration-400 cursor-pointer basis-[280px]"
                                key={i}
                            >
                                <Image
                                    src={`/${project.name.toLowerCase()}.png`}
                                    alt=""
                                    width={800}
                                    height={800}
                                    className="w-full object-cover aspect-video"
                                />
                                <div className="p-3 flex flex-col gap-2 text-justify">
                                    <h3 className="text-shadow-[3px_3px_#5E17EB] text-[1.3em]">
                                        {project.name}
                                    </h3>
                                    <p className="text-[0.9em]"> {project.description}</p>
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        {project.tools.map((tool, i) => (
                                            <span
                                                className="py-1 px-4 rounded-4xl border border-white text-[0.9em]"
                                                key={i}
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
