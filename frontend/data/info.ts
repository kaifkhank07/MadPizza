import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export type SocialItem = {
  label: string;
  href: string;
  Icon: any;
};

export type ScheduleItem = {
  day: string;
  hours: string;
};

export type DevelopBy = {
  name: string;
  url: string;
}

export type Branch = {
  name: string;
  address: string;
  mobile: string;
  email: string;
  location?: string;
  orderUrl?: string;
};

export type InfoItem = {
  name: string;
  branches: Branch[];
  socials?: SocialItem[];
  schedule?: ScheduleItem[];
  developBy: DevelopBy;
};

export const info: InfoItem[] = [
  {
    name: "MadPizza",
    branches: [
      {
        name: "Bolton",
        address: "15 Allan Drive",
        mobile: "(905) 951-3334",
        email: "inquiries@themadpizza.ca",
        location: "15 Allan Drive, Bolton, ON",
        orderUrl: "https://order.toasttab.com/online/mad-pizza-bolton-unit-14-15-allan-drive",
      },
      {
        name: "Waterloo",
        address: "572 King St N",
        mobile: "(548) 889-5647",
        email: "waterloo@themadpizza.ca",
        location: "572 King St N, Waterloo, ON",
        orderUrl: "https://order.toasttab.com/online/mad-pizza-waterloo",
      },
    ],
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/madpizza.ca", Icon: FaInstagram },
      { label: "Facebook", href: "https://www.facebook.com/p/MAD-Pizza-61568901476386", Icon: FaFacebookF },
      { label: "Tiktok", href: "https://www.tiktok.com/@madpizza.ca", Icon: FaTiktok },
    ],
    schedule: [
      { day: "Mon", hours: "Closed" },
      { day: "Tue to Thu", hours: "11 AM – 10 PM" },
      { day: "Fri", hours: "Closed" },
      { day: "Sat to Sun", hours: "12 PM – 7 PM" },
    ],
    developBy: {
      name: "Buzzlink Studios",
      url: "https://buzzlinkstudios.com",
    }
  },
];