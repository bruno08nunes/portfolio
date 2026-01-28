import { GithubProjectType } from "@/types/project";

export const getRepos = async (pageNumber: number) => {
    const perPage = 9;
    const apiURL = `https://api.github.com/users/bruno08nunes/repos?page=${pageNumber}&per_page=${perPage}`;

    const res = await fetch(apiURL, {
        cache: "force-cache",
        next: { revalidate: 86400 },
    });

    if (!res.ok) {
        return { ok: false, status: res.status };
    }

    const fullRepos = (await res.json()) as {
        name: string;
        id: string;
        description: string | null;
        language: string;
        html_url: string;
    }[];
    const linkHeader = res.headers.get("link");
    const repos: GithubProjectType[] = fullRepos.map((repo) => ({
        name: repo.name,
        id: repo.id,
        description: repo.description,
        language: repo.language,
        link: { href: repo.html_url, title: "Github" },
    }));

    return { repos, linkHeader };
};

export const getLastPage = (linkHeader: string | null | undefined, currentPage: number) => {
    if (!linkHeader) return 1;

    const last = linkHeader
        .split(",")
        .find((link) => link.includes('rel="last"'));

    if (!last) return currentPage;

    const match = last.match(/page=(\d+)/);

    return match ? Number(match[1]) : 1;
};

type PageItem = number | "...";

export function generatePaginationValues(
    currentPage: number,
    lastPage: number
): PageItem[] {
    if (lastPage <= 7) {
        return new Array(lastPage).fill(null).map((_, i) => i + 1);
    }

    const pages = new Set<number>();

    pages.add(1);
    pages.add(lastPage);
    pages.add(currentPage);
    pages.add(currentPage - 1);
    pages.add(currentPage + 1);
    
    const validPages = Array.from(pages)
        .filter((p) => p >= 1 && p <= lastPage)
        .sort((a, b) => a - b);

    const result: PageItem[] = [];

    for (let i = 0; i < validPages.length; i++) {
        const current = validPages[i];
        const previous = validPages[i - 1];

        if (i > 0 && current - previous > 1) {
            result.push("...");
        }

        result.push(current);
    }

    return result;
}
