import { assets } from "./assets";

export type GalleryPhoto = {
  id: number;
  src: string;
  alt: string;
  rotate: string;
};

export const photos: GalleryPhoto[] = [
  {
    id: 1,
    src: assets.images.gallery1,
    alt: "Pizza gathering",
    rotate: "-rotate-3",
  },
  {
    id: 2,
    src: assets.images.gallery2,
    alt: "Fresh hot pizza",
    rotate: "rotate-2",
  },
  {
    id: 3,
    src: assets.images.gallery3,
    alt: "Pizza night out",
    rotate: "-rotate-1",
  },
  {
    id: 4,
    src: assets.images.gallery4,
    alt: "Sharing pizza",
    rotate: "rotate-3",
  },
  {
    id: 5,
    src: assets.images.gallery1,
    alt: "Pizza night out",
    rotate: "-rotate-1",
  },
  {
    id: 6,
    src: assets.images.gallery4,
    alt: "Sharing pizza",
    rotate: "rotate-3",
  },
];