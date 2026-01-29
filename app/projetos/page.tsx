import Header from "@/components/Header";
import GithubProjects from "@/components/project/GithubProjects";
import Projects from "@/components/project/Projects";
import { projects } from "@/data/projects";
import { generatePaginationValues, getLastPage, getRepos } from "@/lib/github-fetch";
import Link from "next/link";

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
