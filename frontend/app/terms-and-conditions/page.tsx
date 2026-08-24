import StaticPageLayout from "@/components/layout/StaticPageLayout";

export default function TermsAndConditionsPage() {
    return (
        <StaticPageLayout
            title="Terms & Conditions"
            description="A few simple guidelines for using our website."
        >
            <div className="space-y-10">
                <div>
                    <h2 className="text-2xl font-medium uppercase tracking-wide text-[#C92E05] sm:text-3xl">
                        Terms & Conditions
                    </h2>

                    <p className="mt-4 text-base font-light leading-relaxed text-[#E85A2A] sm:text-lg">
                        Welcome to the Mad Pizza website. By accessing or using this
                        website, you agree to use it responsibly and in accordance with
                        these terms.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        Website Use
                    </h3>

                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        This website is provided for general information about Mad Pizza,
                        our menu, services, locations, and other offerings.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        Content
                    </h3>

                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        We make reasonable efforts to keep the information on this website
                        accurate and up to date. However, menus, prices, availability,
                        images, and other information may change without notice.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        Intellectual Property
                    </h3>

                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        Website content, including text, images, branding, graphics, and
                        other materials, may belong to Mad Pizza or its respective owners
                        and should not be reproduced without permission.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        Changes to These Terms
                    </h3>

                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        These terms may be updated from time to time as our website and
                        services change.
                    </p>
                </div>

                <div className="border-t border-[#E85A2A]/20 pt-6">
                    <p className="text-sm font-light text-gray-500">
                        Temporary Terms & Conditions — Final legal content will be added
                        soon.
                    </p>
                </div>
            </div>
        </StaticPageLayout>
    );
}