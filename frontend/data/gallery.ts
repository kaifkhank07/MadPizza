export type GalleryPhoto = {
  id: number;
  src: string;
  alt: string;
  rotate: string;
};

export const photos: GalleryPhoto[] = [
  {
    id: 1,
    src: "/assets/Images/gallery1.png",
    alt: "Pizza gathering",
    rotate: "-rotate-3",
  },
  {
    id: 2,
    src: "/assets/Images/gallery2.png",
    alt: "Fresh hot pizza",
    rotate: "rotate-2",
  },
  {
    id: 3,
    src: "/assets/Images/gallery3.png",
    alt: "Pizza night out",
    rotate: "-rotate-1",
  },
  {
    id: 4,
    src: "/assets/Images/gallery4.png",
    alt: "Sharing pizza",
    rotate: "rotate-3",
  },
  {
    id: 5,
    src: "/assets/Images/gallery1.png",
    alt: "Pizza night out",
    rotate: "-rotate-1",
  },
  {
    id: 6,
    src: "/assets/Images/gallery4.png",
    alt: "Sharing pizza",
    rotate: "rotate-3",
  },
];