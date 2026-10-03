import type { Metadata } from "next";
import StaticPageLayout from "@/components/layout/StaticPageLayout";

export const metadata: Metadata = {
    title: "Privacy Policy | MAD Pizza",
    description: "Learn about how MAD Pizza collects, uses, and protects your personal information and privacy.",
};

export default function PrivacyPolicy() {
    return (
        <StaticPageLayout
            title="Privacy Policy"
            description="Your privacy matters to us. Learn how we handle and protect your personal information."
        >
            <div className="space-y-10">
                <div>
                    <h2 className="text-2xl font-medium uppercase tracking-wide text-[#C92E05] sm:text-3xl">
                        Privacy Policy
                    </h2>

                    <p className="mt-4 text-base font-light leading-relaxed text-[#E85A2A] sm:text-lg">
                        At MAD Pizza, we are committed to protecting your privacy and ensuring a transparent online ordering experience. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or order from our locations.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        1. Information We Collect
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        We collect personal information that you voluntarily provide to us when placing an order, subscribing to updates, submitting feedback, or contacting us. This information may include your name, email address, phone number, delivery address, order details, and payment preferences. We also automatically collect technical usage data, such as IP addresses, browser types, and cookie data to improve website functionality.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        2. How We Use Your Information
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        MAD Pizza uses collected information to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-base font-light text-gray-600 sm:text-lg">
                        <li>Fulfill and manage your online orders, deliveries, and pickups.</li>
                        <li>Communicate order status updates, receipts, and customer service responses.</li>
                        <li>Improve our menu offerings, website features, and overall dining experience.</li>
                        <li>Send promotional offers and updates if you have opted in to receive marketing communications.</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        3. Sharing & Disclosure of Information
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may share necessary details with trusted third-party service providers (such as payment processing partners, delivery couriers, and hosting providers) strictly to facilitate our operations and fulfill your requests.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        4. Data Protection & Security
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        We implement administrative, technical, and physical security measures to safeguard your personal data against unauthorized access, loss, alteration, or disclosure. Payment information submitted online is encrypted using industry-standard protocols.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        5. Cookies & Tracking Technologies
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        Our website utilizes cookies and session analytics to enhance user experience, remember your preferences, and analyze site traffic. You can adjust your browser settings to decline cookies, though some features of the website may not function optimally as a result.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        6. Your Rights & Choices
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        You have the right to access, update, or request deletion of your personal information held by MAD Pizza. You can also unsubscribe from promotional emails at any time by following the unsubscribe link included in our communications.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        7. Policy Updates
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        MAD Pizza reserves the right to update this Privacy Policy periodically to reflect changes in our operational practices or legal requirements. Any updates will be posted on this page with an updated revision date.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        8. Contact Us
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        If you have questions, concerns, or requests regarding this Privacy Policy, please reach out to us at our Bolton or Waterloo store locations or via our contact page.
                    </p>
                </div>

                <div className="border-t border-[#E85A2A]/20 pt-6">
                    <p className="text-sm font-light text-gray-500">
                        Last updated: October 2026. MAD Pizza — All Rights Reserved.
                    </p>
                </div>
            </div>
        </StaticPageLayout>
    );
}