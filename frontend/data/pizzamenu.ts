import { assets } from "./assets";

export type PizzaMenuCategory =
  | "most popular"
  | "features"
  | "combos"
  | "signature pizzas"
  | "custom pizzas"
  | "calzone"
  | "salads"
  | "sides"
  | "dipping sauces"
  | "desserts"
  | "drinks";

export type PizzaMenuItemType = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: PizzaMenuCategory;
  image?: string;
};

export const pizzaMenuCategories: PizzaMenuCategory[] = [
  "most popular",
  "features",
  "combos",
  "signature pizzas",
  "custom pizzas",
  "calzone",
  "salads",
  "sides",
  "dipping sauces",
  "desserts",
  "drinks",
];

export const pizzaMenuItems: PizzaMenuItemType[] = [
  // =====================================================
  // MOST POPULAR
  // =====================================================

  {
    id: 1,
    name: "New Yorker Pizza",
    description:
      "Vine-Ripened Tomato Sauce, Grass-Fed Mozzarella, Cup & Char Pepperoni, Sausage, Creamy Ricotta, Fresh Basil, Grated Pecorino",
    price: "$20.00",
    category: "most popular",
    image: assets.images.menuItem.mostPopular1,
  },

  {
    id: 2,
    name: "Hot Honey Roni Pizza",
    description:
      "Vine-Ripened Tomato Sauce, Grass-Fed Mozzarella, Cup & Char Pepperoni, Mike's Hot Honey Drizzle, Fresh Basil, Grated Pecorino",
    price: "$20.00",
    category: "most popular",
    image: assets.images.menuItem.mostPopular2,
  },

  {
    id: 3,
    name: "Margherita Pizza (V)",
    description:
      "Vine-Ripened Tomato Sauce, Fior Di Latte, Fresh Basil, Grated Pecorino, Extra Virgin Olive Oil",
    price: "$20.00",
    category: "most popular",
    image: assets.images.menuItem.mostPopular3,
  },

  {
    id: 4,
    name: "Combo Three",
    description: "Two Signature Pizzas",
    price: "$38.00",
    category: "most popular",
    image: assets.images.menuItem.mostPopular4,
  },

  // =====================================================
  // FEATURES
  // =====================================================

  {
    id: 5,
    name: "The Ultimate Pizza Deal",
    description:
      "Choose Any Two Medium Signature Pizzas, Two Dips and Two Drinks",
    price: "$39.99",
    category: "features",
    image: assets.images.menuItem.features1,
  },

  // =====================================================
  // COMBOS
  // =====================================================

  {
    id: 7,
    name: "The Ultimate Pizza Deal",
    description:
      "Choose Any Two Medium Signature Pizzas, Two Dips and Two Drinks",
    price: "$39.99",
    category: "combos",
    image: assets.images.menuItem.combo1,
  },

  {
    id: 8,
    name: "Combo One",
    description:
      "Create your own custom specially priced ONE topping pizza",
    price: "$12.49",
    category: "combos",
    image: assets.images.menuItem.combo2,
  },

  {
    id: 9,
    name: "Combo Two",
    description: "Signature pizza + 2 drinks + 2 dips",
    price: "$28.00",
    category: "combos",
    image: assets.images.menuItem.combo3,
  },

  {
    id: 10,
    name: "Combo Three",
    description: "Two Signature Pizzas",
    price: "$38.00",
    category: "combos",
    image: assets.images.menuItem.combo4,
  },

  // =====================================================
  // SIGNATURE PIZZAS
  // =====================================================

  {
    id: 11,
    name: "Vodka Vice Pizza",
    description:
      "Creamy Vodka Sauce, Fior Di Latte, Cup & Char Pepperoni, Fresh Basil, Grated Pecorino",
    price: "$22.00",
    category: "signature pizzas",
    image: assets.images.menuItem.singnature1,
  },

  {
    id: 12,
    name: "New Yorker Pizza",
    description:
      "Vine-Ripened Tomato Sauce, Grass - Fed Mozzarella, Cup & Char Pepperoni, Sausage, Creamy Ricotta, Fresh Basil, Grated Pecorino",
    price: "$20.00",
    category: "signature pizzas",
    image: assets.images.menuItem.singnature2,
  },

  {
    id: 13,
    name: "Hot Honey Roni Pizza",
    description:
      "Vine-Ripened Tomato Sauce, Grass - Fed Mozzarella, Cup & Char Pepperoni, Mike's Hot Honey Drizzle, Fresh Basil, Grated Pecorino",
    price: "$20.00",
    category: "signature pizzas",
    image: assets.images.menuItem.singnature3,
  },

  {
    id: 14,
    name: "Margherita Pizza (V)",
    description:
      "Vine-Ripened Tomato Sauce, Fior Di Latte, Fresh Basil, Grated Pecorino, Extra Virgin Olive Oil",
    price: "$20.00",
    category: "signature pizzas",
    image: assets.images.menuItem.singnature4,
  },

  {
    id: 15,
    name: "Mad Soppra Pizza",
    description:
      "Vine-Ripened Tomato sauce, Grass - Fed Mozzarella, Freshly Sliced Hot Soppressata, Red Onions, Fresh Jalapeños, Mike’s Hot Honey Drizzle",
    price: "$22.00",
    category: "signature pizzas",
    image: assets.images.menuItem.singnature5,
  },

  {
    id: 16,
    name: "Farm Fresh Pizza (V)",
    description:
      "Vine-Ripened Tomato Sauce, Grass-Fed Mozzarella, Green Peppers, Red Onions, Portobello Mushrooms",
    price: "$20.00",
    category: "signature pizzas",
    image: assets.images.menuItem.singnature6,
  },

  {
    id: 17,
    name: "Butcher Pizza",
    description:
      "Vine-Ripened Tomato Sauce, Grass - Fed Mozzarella, Cup & Char Pepperoni, Sausage, Bacon Strips",
    price: "$22.00",
    category: "signature pizzas",
    image: assets.images.menuItem.signature7,
  },

  {
    id: 18,
    name: "Chickpotle Pizza",
    description:
      "Vine-Ripened Tomato Sauce, Grass-Fed Mozzarella, Chipotle Chicken, Red Onions, Pineapple, Fresh Jalapenos",
    price: "$22.00",
    category: "signature pizzas",
    image: assets.images.menuItem.signature8,
  },

  {
    id: 19,
    name: "Bruschetta Pizza (V)",
    description:
      "Vine-Ripened Tomato Sauce, Grass-Fed Mozzarella, Marinated Cherry Tomatoes, Aged Parmigiano Reggiano, Fresh Basil, EVOO, Balsamic Glaze",
    price: "$20.00",
    category: "signature pizzas",
    image: assets.images.menuItem.signature9,
  },

  {
    id: 20,
    name: "Funghi Pizza (V)",
    description:
      "Extra Virgin Olive Oil Base, Grass-Fed Mozzarella, Portobello Mushrooms, Ricotta, Fresh Basil, Grated Pecorino, Truffle Oil",
    price: "$20.00",
    category: "signature pizzas",
    image: assets.images.menuItem.signature10,
  },

  {
    id: 21,
    name: "Prosciutto Arugula Pizza",
    description:
      "Garlic Sauce, Grass-Fed Mozzarella, Sliced Fresh Prosciutto, Arugula, Grated Pecorino, Balsamic",
    price: "$20.00",
    category: "signature pizzas",
    image: assets.images.menuItem.signature11,
  },

  {
    id: 22,
    name: "Figgy Piggy Pizza",
    description:
      "Fig Jam, Grass-Fed Mozzarella, Bacon Strips, Ricotta, Fresh Basil, Grated Pecorino",
    price: "$20.00",
    category: "signature pizzas",
    image: assets.images.menuItem.signature12,
  },

  {
    id: 23,
    name: "Pepperoni Pizza",
    description:
      "Vine-Ripened Tomato Sauce, Grass-Fed Mozzarella, Cup & Char Pepperoni",
    price: "$17.49",
    category: "signature pizzas",
    image: assets.images.menuItem.signature13,
  },

  {
    id: 24,
    name: "Barbecue Chicken Pizza",
    description:
      "Smokey Barbecue Sauce, Grass-Fed Mozzarella, Chicken, Red Onions, Fresh Jalapenos",
    price: "$22.00",
    category: "signature pizzas",
    image: assets.images.menuItem.signature14,
  },

  {
    id: 25,
    name: "Cheese Pizza",
    description:
      "Vine-Ripened Tomato Sauce, Grass-Fed Mozzarella",
    price: "$17.49",
    category: "signature pizzas",
    image: assets.images.menuItem.signature15,
  },

  // =====================================================
  // CUSTOM PIZZAS
  // =====================================================

  {
    id: 26,
    name: "Custom Pizzas",
    description: "Build Your Own Pizza",
    price: "$20.00",
    category: "custom pizzas",
    image: assets.images.menuItem.custom1,
  },

  // =====================================================
  // CALZONE
  // =====================================================

  {
    id: 27,
    name: "Calzone",
    description: "Calzone",
    price: "$12.49",
    category: "calzone",
    image: assets.images.menuItem.calzone1,
  },

  // =====================================================
  // SALADS
  // =====================================================

  {
    id: 28,
    name: "Caesar Salad",
    description:
      "Romaine Lettuce, Shaved Pecorino Cheese, Oven Baked Croutons, Traditional Caesar Dressing",
    price: "$8.49",
    category: "salads",
    image: assets.images.menuItem.salad1,
  },

  {
    id: 29,
    name: "Arugula Salad",
    description:
      "Fresh Arugula, Sweet Cherry Tomatoes, Crunchy Walnuts and Parmigiano Reggiano - Finished with Balsamic bliss & Lemon Wedge",
    price: "$10.49",
    category: "salads",
    image: assets.images.menuItem.salad2,
  },

  // =====================================================
  // SIDES
  // =====================================================

  {
    id: 30,
    name: "Wings 10pcs",
    description: "",
    price: "$15.00",
    category: "sides",
    image: assets.images.menuItem.side1,
  },

  {
    id: 31,
    name: "Wings 20pcs",
    description: "",
    price: "$28.00",
    category: "sides",
    image: assets.images.menuItem.side2,
  },

  {
    id: 32,
    name: "Boneless Chicken 10pcs",
    description: "",
    price: "$15.00",
    category: "sides",
    image: assets.images.menuItem.side3,
  },

  {
    id: 33,
    name: "Boneless Chicken 20pcs",
    description: "",
    price: "$28.00",
    category: "sides",
    image: assets.images.menuItem.side4,
  },

  {
    id: 34,
    name: "Cheesy Bread",
    description:
      "Garlic spread, melted cheese, Pecorino and parsley, served with marinara.",
    price: "$12.49",
    category: "sides",
    image: assets.images.menuItem.side5,
  },

  {
    id: 35,
    name: "Curly Fries",
    description: "",
    price: "$9.00",
    category: "sides",
    image: assets.images.menuItem.side6,
  },

  // =====================================================
  // DIPPING SAUCES
  // =====================================================

  {
    id: 36,
    name: "Garlic Dip (House Special)",
    description: "",
    price: "$1.75",
    category: "dipping sauces",
    image: assets.images.menuItem.dippingSauce1,
  },

  {
    id: 37,
    name: "Mike's Hot Honey",
    description: "",
    price: "$3.00",
    category: "dipping sauces",
    image: assets.images.menuItem.dippingSauce2,
  },

  {
    id: 38,
    name: "Ranch Dip",
    description: "",
    price: "$1.75",
    category: "dipping sauces",
    // image: assets.images.menuItem.dippingSauce3,
  },

  {
    id: 39,
    name: "Honey Garlic Sauce",
    description: "",
    price: "$1.75",
    category: "dipping sauces",
    // image: assets.images.menuItem.dippingSauce4,
  },

  {
    id: 40,
    name: "Chipotle Sauce",
    description: "",
    price: "$1.75",
    category: "dipping sauces",
    // image: assets.images.menuItem.dippingSauce5,
  },

  {
    id: 41,
    name: "BBQ Sauce",
    description: "",
    price: "$1.75",
    category: "dipping sauces",
    // image: assets.images.menuItem.dippingSauce6,
  },

  {
    id: 42,
    name: "Buffalo Sauce",
    description: "",
    price: "$1.75",
    category: "dipping sauces",
    // image: assets.images.menuItem.dippingSauce7,
  },

  {
    id: 43,
    name: "Mike's Hot Honey Bottle 12oz",
    description:
      "A sweet-heat combo of honey infused with chili peppers that adds the perfect kick to all your favorite foods. Drizzle it on pizza, chicken, BBQ, and cheese boards, or use it in cocktails, dressings, and marinades.",
    price: "$19.90",
    category: "dipping sauces",
    image: assets.images.menuItem.dippingSauce8,
  },

  {
    id: 44,
    name: "Mike's Hot Honey Extra Hot 12oz",
    description: "",
    price: "$21.90",
    category: "dipping sauces",
    image: assets.images.menuItem.dippingSauce9,
  },

  // =====================================================
  // DESSERTS
  // =====================================================

  {
    id: 45,
    name: "Tiramisu (110G)",
    description:
      "Crunchy biscuit base with mascarpone chantilly cream, decorated with biscuits and cococa",
    price: "$7.00",
    category: "desserts",
    image: assets.images.menuItem.dessert1,
  },

  {
    id: 46,
    name: "Ricotta & Pistachio Cake",
    description:
      "Pistachio and Ricotta creams separated by sponge cake, decorated with crushed pistachios and dusted with powdered sugar",
    price: "$8.00",
    category: "desserts",
    image: assets.images.menuItem.dessert2,
  },

  // =====================================================
  // DRINKS
  // =====================================================

  {
    id: 47,
    name: "Brio Bottle",
    description: "",
    price: "$3.49",
    category: "drinks",
    image: assets.images.menuItem.drink1,
  },

  {
    id: 48,
    name: "Coke Can",
    description: "",
    price: "$1.99",
    category: "drinks",
    // image: assets.images.menuItem.drink2,
  },

  {
    id: 49,
    name: "Coke Zero Can",
    description: "",
    price: "$1.99",
    category: "drinks",
    // image: assets.images.menuItem.drink3,
  },

  {
    id: 50,
    name: "Diet Coke Can",
    description: "",
    price: "$1.99",
    category: "drinks",
    // image: assets.images.menuItem.drink4,
  },

  {
    id: 51,
    name: "Canada Dry Can",
    description: "",
    price: "$1.99",
    category: "drinks",
    // image: assets.images.menuItem.drink5,
  },

  {
    id: 52,
    name: "Nestea Iced Tea Can",
    description: "",
    price: "$1.99",
    category: "drinks",
    // image: assets.images.menuItem.drink6,
  },

  {
    id: 53,
    name: "Sprite Can",
    description: "",
    price: "$1.99",
    category: "drinks",
    // image: assets.images.menuItem.drink7,
  },

  {
    id: 54,
    name: "Eska Water",
    description: "",
    price: "$2.49",
    category: "drinks",
    // image: assets.images.menuItem.drink8,
  },

  {
    id: 55,
    name: "Brio Aranchiata Rossa",
    description: "",
    price: "$3.49",
    category: "drinks",
    image: assets.images.menuItem.drink9,
  },

  {
    id: 56,
    name: "S. Pellegrino Carbonated Water",
    description: "",
    price: "$3.49",
    category: "drinks",
    image: assets.images.menuItem.drink10,
  },
];