import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ideaImage from "@/public/idea.png";
import programingImage from "@/public/programming.png";
import programingImage2 from "@/public/programming2.png";
import pcImage from "@/public/pc.png";

export default function AboutMePage() {
    return (
        <>
            <Header />
            <main className="min-w-[320px] w-full mx-auto flex flex-col text-xl py-8">
                <section className="grid grid-cols-[3fr_2fr] w-full items-center gap-10 min-h-[55svh] max-w-[1300px] mx-auto px-6 py-15">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[1.8em] text-balance font-bold">
                            Quem sou eu
                        </h2>
                        <p>
                            Olá! Eu sou{" "}
                            <span className="text-shadow-[3px_3px_#5E17EB] text-[1.1em] text-balance">
                                &lt;Bruno Nunes&gt;
                            </span>
                            , um desenvolvedor <b>Full-Stack</b> em início de
                            carreira com formação técnica pelo SENAC e{" "}
                            <b>Game Developer</b> em formação pela Unisinos.
                            Trabalho com foco em <b>TypeScript</b>,{" "}
                            <b>Next.js</b>, <b>Express</b> para o
                            desenvolvimento Web, além de <b>Unity</b> para a
                            criação de jogos. Meu objetivo é transformar suas
                            ideias em código!
                        </p>
                    </div>
                    <Image
                        src="https://avatars.githubusercontent.com/u/139359503?v=4"
                        alt=""
                        width={400}
                        height={400}
                        className="max-w-full w-[70%] rounded-full object-cover"
                        loading="eager"
                    />
                </section>
                <section className="grid grid-cols-[2fr_3fr] w-full items-center gap-10 min-h-[55svh] max-w-[1300px] mx-auto px-6 py-15">
                    <Image
                        src={programingImage}
                        alt=""
                        className="w-full object-cover"
                        placeholder="blur"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[1.8em] text-balance font-bold">
                            Começo na programação
                        </h2>
                        <p>
                            Tive meu primeiro contato com programação aos 11
                            anos, quando assisti ao vídeo &quot;
                            <a
                                href="https://www.youtube.com/watch?v=Sd56qiZq2-g"
                                target="_blank"
                                className="underline underline-offset-3 hover:decoration-[#5E17EB]"
                            >
                                Os Jogos Que Eu Fiz Quando Eu Era Uma Criança
                            </a>
                            &quot;. Na época, tentei aprender várias vezes, mas
                            sempre acabava desistindo. Minha jornada na
                            programação começou de fato por volta dos 15 anos,
                            ao ingressar em uma escola técnica e começar a
                            programar com mais consistência. Foi amor à segunda
                            vista. Sempre fui fascinado por entender como as
                            coisas funcionam “por trás da tela”.
                        </p>
                        <p>
                            Depois de muitas tentativas, códigos quebrando e
                            buscas intermináveis no Google, percebi que criar
                            software era algo que me deixava profundamente
                            motivado. Com o tempo, essa curiosidade se
                            transformou em um objetivo profissional. Passei a
                            estudar HTML, CSS e JavaScript também fora da
                            escola, criando pequenas interações e tentando
                            reproduzir funcionalidades que via em outros sites.
                        </p>
                        <p>
                            Ao mesmo tempo, comecei a seguir outro grande
                            interesse: o desenvolvimento de jogos. Inicialmente
                            como hobby, passei a criar pequenos jogos e
                            protótipos na Unity, usando a programação como uma
                            forma de unir lógica e criatividade. Hoje, continuo
                            estudando diariamente para expandir meu repertório
                            técnico e desenvolver projetos cada vez mais
                            completos e bem estruturados.
                        </p>
                    </div>
                </section>
                <section className="grid grid-cols-[3fr_2fr] w-full items-center gap-10 min-h-[55svh] max-w-[1300px] mx-auto px-6 py-15">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[1.8em] text-balance font-bold">
                            O que me motiva
                        </h2>
                        <p>
                            O que mais me empolga na programação é a sensação de
                            transformar uma ideia em algo concreto. Seja uma
                            aplicação, uma interface, um sistema ou um jogo, ver
                            algo funcionando por causa de linhas que eu escrevi
                            é uma sensação incrível.
                        </p>
                        <p>
                            Também sou movido por desafios: gosto de entender
                            problemas complexos e quebrá-los em partes pequenas
                            até encontrar a solução. E por fim, acredito no
                            poder da tecnologia para criar experiências
                            significativas, inovadoras, úteis ou simplesmente
                            divertidas.
                        </p>
                    </div>
                    <Image
                        src={programingImage2}
                        alt=""
                        className="max-w-full w-[70%] object-cover"
                        placeholder="blur"
                    />
                </section>
                <section className="bg-[#5E17EB] w-full min-h-[50vh] flex justify-center p-8">
                    <div className="max-w-[1300px] text-xl flex gap-8 items-center">
                        <div className="flex flex-col gap-4 text-justify">
                            <h2 className="text-[1.5em] text-balance font-bold mb-2">
                                O que procuro
                            </h2>
                            <p>
                                Busco oportunidades nas quais eu possa crescer
                                como desenvolvedor e participar de projetos que
                                unam criatividade, técnica e boas práticas.
                                Gosto de ambientes em que o código é bem
                                pensado, organizado e evolui com o tempo.
                            </p>
                            <p>
                                Valorizo trabalhar com pessoas que gostam de
                                construir coisas e compartilhar conhecimento.
                                Para mim, aprender e ensinar fazem parte de um
                                processo fundamental.
                            </p>
                            <p>
                                Meu objetivo é criar soluções que façam
                                diferença, seja em aplicações eficientes ou em
                                jogos envolventes, e continuar evoluindo
                                constantemente, um commit por vez.
                            </p>
                        </div>
                        <Image
                            src={ideaImage}
                            alt=""
                            width={200}
                            height={200}
                            className="max-w-full w-[60%] rounded-full object-cover "
                        />
                    </div>
                </section>
                <section className="grid grid-cols-[3fr_2fr] w-full items-center gap-2 min-h-[55svh] max-w-[1300px] mx-auto px-6 py-15">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[1.8em] text-balance font-bold">
                            Tecnologias e áreas de atuação
                        </h2>
                        <ul className="flex gap-7">
                            <li className="flex-1">
                                <strong>Web Development</strong>
                                <ul className="ml-5 list-disc">
                                    <li>
                                        <strong>Frontend:</strong> TypeScript,
                                        Next.js, React, Tailwind
                                    </li>
                                    <li>
                                        <strong>Backend:</strong> Node.js,
                                        Express
                                    </li>
                                    <li>
                                        <strong>Banco de Dados:</strong> MySQL
                                    </li>
                                    <li>
                                        <strong>Outros:</strong> APIs REST,
                                        autenticação, arquitetura básica
                                    </li>
                                </ul>
                            </li>
                            <li className="flex-1">
                                <strong>🎮 Game Development</strong>
                                <ul className="ml-5 list-disc">
                                    <li>
                                        <strong>Engine:</strong> Unity
                                    </li>
                                    <li>
                                        <strong>Linguagem:</strong> C#
                                    </li>
                                    <li>
                                        <strong>Interesses:</strong> lógica de
                                        gameplay, UI de jogos, prototipação
                                        rápida
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Image
                        src={pcImage}
                        alt=""
                        className="max-w-full w-[70%] rounded-full object-cover"
                        placeholder="blur"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
