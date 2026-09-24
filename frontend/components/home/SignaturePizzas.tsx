"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { BlurInText } from "../animations";
import StaggerReveal from "../animations/StaggerReveal";
import TextRoll from "../util/TextRoll";
import { menuItems, type PizzaMenuItem } from "@/data/menu";
import { assets } from "@/data/assets";
import { useOrderModal } from "../util/OrderModalContext";

/* Sub-components */
function MenuItem({
  item,
  onHover,
  onClick
}: {
  item: PizzaMenuItem;
  onHover: (item: PizzaMenuItem) => void;
  onClick: (item: PizzaMenuItem) => void;
}) {
  const num = String(item.id).padStart(2, "0");

  return (
    <li className="flex items-baseline gap-2">
      <span className="text-dark font-medium text-md shrink-0 leading-none">
        {num}
      </span>

      {/* Only handles hover - no UI change */}
      <div onMouseEnter={() => onHover(item)} onClick={() => onClick(item)}>
        <TextRoll
          text={item.name}
          className="text-dark font-normal text-3xl sm:text-5xl lg:text-6xl leading-tight cursor-pointer"
        />
      </div>
    </li>
  );
}

/* Main component */
export default function SignaturePizzas() {
  const [activePizza, setActivePizza] = useState(menuItems[0]);

  const { openModal } = useOrderModal();

  const backImageRef = useRef<HTMLDivElement>(null);
  const frontImageRef = useRef<HTMLDivElement>(null);

  const handlePizzaHover = (pizza: PizzaMenuItem) => {
    if (pizza.id === activePizza.id) return;

    setActivePizza(pizza);
  };

  useEffect(() => {
    const images = [
      backImageRef.current,
      frontImageRef.current,
    ].filter(Boolean);

    if (!images.length) return;

    gsap.killTweensOf(images);

    gsap.fromTo(
      images,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      }
    );
  }, [activePizza]);

  return (
    <section
      id="menu"
      className="relative w-full px-4 py-16 md:px-10 lg:px-16 overflow-hidden scroll-mt-24"
    >
      <div className="w-full max-w-7xl 2xl:max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-20">
        {/* LEFT: Pizza Images */}
        <div className="relative min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-0">
          {/* Back pizza */}
          <div className="absolute top-4 left-4 sm:left-8 md:left-12 w-[55%] sm:w-[57%] md:w-[58%] lg:w-[60%] aspect-square overflow-visible">
            {/* MAIN IMAGE — CHANGES */}
            <div
              ref={backImageRef}
              className="absolute inset-0 overflow-hidden"
            >
              <Image
                src={activePizza.image1}
                alt={activePizza.name}
                fill
                quality={85}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>

            {/* DECORATIVE IMAGE — FIXED */}
            <div
              aria-hidden="true"
              className="absolute -bottom-20 sm:-bottom-24 md:-bottom-28 lg:-bottom-32 left-0 w-24 sm:w-28 md:w-32 lg:w-36 aspect-square overflow-hidden"
              style={{
                animation: "float 4s ease-in-out infinite",
              }}
            >
              <Image
                src={assets.images.decore4}
                alt=""
                fill
                quality={85}
                className="object-cover object-center"
                sizes="150px"
              />
            </div>
          </div>

          {/* Front pizza */}
          <div className="absolute top-24 sm:top-28 md:top-32 lg:top-36 right-4 sm:right-8 md:right-12 lg:right-16 w-[55%] sm:w-[57%] md:w-[58%] lg:w-[60%] aspect-square overflow-visible">
            {/* MAIN IMAGE — CHANGES */}
            <div
              ref={frontImageRef}
              className="absolute inset-0 overflow-hidden"
            >
              <Image
                src={activePizza.image2}
                alt={activePizza.name}
                fill
                quality={85}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>

            {/* DECORATIVE IMAGE — FIXED */}
            <div
              aria-hidden="true"
              className="absolute -top-20 sm:-top-24 md:-top-28 lg:-top-32 right-0 w-24 sm:w-28 md:w-32 lg:w-36 aspect-square overflow-hidden"
              style={{
                animation: "float 4s ease-in-out infinite",
              }}
            >
              <Image
                src={assets.images.decore5}
                alt=""
                fill
                quality={85}
                className="object-cover object-center"
                sizes="150px"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Menu */}
        <div className="space-y-8">
          <BlurInText
            text="OUR BEST-SELLING PIZZAS"
            as="h3"
            className="text-primary font-geist font-bold uppercase leading-tight tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xl"
          />

          <StaggerReveal
            duration={1.5}
            stagger={0.2}
            distance={40}
            start="top 85%"
            className="space-y-8"
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                onHover={handlePizzaHover}
                onClick={openModal}
              />
            ))}
          </StaggerReveal>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { BlurInText } from "../animations";
// import StaggerReveal from "../animations/StaggerReveal";
// import TextRoll from "../util/TextRoll";
// import { menuItems, type PizzaMenuItem } from "@/data/menu";
// import { assets } from "@/data/assets";

