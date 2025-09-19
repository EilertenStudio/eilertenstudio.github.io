import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={90}
        height={19}
        priority
      />
    </div>
  );
}