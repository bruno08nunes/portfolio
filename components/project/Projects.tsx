"use client";

import { DialogDescription } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ProjectType } from "@/types/project";
import { useState } from "react";
import ProjectTrigger from "./ProjectTrigger";

export default function Projects({
    projects,
}: {
    projects: Omit<ProjectType, "id">[];
}) {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
        null
    );

    const handleOpenModal = (project: ProjectType) => {
        setOpen(true);
        setSelectedProject(project);
    };

    return (
        <div className="flex justify-center flex-wrap gap-12">
            {projects.map((project, i) => (
                    <ProjectTrigger project={{ ...project, id: i }} key={i}
                    handleOpenModal={handleOpenModal} />
            ))}

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-[#131315] border-[#5E17EB]">
                    <DialogHeader>
                        <DialogTitle className="mx-auto py-1 px-4 bg-[#5E17EB] text-2xl font-bold w-max rounded-sm">{selectedProject?.name}</DialogTitle>
                        <DialogDescription>
                            {selectedProject?.description}
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Explicação</h2>
                        {
                            selectedProject?.text.map((text, i) => (
                                <p key={i} className="indent-4 my-1 text-justify">{text}</p>
                            ))
                        }
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Links</h2>
                        {
                            selectedProject?.links.map((link, i) => (
                                <a href={link.href} target="_blank" key={i} className="py-1 px-4 bg-[#5E17EB] text-lg rounded-sm hover:underline">{link.title}</a>
                            ))
                        }
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
