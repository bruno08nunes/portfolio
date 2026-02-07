"use client";

import { useTheme } from "next-themes";
import useMounted from "@/hooks/useMounted";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const mounted = useMounted();

    const svgs = {
        dark: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon-icon lucide-moon"
            >
                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
            </svg>
        ),
        light: (
            <svg
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
            >
                <path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
            </svg>
        ),
    };

    if (!mounted) return null;

    const currentSvg = Object.hasOwn(svgs, theme || "") ? svgs[theme as keyof typeof svgs] : svgs.dark;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer border-current border p-1 rounded-md hover:bg-[#ffffff66]"
        >
            {currentSvg}
        </button>
    );
}
