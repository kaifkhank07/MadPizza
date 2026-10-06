"use client";

import { useState } from "react";
import Image from "next/image";
import { BlurInText } from "../animations";
import { useOrderModal } from "../util/OrderModalContext";
import {
    pizzaMenuItems,
    pizzaMenuCategories,
    type PizzaMenuCategory,
    type PizzaMenuItemType,
} from "@/data/pizzamenu";
import Button from "../util/Button";
import { assets } from "@/data/assets";

/* Sub-components */
function CheckerStrip() {
    return (
        <div
            aria-hidden="true"
            className="w-full h-9"
            style={{
                background:
                    "repeating-conic-gradient(var(--clr-primary) 0% 25%, var(--clr-off-white) 0% 50%) 0 0 / 36px 36px",
            }}
        />
    );
}

function PizzaCard({
    item,
    onAddToCart,
}: {
    item: PizzaMenuItemType;
    onAddToCart: () => void;
}) {
    return (
        <div className="bg-white rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch transition-all duration-300">
            {/* Left: Image */}
            <div className="relative shrink-0 w-full sm:w-44 md:w-48 aspect-square rounded-xl overflow-hidden bg-[#2C2421]">
                <Image
                    src={item.image || assets.images.placeholder}
                    alt={item.name}
                    fill
                    quality={85}
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 200px"
                />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between flex-1 py-1 space-y-3">
                <div>
                    <h3 className="font-medium text-dark text-lg sm:text-xl lg:text-2xl font-geist leading-tight">
                        {item.name}
                    </h3>
                    <p className="font-kanit text-gray-700 text-base sm:text-lg font-normal leading-relaxed mt-1.5">
                        {item.description}
                    </p>
                </div>

                <div className="space-y-3 pt-1">
                    <div className="font-geist text-dark text-lg sm:text-xl font-bold">
                        {item.price}
                    </div>

                    {/* <div>
                        <Button onClick={onAddToCart} className="inline-block">
                            Order Now
                        </Button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

function Divider() {
    return <div className="w-full h-px bg-[#C92E05]" />
}

/* Main component */
export default function PizzaMenu() {
    const [activeCategory, setActiveCategory] = useState<PizzaMenuCategory>("most popular");
    const { openModal } = useOrderModal();

    const filteredItems = pizzaMenuItems.filter(
        (item) => item.category === activeCategory
    );

    return (
        <section className="relative w-full bg-[#FFF8F0] min-h-screen flex flex-col justify-between overflow-x-clip">
            {/* Top Checkered Banner */}
            <CheckerStrip />

            {/* Main Content Container */}
            <div className="w-full max-w-7xl 2xl:max-w-[1450px] mx-auto px-4 py-10 sm:px-8 sm:py-14 lg:pb-40 lg:px-12 flex-1 space-y-8 sm:space-y-10 lg:space-y-16">
                {/* Title & Category Filter Tabs Header */}
                <div className="sticky top-0 z-30 bg-[#FFF8F0] pt-2 pb-4 space-y-6">
                    <BlurInText
                        text="OUR SIGNATURE PIZZAS"
                        as="h2"
                        className="text-primary font-geist font-bold uppercase leading-tight tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    />

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-4 pt-2 overflow-x-auto scrollbar-hide" >
                        {pizzaMenuCategories.map((item, index) => {
                            const isActive = activeCategory === item;
                            return (
                                <Button
                                    key={index}
                                    variant={isActive ? "primary" : "white"}
                                    onClick={() => setActiveCategory(item)}
                                    className="inline-block whitespace-nowrap"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Button>
                            )
                        })}
                    </div>
                </div>

                {/* Menu Cards Grid with Row Dividers */}
                <div className="space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {filteredItems.map((item, index) => {
                            // Show a light horizontal divider after every pair of items (row separator)
                            const showDivider =
                                index > 0 &&
                                index % 2 === 1 &&
                                index < filteredItems.length - 1;

                            return (
                                <div key={item.id} className="contents">
                                    <PizzaCard item={item} onAddToCart={openModal} />
                                    {showDivider && (
                                        <div className="col-span-1 lg:col-span-2 my-2 sm:my-3">
                                            <Divider />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Checkered Banner */}
            <CheckerStrip />
        </section>
    );
}