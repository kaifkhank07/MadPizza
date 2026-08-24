"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryPhoto = {
  id: number;
  src: string;
  alt: string;
  rotate: string;
};

const photos: GalleryPhoto[] = [
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

function CheckerStrip() {
  return (
    <div
      aria-hidden="true"
      className="w-full h-9"
      style={{
        background:
          "repeating-conic-gradient(var(--clr-primary) 0% 25%, var(--clr-off-white) 0% 50%) 0 0 / 36px 36px",
      }}
    />
  );
}

function PolaroidCard({
  photo,
  index,
  onHover,
}: {
  photo: GalleryPhoto;
  index: number;
  onHover: (hovered: boolean) => void;
}) {
  const aspectRatios = [
    "aspect-[3/4]",
    "aspect-[1/1]",
    "aspect-[4/3]",
    "aspect-[3/4]",
    "aspect-[6/5]",
  ];

  const aspectRatio = aspectRatios[index % aspectRatios.length];

  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={`shrink-0 bg-black p-2 ${photo.rotate} hover:rotate-0 transition-transform duration-500 hover:scale-105 hover:z-10`}
    >
      <div
        className={`relative w-40 sm:w-48 md:w-64 ${aspectRatio} overflow-hidden`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          quality={80}
          className="object-cover object-center"
          sizes="256px"
        />
      </div>
    </div>
  );
}

const galleryPhotos = [...photos, ...photos];

export default function PhotoGallery() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <section className="w-full overflow-hidden">
        <CheckerStrip />

        <div className="w-full overflow-hidden py-12 sm:py-20">
          <div
            className="photo-scroll flex w-max items-center gap-4 sm:gap-6 md:gap-8"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {galleryPhotos.map((item, index) => (
              <PolaroidCard
                key={`${item.id}-${index}`}
                photo={item}
                index={index}
                onHover={setIsPaused}
              />
            ))}
          </div>
        </div>

        <CheckerStrip />
      </section>

      <style jsx>{`
        @keyframes photo-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .photo-scroll {
          animation: photo-scroll 35s linear infinite;
        }
      `}</style>
    </>
  );
}