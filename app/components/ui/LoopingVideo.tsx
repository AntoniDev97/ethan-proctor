"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface LoopingVideoProps {
  src: string;
  label: string;
  // Still of the video's first frame, shown (and lazy-loaded like any other image) until the video can play
  poster?: string;
  sizes?: string;
}

// Muted, looping project video that fills its positioned parent. The poster still loads like the
// page's other images, so it fades in with them; the video only downloads as it nears the screen,
// plays while visible, and fades in over the still once its first frame is ready.
const LoopingVideo = ({ src, label, poster, sizes = "100vw" }: LoopingVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute("src")) video.src = src;
          // Autoplay can still be refused (e.g. iPhone Low Power Mode); the still stays up.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      // Start loading about half a screen before the video scrolls into view
      { rootMargin: "50% 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <>
      {poster && <Image src={poster} alt={label} fill sizes={sizes} className="object-cover" />}
      <video
        ref={ref}
        aria-label={poster ? undefined : label}
        aria-hidden={poster ? true : undefined}
        muted
        loop
        playsInline
        preload="none"
        onLoadedData={() => setReady(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-out ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
};

export default LoopingVideo;
