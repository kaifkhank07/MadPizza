import Link from "next/link";

interface StaticPageLayoutProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
}

export default function StaticPageLayout({
    title,
    description,
    children,
}: StaticPageLayoutProps) {
    return (
        <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF6ED] text-dark p-6 lg:pt-12">
            {/* Hero */}
            {/* <section className="relative overflow-hidden bg-primary px-6 py-28 sm:px-10 md:py-36 lg:px-16">
                <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border-[30px] border-white/10" />
                <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full border-[35px] border-white/10" />

                <div className="relative mx-auto max-w-7xl">
                    <span className="mb-4 block text-sm font-medium uppercase tracking-[0.25em] text-white/70">
                        Mad Pizza
                    </span>

                    <h1 className="max-w-4xl font-geist text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 sm:text-lg md:text-xl">
                            {description}
                        </p>
                    )}
                </div>
            </section> */}

            {/* Content */}
            <section className="px-6 py-16 sm:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-5xl">
                    <div className="relative overflow-hidden rounded-lg border border-[#E85A2A]/20 bg-white p-8 shadow-sm sm:p-12 md:p-16">
                        {/* Decorative top line */}
                        <div className="absolute left-0 right-0 top-0 h-1 bg-primary" />

                        {children || (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-medium uppercase tracking-wide text-[#C92E05] sm:text-3xl">
                                    {title}
                                </h2>

                                <p className="text-base font-light leading-relaxed text-[#E85A2A] sm:text-lg">
                                    This page is currently being prepared. More information will
                                    be available soon.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Back home */}
                    <div className="mt-10 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary transition-opacity duration-300 hover:opacity-70"
                        >
                            <span>←</span>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}