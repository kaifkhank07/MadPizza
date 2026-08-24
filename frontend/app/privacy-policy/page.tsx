import StaticPageLayout from "@/components/layout/StaticPageLayout";

export default function PrivacyPolicy() {
    return (
        <StaticPageLayout
            title="Privacy Policy"
            description="Your privacy matters to us."
        >
            <div className="space-y-10">
                <div>
                    <h2 className="text-2xl font-medium uppercase tracking-wide text-[#C92E05] sm:text-3xl">
                        Privacy Policy
                    </h2>

                    <p className="mt-4 text-base font-light leading-relaxed text-[#E85A2A] sm:text-lg">
                        This Privacy Policy explains how Mad Pizza may collect, use, and
                        protect information when you visit or interact with our website.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        Information We Collect
                    </h3>

                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        We may collect information that you voluntarily provide through
                        forms, enquiries, reservations, or other interactions with our
                        website.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        How We Use Your Information
                    </h3>

                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        Information may be used to respond to enquiries, provide requested
                        services, improve our website, and communicate important updates.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        Data Protection
                    </h3>

                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        We take reasonable steps to protect the information provided to us
                        and to prevent unauthorized access, misuse, or disclosure.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        Updates
                    </h3>

                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        This privacy policy is temporary and may be updated as our website
                        and services develop.
                    </p>
                </div>

                <div className="border-t border-[#E85A2A]/20 pt-6">
                    <p className="text-sm font-light text-gray-500">
                        Temporary Privacy Policy — Final legal content will be added soon.
                    </p>
                </div>
            </div>
        </StaticPageLayout>
    );
}