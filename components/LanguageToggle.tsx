"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import LanguageSVGPT from "./LanguageSVGPT";
import LanguageSVGEN from "./LanguageSVGEN";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ArrowDown, ArrowDownAZ, ArrowDownCircle, ArrowDownIcon, ChevronDown } from "lucide-react";

export default function LanguageToggle() {
    const svgs = {
        pt: <LanguageSVGPT />,
        en: <LanguageSVGEN />,
    };

    const localeNames = {
        pt: "POR",
        en: "ENG"
    }

    const pathname = usePathname();
    const locale = useLocale() as keyof typeof svgs;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex gap-2 items-center border-current border py-1 px-2 rounded-md">
                    <span className="max-w-6 rounded-full overflow-hidden">
                        {Object.hasOwn(svgs, locale) ? svgs[locale] : svgs.pt}
                    </span>
                    <span className="text-base">{localeNames[locale] || ""}</span>
                    <ChevronDown size={18} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link
                        href={pathname}
                        locale="pt"
                        className="flex items-center gap-2"
                    >
                        <span className="max-w-10 rounded-full overflow-hidden">{svgs.pt}</span>
                        <span>Português</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link
                        href={pathname}
                        locale="en"
                        className="flex items-center gap-2"
                    >
                        <span className="max-w-10 rounded-full overflow-hidden">{svgs.en}</span>
                        <span>English</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
