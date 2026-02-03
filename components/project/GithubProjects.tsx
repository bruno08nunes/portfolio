import { GithubProjectType } from "@/types/project";

export default function GithubProjects({
    projects,
}: {
    projects: GithubProjectType[];
}) {
    return (
        <div className="flex justify-center flex-wrap gap-12">
            {projects.map((project) => (
                <a
                    href={project.link.href}
                    target="_blank"
                    className="flex-1 max-w-[400px] border-(--purple) rounded-md border-4 overflow-hidden hover:scale-105 hover:translate-y-[-19px] transition-transform duration-400 cursor-pointer basis-[280px] bg-(--bg-color)"
                    key={project.id}
                >
                    <div className="p-3 flex flex-col gap-2 text-justify">
                        <h3 className="text-shadow-(--text-shadow) text-[1.3em]">
                            {project.name}
                        </h3>
                        <p className="text-[0.9em]">{project.description}</p>
                        {project.language ? (
                            <span className="py-1 px-4 rounded-4xl border-2 border-current w-max text-[0.9em]">
                                {project.language}
                            </span>
                        ) : null}
                    </div>
                </a>
            ))}
        </div>
    );
}
