import Image from "next/image";

export function HandsDivider() {
  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <Image
        src="/assets/images/general/hands.png"
        alt=""
        width={80}
        height={80}
        unoptimized
        className="w-16"
      />
      <hr className="w-full border-brand-400" />
    </div>
  );
}
