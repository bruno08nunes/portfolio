"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "../ui/dialog";
import { ProjectType } from "@/types/project";
import { useState } from "react";
import ProjectTrigger from "./ProjectTrigger";
import { useTranslations } from "next-intl";

export default function Projects() {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
        null,
    );

    const t = useTranslations("Projects");
    const projectsData = t.raw("info") as ProjectType[];

    const handleOpenModal = (project: ProjectType) => {
        setOpen(true);
        setSelectedProject(project);
    };

    return (
        <div className="flex justify-center flex-wrap gap-12">
            {projectsData.map((project) => {
                return (
                    <ProjectTrigger
                        project={project}
                        key={project.id}
                        handleOpenModal={handleOpenModal}
                    />
                );
            })}

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-(--bg-color) text-(--text-color) border-(--purple) border-3 max-w-[650px] w-[90%] overflow-y-auto max-h-[90%]">
                    <DialogHeader>
                        <DialogTitle className="mx-auto py-1 px-4 bg-(--purple) text-white text-2xl font-bold w-max rounded-sm">
                            {selectedProject?.name}
                        </DialogTitle>
                        <DialogDescription className="text-inherit text-md">
                            {selectedProject?.description}
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <h2 className="text-xl font-bold mb-2">
                            {t("explanationDialogTitle")}
                        </h2>
                        {selectedProject?.text.map((text, i) => (
                            <p key={i} className="indent-4 my-1 text-justify">
                                {text}
                            </p>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Links</h2>
                        <div className="flex gap-3 flex-wrap">
                            {selectedProject?.links.map((link, i) => (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={i}
                                    className="py-1 px-4 bg-(--purple) text-lg rounded-sm hover:underline wrap-anywhere text-white"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
