import BottleContext from "@/context/Bottle/BottleContext";
import { useContext, useEffect, useRef, useState } from "react";

const PlayBottleVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const Bottle = useContext(BottleContext) as any;
  const { duration, durationTimeout } = Bottle;
  const [ended, setEnded] = useState(false);
  const [counterSeconds, setCounterSeconds] = useState(0);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime >= 20 && counterSeconds < duration) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  };

  useEffect(() => {
    if (counterSeconds != duration) {
      const interval = setInterval(() => {
        setCounterSeconds((counterSeconds) => counterSeconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [counterSeconds]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [duration]);

  useEffect(() => {
    if (ended) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
          setCounterSeconds(0);
        }
      }, durationTimeout * 1000);
    }
  }, [ended, durationTimeout]);

  return (
    <div className="min-w-[500px] h-screen">
      <video
        ref={videoRef}
        src="liquidBottle.mp4"
        muted
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setEnded(true)}
        className="w-full h-full"
      />
    </div>
  );
};

export default PlayBottleVideo;
