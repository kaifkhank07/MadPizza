import type { Metadata } from "next";
import StaticPageLayout from "@/components/layout/StaticPageLayout";

export const metadata: Metadata = {
    title: "Terms & Conditions | MAD Pizza",
    description: "Read the terms and conditions for using the MAD Pizza website, online ordering system, and restaurant services.",
};

export default function TermsAndConditionsPage() {
    return (
        <StaticPageLayout
            title="Terms & Conditions"
            description="Guidelines and terms governing your use of our website and services."
        >
            <div className="space-y-10">
                <div>
                    <h2 className="text-2xl font-medium uppercase tracking-wide text-[#C92E05] sm:text-3xl">
                        Terms & Conditions
                    </h2>

                    <p className="mt-4 text-base font-light leading-relaxed text-[#E85A2A] sm:text-lg">
                        Welcome to MAD Pizza. By accessing or using our website, placing an order, or utilizing any of our services, you agree to be bound by these Terms & Conditions. Please read them carefully before using our platform.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        1. Acceptance of Terms
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        By visiting our website or placing an order with MAD Pizza (including our locations in Bolton and Waterloo, Ontario), you acknowledge that you have read, understood, and agreed to comply with these terms as well as our Privacy Policy. If you do not agree with any part of these terms, you must refrain from using our services.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        2. Website Use & Account Security
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        You agree to use this website solely for lawful purposes such as browsing our menu, placing orders, and contacting our team. If you create an account or provide personal information on our website, you are responsible for maintaining the confidentiality of your information and for all activities conducted through your account.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        3. Menu Items, Pricing & Availability
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        We strive to display accurate pricing, item descriptions, and nutritional/allergen information. However, prices, promotional offers, and menu availability are subject to change without prior notice. MAD Pizza reserves the right to modify or discontinue menu items at any time.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        4. Online Ordering & Payment
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        All orders placed online must be paid using accepted payment methods at checkout. By submitting payment information, you represent that you are authorized to use the chosen payment method. Orders are confirmed only once you receive an order confirmation from our system or location.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        5. Cancellations, Refunds & Quality Guarantee
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        Due to the perishable nature of fresh food items, order cancellations must be requested immediately after placing the order. MAD Pizza takes immense pride in quality. If there is an issue with your order upon pickup or delivery, please contact the fulfilling location immediately so we can promptly resolve the issue through a replacement or refund.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        6. Intellectual Property
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        All content on this website, including text, logos, custom graphics, artwork, photographs, and branding elements, is the exclusive property of MAD Pizza. Reproduction, distribution, or unauthorized use of any media or text without written permission is strictly prohibited.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        7. Limitation of Liability
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        MAD Pizza and its affiliates shall not be held liable for any indirect, incidental, or consequential damages resulting from your access to, use of, or inability to use our website, services, or third-party links connected to our website.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        8. Governing Law
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        These Terms & Conditions are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-medium uppercase text-[#C92E05]">
                        9. Contact Information
                    </h3>
                    <p className="text-base font-light leading-relaxed text-gray-600 sm:text-lg">
                        If you have questions regarding these Terms & Conditions, please contact us directly at our Bolton or Waterloo store locations, or reach out to us via our online contact form.
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
