import { assets } from "./assets";

export type BestsellerBtn = {
  text: string;
  href: string;
};

export type BestsellerItem = {
  id: number;
  img: string;
  title: string;
  description?: string;
  btn?: BestsellerBtn;
};

export const bestsellers: BestsellerItem[] = [
  {
    id: 1,
    img: assets.images.topPick1,
    title: "Hot",
    btn: { text: "Order Now", href: "/#menu" },
  },
  {
    id: 2,
    img: assets.images.topPick2,
    title: "SLOW-FERMENTED DOUGH",
    description:
      "Our dough is made in-house and cold-fermented for up to 48 hours, developing deeper flavour and the texture we want in every MAD Pizza.",
  },
  {
    id: 3,
    img: assets.images.topPick3,
    title: "QUALITY INGREDIENTS",
    description:
      "From our tomatoes and cheese to our meats and fresh toppings, we carefully select ingredients that deliver big flavour in every bite.",
  },
];