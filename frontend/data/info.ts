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

export type InfoItem = {
  name: string;
  email: string;
  mobile: string;
  address: string;
  location?: string;
  socials?: SocialItem[];
  schedule?: ScheduleItem[];
  developBy: DevelopBy;
};



export const info: InfoItem[] = [
  {
    name: " MadPizza",
    email: "info@madpizza.com",
    mobile: "+1 234 567 890",
    address: "77 Qintai Rd, Tianjin, China",
    location: "77 Qintai Rd, Tianjin, China",
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