// /* Sub-components */
// function MenuItem({
//   item,
//   onHover,
// }: {
//   item: PizzaMenuItem;
//   onHover: (item: PizzaMenuItem) => void;
// }) {
//   const num = String(item.id).padStart(2, "0");

//   return (
//     <li
//       className="flex items-baseline gap-2 cursor-pointer"
//       onMouseEnter={() => onHover(item)}
//     >
//       <span className="text-dark font-medium text-md shrink-0 leading-none">
//         {num}
//       </span>

//       <TextRoll
//         text={item.name}
//         className="text-dark font-normal text-3xl sm:text-5xl lg:text-6xl leading-tight"
//       />
//     </li>
//   );
// }

// /* Main component */
// export default function SignaturePizzas() {
//   const [activePizza, setActivePizza] = useState(menuItems[0]);

//   const backImageRef = useRef<HTMLDivElement>(null);
//   const frontImageRef = useRef<HTMLDivElement>(null);

//   const handlePizzaHover = (pizza: PizzaMenuItem) => {
//     if (pizza.id === activePizza.id) return;

//     setActivePizza(pizza);
//   };

//   useEffect(() => {
//     const images = [
//       backImageRef.current,
//       frontImageRef.current,
//     ].filter(Boolean);

//     if (!images.length) return;

//     gsap.killTweensOf(images);

//     gsap.fromTo(
//       images,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         duration: 0.8,
//         ease: "power2.inOut",
//         // stagger: 0.2,
//       }
//     );
//   }, [activePizza]);

//   return (
//     <section id="menu" className="relative w-full px-4 py-16 md:px-10 lg:px-16 overflow-hidden scroll-mt-24">
//       <div className="w-full max-w-7xl 2xl:max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-20">

//         {/* LEFT: Pizza Images */}
//         <div className="relative min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-0">

//           {/* Back pizza */}
//           <div className="absolute top-4 left-4 sm:left-8 md:left-12 w-[55%] sm:w-[57%] md:w-[58%] lg:w-[60%] aspect-square overflow-visible">

//             {/* MAIN IMAGE — CHANGES */}
//             <div
//               ref={backImageRef}
//               className="absolute inset-0 overflow-hidden"
//             >
//               <Image
//                 src={activePizza.image1}
//                 alt={activePizza.name}
//                 fill
//                 quality={85}
//                 className="object-cover object-center"
//                 sizes="(max-width: 1024px) 50vw, 30vw"
//               />
//             </div>

//             {/* DECORATIVE IMAGE — FIXED */}
//             <div
//               aria-hidden="true"
//               className="absolute -bottom-20 sm:-bottom-24 md:-bottom-28 lg:-bottom-32 left-0 w-24 sm:w-28 md:w-32 lg:w-36 aspect-square overflow-hidden"
//               style={{
//                 animation: "float 4s ease-in-out infinite",
//               }}
//             >
//               <Image
//                 src={assets.images.decore4}
//                 alt=""
//                 fill
//                 quality={85}
//                 className="object-cover object-center"
//                 sizes="150px"
//               />
//             </div>
//           </div>

//           {/* Front pizza */}
//           <div className="absolute top-24 sm:top-28 md:top-32 lg:top-36 right-4 sm:right-8 md:right-12 lg:right-16 w-[55%] sm:w-[57%] md:w-[58%] lg:w-[60%] aspect-square overflow-visible">

//             {/* MAIN IMAGE — CHANGES */}
//             <div
//               ref={frontImageRef}
//               className="absolute inset-0 overflow-hidden"
//             >
//               <Image
//                 src={activePizza.image2}
//                 alt={activePizza.name}
//                 fill
//                 quality={85}
//                 className="object-cover object-center"
//                 sizes="(max-width: 1024px) 50vw, 30vw"
//               />
//             </div>

//             {/* DECORATIVE IMAGE — FIXED */}
//             <div
//               aria-hidden="true"
//               className="absolute -top-20 sm:-top-24 md:-top-28 lg:-top-32 right-0 w-24 sm:w-28 md:w-32 lg:w-36 aspect-square overflow-hidden"
//               style={{
//                 animation: "float 4s ease-in-out infinite",
//               }}
//             >
//               <Image
//                 src={assets.images.decore5}
//                 alt=""
//                 fill
//                 quality={85}
//                 className="object-cover object-center"
//                 sizes="150px"
//               />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Menu */}
//         <div className="space-y-8">
//           <BlurInText
//             text="Our Most Selling Pizzas"
//             as="h3"
//             className="text-primary font-geist font-bold uppercase leading-tight tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xl"
//           />

//           <StaggerReveal
//             duration={1.5}
//             stagger={0.2}
//             distance={40}
//             start="top 85%"
//             className="space-y-8"
//           >
//             {menuItems.map((item) => (
//               <MenuItem
//                 key={item.id}
//                 item={item}
//                 onHover={handlePizzaHover}
//               />
//             ))}
//           </StaggerReveal>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-8px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }