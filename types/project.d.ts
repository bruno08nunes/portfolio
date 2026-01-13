export type ProjectType = {
    id: string | number;
    name: string;
    description: string;
    tools: string[];
    text: string[];
    links: {href: string, title: string}[];
};
