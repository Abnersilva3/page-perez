"use client";

import { useEffect, useRef, useState } from "react";

const HOLD_MS = 10_000;
const FADE_MS = 800;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    video.muted = true;

    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timers.push(id);
    };

    const play = () => {
      video.play().catch(() => {});
    };

    const restartWithFade = () => {
      setFading(true);
      later(() => {
        video.currentTime = 0;
        setFading(false);
        later(play, FADE_MS);
      }, FADE_MS);
    };

    const onEnded = () => {
      video.pause();
      later(restartWithFade, HOLD_MS);
    };

    video.addEventListener("ended", onEnded);

    if (video.ended) {
      onEnded();
    } else {
      play();
    }

    return () => {
      video.removeEventListener("ended", onEnded);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={`object-cover w-full h-full transition-opacity duration-700 ease-in-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      muted
      playsInline
      preload="auto"
      poster="/img/poster-hero.jpg"
    >
      <source src="/img/video.mp4" type="video/mp4" />
    </video>
  );
}
