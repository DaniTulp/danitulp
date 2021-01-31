import Image from "next/image";

export function Profile({ style }) {
  return (
    <div className="relative">
      <Image
        src="/profile.jpg"
        className="object-cover w-32 h-32 rounded-full"
        height={128}
        width={128}
      />
      <div className="absolute inset-0 w-32 h-32 rounded-full opacity-25 bg-gradient-to-br from-purple-400 to-teal-400"></div>
    </div>
  );
}
