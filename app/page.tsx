import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header className="text-white bg-[#1a1a1a] p-4 grid grid-cols-3 text-2xl items-center">
                <h1>Bruno Nunes</h1>
                <nav className="justify-center flex gap-2">
                    <a href="#" className="border-b-2 border-[#5E17EB] p-1">
                        Teste
                    </a>
                    <a href="#" className="border-b-2 border-[#5E17EB] p-1">
                        Teste
                    </a>
                    <a href="#" className="border-b-2 border-[#5E17EB] p-1">
                        Teste
                    </a>
                </nav>
                <div className="flex justify-end gap-4">
                    <span>M</span>
                    <span>BR</span>
                </div>
            </header>
            <main className="min-w-[320px] w-full mx-auto flex flex-col text-xl py-8">
                <section className="grid grid-cols-[3fr_2fr] w-full items-center gap-10 min-h-[55svh] max-w-[1300px] mx-auto">
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
                        width={200}
                        height={200}
                        className="max-w-full w-[70%] rounded-full object-cover"
                    />
                </section>
                <section className="max-w-[1300px] mx-auto w-full">
                    <h2 className="text-[1.5em] text-balance font-bold mb-2">
                        Projetos
                    </h2>
                    <div className="flex justify-center flex-wrap gap-12">
                        {[0, 0, 0].map((_, i) => (
                            <div
                                className="flex-1 max-w-[400px] border-[#5E17EB] rounded-md border-4 overflow-hidden hover:translate-y-[-19px] transition-all cursor-pointer basis-[280px]"
                                key={i}
                            >
                                <Image
                                    src="https://avatars.githubusercontent.com/u/139359503?v=4"
                                    alt=""
                                    width={200}
                                    height={200}
                                    className="w-full object-cover aspect-video"
                                />
                                <div className="p-3 flex flex-col gap-2 text-justify">
                                    <h3 className="text-shadow-[3px_3px_#5E17EB] text-[1.3em]">
                                        Minerva
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Illum ducimus aliquam
                                        iusto maxime non, soluta tenetur fugiat
                                        repellat eligendi. Molestiae quasi
                                        tempore commodi fugiat ex rem
                                        necessitatibus sequi hic nisi!
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <span className="py-1 px-4 rounded-4xl border border-white">
                                            HTML
                                        </span>
                                        <span className="py-1 px-4 rounded-4xl border border-white">
                                            CSS
                                        </span>
                                        <span className="py-1 px-4 rounded-4xl border border-white">
                                            JavaScript
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/projetos"
                        className="mx-auto mt-4 block w-max border-2 py-1 px-3 rounded-3xl text-2xl hover:scale-110 transition-all shadow-[0px_3px_10px_#5E17EB] hover:shadow-[0px_8px_17px_#5E17EB]"
                    >
                        Ver Todos Os Projetos
                    </Link>
                </section>
                <section className="max-w-[1300px] mx-auto w-full">
                    <h2 className="text-[1.5em] text-balance font-bold mb-2">
                        Habilidades
                    </h2>
                    <div className="flex gap-4 text-[1.2em]">
                        <button className="cursor-pointer hover:border-b-3 border-[#5E17EB] border-b-3">
                            Frontend
                        </button>
                        <button className="cursor-pointer hover:border-b-3 border-[#5E17EB]">
                            Backend
                        </button>
                        <button className="cursor-pointer hover:border-b-3 border-[#5E17EB]">
                            Game Dev
                        </button>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] py-3 gap-4">
                        <span className="border-[#5E17EB] border-2 text-[1.1em] py-1 px-3 text-center">
                            HTML
                        </span>
                        <span className="border-[#5E17EB] border-2 text-[1.1em] py-1 px-3 text-center">
                            HTML
                        </span>
                        <span className="border-[#5E17EB] border-2 text-[1.1em] py-1 px-3 text-center">
                            HTML
                        </span>
                    </div>
                </section>
                <section className="bg-[#5E17EB] w-full min-h-[50vh] flex justify-center p-8">
                    <div className="max-w-[1300px] text-2xl flex gap-8 items-center">
                        <div className="flex flex-col gap-4 text-justify">
                            <h2 className="text-[1.5em] text-balance font-bold mb-2">
                                Sobre Mim
                            </h2>
                            <p>
                                Eu sou Bruno Nunes, um desenvolvedor full-stack
                                em início de carreira e game developer em
                                formação. Atualmente tenho $
                                {new Date().getFullYear() - 2008} anos de idade.
                                Sou apaixonado por transformar simples ideias em
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
                                className="mx-auto mt-4 block w-max border-2 py-1 px-3 rounded-3xl text-2xl hover:scale-110 transition-all shadow-[0px_3px_10px_#5E17EB] hover:shadow-[0px_8px_17px_#5E17EB]"
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
            <footer className="text-white bg-[#1a1a1a] p-4 grid grid-cols-3 text-2xl items-center">
                <div className="mx-auto">
                    <h2 className="text-[1.5em] text-balance font-bold mb-2">Contato</h2>
                    <ul>
                        <li>Email</li>
                        <li>Email</li>
                        <li>Email</li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
