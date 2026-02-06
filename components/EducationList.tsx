import type { EducationItem } from "@/types/education";
import { getTranslations } from "next-intl/server";

export default async function EducationList() {
    const t = await getTranslations("Education");

    const education = t.raw("info") as EducationItem[];

    return (
        <dl className="flex flex-col gap-6">
            {education.map((course, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <dt className="flex flex-col">
                        <span className="font-bold">{course.course}</span>
                        <span className="italic">
                            {course.institution} - {course.period}
                        </span>
                    </dt>
                    <dd className="flex flex-col gap-1 pl-7 text-justify md:indent-0 indent-6">
                        {course.description.map((description, i) => (
                            <p key={i}>{description}</p>
                        ))}
                    </dd>
                </div>
            ))}
        </dl>
    );
}
