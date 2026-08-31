import { assets } from "@/data/assets";

export default function PaperCutCard() {
  return (
    <div className="min-h-screen bg-amber-50 p-8 flex items-center justify-center">
      <div className="relative w-full max-w-sm">
        {/* Paper border */}
        <div
          className="absolute inset-0 bg-[#CA2F06]"
          style={{
            maskImage: `url("${assets.images.borderCut}")`,
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage: `url("${assets.images.borderCut}")`,
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