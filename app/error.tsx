"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
    return (
        <>
            <main className="flex-1 flex flex-col justify-center items-center pb-23 gap-4">
                <h2 className="text-2xl">Error</h2>
                <p className="text-lg">
                    To continue using the application, return to the home page.
                </p>
                <button onClick={() => reset()}>Reset</button>
            </main>
        </>
    );
}
