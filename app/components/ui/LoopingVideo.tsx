"use client";

import { useEffect, useRef } from "react";

interface LoopingVideoProps {
  src: string;
  poster: string;
  label: string;
  className?: string;
}

// Muted, looping video that only starts downloading as it nears the screen and only
// plays while visible, so large project videos don't slow down the rest of the page.
const LoopingVideo = ({ src, poster, label, className = "" }: LoopingVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute("src")) {
            video.poster = poster;
            video.src = src;
          }
          // Autoplay can still be refused (e.g. iPhone Low Power Mode); the poster stays up.
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
  }, [src, poster]);

  return (
    <video
      ref={ref}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
};

export default LoopingVideo;
