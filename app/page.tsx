import Image from "next/image";
import Link from "next/link";
import SkillsSection from "../components/SkillsSection";
import Projects from "@/components/project/Projects";
import Header from "@/components/Header";
import { projects } from "@/data/projects";
import profileImage from "@/public/purple-picture.jpeg";
import Footer from "@/components/Footer";

const education = [
    {
        course: "Ensino Técnico em Informática para Web",
        institution: "Senac RS",
        period: "Fev 2023 - Dez 2025",
        additionalInfo: "Formação técnica integrada ao Ensino Médio",
        description: [
            "Curso com foco no desenvolvimento de aplicações web e na construção de uma base sólida em programação e tecnologia.",
            "Aborda o desenvolvimento de sites e aplicações web utilizando HTML, CSS e JavaScript, incluindo conceitos de design responsivo, boas práticas de estruturação e acessibilidade.",
            "Inclui lógica de programação, desenvolvimento backend com Node.js e Express, modelagem e uso de bancos de dados relacionais (MySQL), além de versionamento de código com Git e GitHub.",
        ],
    },
    {
        course: "Tecnólogo em Jogos Digitais",
        institution: "Unisinos — Campus São Leopoldo",
        period: "2026 - 2029",
        additionalInfo: "Curso superior tecnólogo na área de jogos digitais",
        description: [
            "Formação voltada ao desenvolvimento de jogos digitais, abrangendo tanto aspectos técnicos quanto criativos da área.",
            "Inclui fundamentos de programação para jogos, desenvolvimento de jogos 2D e 3D, uso de motores de jogo, além de conceitos de matemática, física e inteligência artificial aplicados a jogos.",
            "Aborda também game design, narrativa, experiência do usuário, produção de assets, trabalho em equipe multidisciplinar e práticas do mercado de jogos digitais.",
        ],
    },
];

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
                            <b>Game Developer</b> em formação pela Unisinos. Trabalho com foco
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
                                formação. Sou apaixonado por transformar simples
                                ideias em experiências digitais, desde
                                aplicações web até mundos jogáveis.
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
                <section className="max-w-[1300px] mx-auto w-full px-6 py-8">
                    <h2 className="text-[1.5em] text-balance font-bold mb-2">
                        Formação
                    </h2>
                    <dl className="flex flex-col gap-6">
                    {
                        education.map((course, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <dt className="flex gap-4">
                                    <span className="font-bold">{course.course}</span>
                                    <span className="italic">{course.institution} - {course.period}</span>
                                </dt>
                                <dd className="flex flex-col gap-1 pl-7">
                                    {course.description.map((description, i) => (
                                        <p key={i}>{description}</p>
                                    ))}
                                </dd>
                            </div>
                        ))
                    }
                    </dl>
                </section>
            </main>
            <Footer />
        </>
    );
}
