// export default function PaperCutCard() {
//   return (
//     <div className="min-h-screen bg-amber-50 p-8 flex items-center justify-center">
//       <div className="relative w-full max-w-sm">
//         {/* Paper border */}
//         <svg
//           className="absolute inset-0 h-full w-full pointer-events-none"
//           viewBox="0 0 563 191"
//           preserveAspectRatio="none"
//         >
//           <defs>
//             <filter
//               id="paper-edge"
//               x="-5%"
//               y="-5%"
//               width="110%"
//               height="110%"
//             >
//               <feTurbulence
//                 type="fractalNoise"
//                 baseFrequency="0.12"
//                 numOctaves="3"
//                 seed="5095"
//                 result="noise"
//               />

//               <feDisplacementMap
//                 in="SourceGraphic"
//                 in2="noise"
//                 scale="8"
//                 xChannelSelector="R"
//                 yChannelSelector="G"
//               />
//             </filter>
//           </defs>

//           <rect
//             x="4"
//             y="4"
//             width="555"
//             height="183"
//             rx="20"
//             fill="#CA2F06"
//             filter="url(#paper-edge)"
//           />
//         </svg>

//         {/* Content */}
//         <div className="relative m-1 rounded-[18px] bg-[#CA2F06] p-6">
//           <h3 className="font-bold text-lg text-neutral-800">
//             Paper Cut Edge
//           </h3>

//           <p className="mt-2 text-sm text-neutral-600">
//             This card features an irregular paper-cut style edge.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function PaperCutCard() {
  return (
    <div className="min-h-screen bg-amber-50 p-8 flex items-center justify-center">
      <div className="relative w-full max-w-sm">
        {/* Paper border */}
        <div
          className="absolute inset-0 bg-[#CA2F06]"
          style={{
            maskImage: 'url("/assets/Images/border cut.svg")',
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage: 'url("/assets/Images/border cut.svg")',
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div className="relative m-1 rounded-[18px] bg-[#CA2F06] p-6">
          <h3 className="font-bold text-lg text-neutral-800">
            Paper Cut Edge
          </h3>

          <p className="mt-2 text-sm text-neutral-600">
            This card features an irregular paper-cut style edge.
          </p>
        </div>
      </div>
    </div>
  );
}