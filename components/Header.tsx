import Link from "next/link";

export default function Header() {
    return (
        <header className="text-white bg-[#1a1a1a] p-4 grid grid-cols-3 text-2xl items-center">
            <h1>Bruno Nunes</h1>
            <nav className="justify-center flex gap-2">
                <Link
                    href="/"
                    className="border-b-2 border-[#5E17EB] p-1 hover:px-4 transition-all duration-400"
                >
                    Home
                </Link>
                <Link
                    href="/projetos"
                    className="border-b-2 border-[#5E17EB] p-1 hover:px-4 transition-all duration-400"
                >
                    Projetos
                </Link>
                <Link
                    href="/sobre-mim"
                    className="border-b-2 border-[#5E17EB] p-1 hover:px-4 transition-all duration-400"
                >
                    Sobre Mim
                </Link>
            </nav>
            <div className="flex justify-end gap-4">
                <button className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                </button>
            </div>
        </header>
    );
}
