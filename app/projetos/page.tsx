import Header from "@/components/Header";
import GithubProjects from "@/components/project/GithubProjects";
import Projects from "@/components/project/Projects";
import { generatePaginationValues, getLastPage, getRepos } from "@/lib/github-fetch";
import Link from "next/link";

const projects = [
    {
        name: "Minerva",
        description:
            "Aplicação para ensino de lógica e programação de maneira gamificada, com um sistema de lições, progresso de usuário e desafios interativos.",
        tools: ["TypeScript", "Next.js", "Tailwind", "Prisma", "Express"],
        text: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
        ],
        links: [
            {
                href: "https://github.com/bruno08nunes/minerva-frontend",
                title: "Github",
            },
        ],
    },
    {
        name: "Loja-Loja",
        description:
            "Loja virtual com catálogo de produtos e autenticação salvos no banco de dados e  um carrinho de compras salvo no computador do usuário.",
        tools: ["HTML/CSS", "JavaScript", "MySQL", "Express"],
        text: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
        ],
        links: [
            {
                href: "https://github.com/bruno08nunes/minerva-frontend",
                title: "Github",
            },
        ],
    },
    {
        name: "Pokemon",
        description:
            "Jogo no qual o usuário precisa adivinhar qual Pokémon é pela sua silhueta.",
        tools: ["HTML/CSS", "JavaScript", "Poke API"],
        text: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam libero velit fugiat harum voluptates iusto nihil! Eos nostrum beatae provident deleniti quisquam, perferendis ipsam officiis temporibus illo. Itaque, magni labore.",
        ],
        links: [
            {
                href: "https://github.com/bruno08nunes/minerva-frontend",
                title: "Github",
            },
        ],
    },
];

export default async function ProjectsPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const pageParam = (await searchParams).page;
    const currentPage = Number(pageParam) || 1;

    const { repos, linkHeader, ok: okReq } = await getRepos(currentPage);
    const lastPage = getLastPage(linkHeader, currentPage);

    const linkValues = generatePaginationValues(currentPage, lastPage);

    return (
        <>
            <Header />
            <main className="min-w-[320px] w-full mx-auto flex flex-col text-xl py-8 gap-6">
                <section className="max-w-[1300px] mx-auto w-full px-6">
                    <h2 className="text-[1.5em] text-balance font-bold mb-2">
                        Principais Projetos
                    </h2>
                    <Projects projects={projects} />
                </section>
                {okReq !== false && repos !== undefined && (
                    <section className="max-w-[1300px] mx-auto w-full px-6">
                        <h2 className="text-[1.5em] text-balance font-bold mb-2">
                            Todos os Repositórios do Github
                        </h2>
                        <GithubProjects projects={repos} />
                        <div className="flex gap-3 justify-center mt-6">
                            {linkValues.map((value, i) => {
                                if (typeof value === "string") {
                                    return <div className="border p-2 size-10 flex items-center justify-center" key={i}>...</div>
                                }
                                return <Link href={`?page=${value}`} scroll={false} key={i} className="border p-2 size-10 flex items-center justify-center">{value}</Link>
                            })}
                        </div>
                    </section>
                )}
            </main>
        </>
    );
}
