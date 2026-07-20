"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const skills = [
    {
        categoryId: "frontend",
        skills: [
            "HTML/CSS",
            "JavaScript",
            "TypeScript",
            "Next.js",
            "React",
            "Tailwind",
        ],
    },
    {
        categoryId: "backend",
        skills: ["TypeScript", "Node.js", "Express", "MySQL"],
    },
    {
        categoryId: "gameDev",
        skills: ["C#", "Unity"],
    },
    {
        categoryId: "tools",
        skills: ["Git/Github", "Figma", "Docker", "Firebase"],
    },
];

export default function SkillsSection() {
    const t = useTranslations("HomePage");
    const skillsCategoriesNames = t.raw("skillsCategoriesNames") as { categoryId: string, categoryName: string }[];

    const skillsCategories = skillsCategoriesNames.map((value) => value.categoryName);
    const [currentSkillCategory, setCurrentSkillCategory] = useState(0);
    const currentSkills = skills.find(
        (value) => value.categoryId === skillsCategoriesNames[currentSkillCategory].categoryId,
    );

    return (
        <section className="max-w-[1300px] mx-auto w-full py-15 px-6">
            <h2 className="text-[1.5em] text-balance font-bold mb-2">
                Habilidades
            </h2>
            <div className="flex gap-4 md:text-[1.2em] overflow-x-auto pb-2">
                {skillsCategories.map((value, i) => (
                    <button
                        className={`cursor-pointer hover:border-b-3 px-2 border-(--purple) text-nowrap ${
                            currentSkillCategory === i ? "border-b-3" : ""
                        }`}
                        key={i}
                        onClick={() => setCurrentSkillCategory(i)}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap py-3 gap-4">
                {currentSkills?.skills.map((value, i) => (
                    <span
                        className="border-current font-bold border-3 md:p-5 p-2 px-3 rounded text-center flex-1"
                        key={i}
                    >
                        {value}
                    </span>
                ))}
            </div>
        </section>
    );
}
