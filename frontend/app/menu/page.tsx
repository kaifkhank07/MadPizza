import type { Metadata } from "next";
import PizzaMenu from "@/components/menu/PizzaMenu";

export const metadata: Metadata = {
    title: "Menu | MAD Pizza",
    description: "Mad Pizza Menu",
};

export default function Menu() {
    return (
        <main>
            <PizzaMenu />
        </main>
    );
}
