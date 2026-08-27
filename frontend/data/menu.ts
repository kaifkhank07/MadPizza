export type PizzaMenuItem = {
  id: number;
  name: string;
  image1: string;
  image2: string;
};

export const menuItems: PizzaMenuItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    image1: "/assets/Images/pizza/Margherita Pizza.png",
    image2: "/assets/Images/pizza/Margherita Pizza1.png",
  },
  {
    id: 2,
    name: "Prosciutto Arugula",
    image1: "/assets/Images/pizza/Prosciutto Arugula.png",
    image2: "/assets/Images/pizza/Prosciutto Arugula1.png",
  },
  {
    id: 3,
    name: "Funghi",
    image1: "/assets/Images/pizza/Funghi.png",
    image2: "/assets/Images/pizza/Funghi1.png",
  },
  {
    id: 4,
    name: "Figgy Piggy",
    image1: "/assets/Images/pizza/Figgy Piggy.png",
    image2: "/assets/Images/pizza/Figgy Piggy1.png",
  },
  {
    id: 5,
    name: "Chickpotle",
    image1: "/assets/Images/pizza/Chickpotle.png",
    image2: "/assets/Images/pizza/Chickpotle1.png",
  },
];