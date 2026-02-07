import { ProjectType } from "@/types/project";
import Image from "next/image";

export default function ProjectTrigger({ project, handleOpenModal }: { project: ProjectType, handleOpenModal(project: ProjectType): void }) {
    return (
        <button
            className="flex-1 max-w-[400px] border-(--purple) rounded-md border-4 overflow-hidden hover:scale-105 hover:translate-y-[-19px] transition-transform duration-400 cursor-pointer basis-[280px] bg-(--bg-color) flex flex-col"
            onClick={() => handleOpenModal(project)}
        >
            <Image
                src={`/${project.name.toLowerCase()}.png`}
                alt=""
                width={800}
                height={800}
                className="w-full object-cover aspect-video"
            />
            <div className="p-3 flex flex-col gap-2 text-justify">
                <h3 className="text-shadow-(--text-shadow) text-[1.3em] font-bold">
                    {project.name}
                </h3>
                <p className="text-[0.9em]"> {project.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                    {project.tools.map((tool, i) => (
                        <span
                            className="py-1 px-4 rounded-4xl border border-current font-bold text-[0.9em]"
                            key={i}
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </button>
    );
}
