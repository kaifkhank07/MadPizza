import { assets } from "./assets";

export type TestimonialItem = {
  id: number;
  quote: string;
  name: string;
  role: string;
  img: string;
};

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    img: assets.images.topPick1,
    quote:
      "The pizza is a perfect combination of flavours, truly a work of art. Nice crispy crust, super fresh ingredients, excellent toppings. Highly recommend!",
    name: "Fuchsia Dunlop",
    role: "Manager",
  },
  {
    id: 2,
    img: assets.images.topPick2,
    quote:
      "Absolutely incredible pizza! The dough is perfectly chewy, the sauce is rich and flavourful, and every bite feels like pure bliss. Will be back every week.",
    name: "James Rivera",
    role: "Food Critic",
  },
  {
    id: 3,
    img: assets.images.topPick3,
    quote:
      "Best pizza I've had outside of Naples. The wood-fired crust has that perfect char and the fresh mozzarella just melts in your mouth.",
    name: "Sofia Martini",
    role: "Regular Customer",
  },
];