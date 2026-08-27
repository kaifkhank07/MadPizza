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
    img: "/assets/Images/top-pick1.jpg",
    title: "Hot",
    btn: { text: "Order Now", href: "/#menu" },
  },
  {
    id: 2,
    img: "/assets/Images/top-pick2.jpg",
    title: "Fresh Ingredient",
    description:
      "We specialize in user interface design, front-end development, design process.",
  },
  {
    id: 3,
    img: "/assets/Images/top-pick3.jpg",
    title: "Fresh Ingredient",
    description:
      "We specialize in user interface design, front-end development, design process.",
  },
];