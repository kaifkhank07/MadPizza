import { assets } from "./assets";

export type PizzaMenuItem = {
  id: number;
  name: string;
  image1: string;
  image2: string;
};

export const menuItems: PizzaMenuItem[] = [
  {
    id: 1,
    name: "Newyorker",
    image1: assets.images.pizza.newyorker,
    image2: assets.images.pizza.newyorker1,
  },
  {
    id: 2,
    name: "Hot Honey Roni",
    image1: assets.images.pizza.hothoneyroni,
    image2: assets.images.pizza.hothoneyroni1,
  },
  {
    id: 3,
    name: "Margherita",
    image1: assets.images.pizza.margherita,
    image2: assets.images.pizza.margherita1,
  },
  {
    id: 4,
    name: "Mad Soppra",
    image1: assets.images.pizza.madsoppra,
    image2: assets.images.pizza.madsoppra1,
  },
  {
    id: 5,
    name: "Vodka Vice",
    image1: assets.images.pizza.vodkavice,
    image2: assets.images.pizza.vodkavice1,
  },
];