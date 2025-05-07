// components/mdx/Image.tsx
"use client";

import { useState } from 'react';
import NextImage from 'next/image';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export function Image({ src, alt, width, height, caption }: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <figure className="my-8">
        <div 
          onClick={() => setIsOpen(true)}
          className="cursor-zoom-in transition-all hover:opacity-90"
        >
          <NextImage
            src={src}
            alt={alt}
            width={width || 1920}
            height={height || 1080}
            className="rounded-lg"
            quality={100}
            priority={true}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
        {caption && (
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            {caption}
          </figcaption>
        )}
      </figure>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
          <div className="relative w-full h-full min-h-[80vh]">
            <NextImage
              src={src}
              alt={alt}
              fill
              className="object-contain"
              quality={100}
              priority={false}
              sizes="90vw"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}