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
    title: "Fresh Ingredient",
    description:
      "We specialize in user interface design, front-end development, design process.",
  },
  {
    id: 3,
    img: assets.images.topPick3,
    title: "Fresh Ingredient",
    description:
      "We specialize in user interface design, front-end development, design process.",
  },
];