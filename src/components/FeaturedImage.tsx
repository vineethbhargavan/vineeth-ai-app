// components/FeaturedImage.tsx
import Image from 'next/image';

interface FeaturedImageProps {
  src: string;
  alt: string;
}

export function FeaturedImage({ src, alt }: FeaturedImageProps) {
  return (
    <div className="relative w-full h-[400px] mb-8 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg transition-transform hover:scale-105 duration-500"
        priority
      />
    </div>
  );
}