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
    img: "/assets/Images/top-pick1.jpg",
    quote:
      "The pizza is a perfect combination of flavours, truly a work of art. Nice crispy crust, super fresh ingredients, excellent toppings. Highly recommend!",
    name: "Fuchsia Dunlop",
    role: "Manager",
  },
  {
    id: 2,
    img: "/assets/Images/top-pick2.jpg",
    quote:
      "Absolutely incredible pizza! The dough is perfectly chewy, the sauce is rich and flavourful, and every bite feels like pure bliss. Will be back every week.",
    name: "James Rivera",
    role: "Food Critic",
  },
  {
    id: 3,
    img: "/assets/Images/top-pick3.jpg",
    quote:
      "Best pizza I've had outside of Naples. The wood-fired crust has that perfect char and the fresh mozzarella just melts in your mouth.",
    name: "Sofia Martini",
    role: "Regular Customer",
  },
];