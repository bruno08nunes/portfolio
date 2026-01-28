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
                    className="flex-1 max-w-[400px] border-[#5E17EB] rounded-md border-4 overflow-hidden hover:scale-105 hover:translate-y-[-19px] transition-all duration-400 cursor-pointer basis-[280px] bg-[#131315]"
                    key={project.id}
                >
                    <div className="p-3 flex flex-col gap-2 text-justify">
                        <h3 className="text-shadow-[3px_3px_#5E17EB] text-[1.3em]">
                            {project.name}
                        </h3>
                        <p className="text-[0.9em]">{project.description}</p>
                        <span className="py-1 px-4 rounded-4xl border border-white text-[0.9em]">
                            {project.language}
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
}
