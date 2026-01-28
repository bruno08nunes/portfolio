export type ProjectType = {
    id: string | number;
    name: string;
    description: string;
    tools: string[];
    text: string[];
    links: { href: string; title: string }[];
};

export type GithubProjectType = {
    id: string | number;
    name: string;
    description: string | null;
    language: string;
    link: { href: string; title: string };
};
