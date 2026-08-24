import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF6ED] px-6">
            <div className="relative w-full max-w-3xl text-center">
                {/* Decorative pizza */}
                <div className="absolute -left-4 top-0 -rotate-12 text-5xl opacity-80 sm:left-10 sm:text-7xl">
                    🍕
                </div>

                <div className="absolute -right-2 bottom-8 rotate-12 text-4xl opacity-80 sm:right-10 sm:text-6xl">
                    🍅
                </div>

                <span className="block text-sm font-medium uppercase tracking-[0.3em] text-[#E85A2A]">
                    Mad Pizza
                </span>

                <h1 className="mt-5 font-geist text-8xl font-bold leading-none text-primary sm:text-[12rem]">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-medium uppercase tracking-wide text-[#C92E05] sm:text-4xl">
                    Oops! This slice is missing.
                </h2>

                <p className="mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-[#E85A2A] sm:text-lg">
                    The page you're looking for doesn't exist or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-105"
                >
                    <span>←</span>
                    Back to Home
                </Link>
            </div>
        </main>
    );
}