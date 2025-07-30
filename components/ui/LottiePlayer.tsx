"use client";

import Lottie from "lottie-react";
import animationData from "@/data/confetti.json";

const LottiePlayer = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <Lottie
      animationData={animationData}
      loop={isPlaying}
      autoplay={isPlaying}
      style={{ height: 200, width: 400 }}
    />
  );
};

export default LottiePlayer;
