export default function Footer() {
    return (
        <footer className="text-white bg-[#1a1a1a] p-4 grid grid-cols-3 text-xl items-center px-6">
            <div className="mx-auto">
                <h2 className="text-[1.5em] text-balance font-bold mb-2">
                    Contato
                </h2>
                <ul>
                    <li>
                        Email:{" "}
                        <a
                            href="mailto:brunonunes.sl08@gmail.com"
                            target="_blank"
                            className="underline hover:no-underline"
                        >
                            brunonunes.sl08@gmail.com
                        </a>
                    </li>
                    <li>
                        Linkedin:{" "}
                        <a
                            href="https://www.linkedin.com/in/bruno08nunes/"
                            target="_blank"
                            className="underline hover:no-underline"
                        >
                            bruno08nunes
                        </a>
                    </li>
                    <li>
                        Github:{" "}
                        <a
                            href="https://github.com/bruno08nunes"
                            target="_blank"
                            className="underline hover:no-underline"
                        >
                            bruno08nunes
                        </a>
                    </li>
                    <li>
                        Itch.io:{" "}
                        <a
                            href="https://bruno08nunes.itch.io/"
                            target="_blank"
                            className="underline hover:no-underline"
                        >
                            bruno08nunes
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
