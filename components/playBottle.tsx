import BottleContext from "@/context/Bottle/BottleContext";
import { useContext, useEffect, useRef, useState } from "react";

const PlayBottleVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const Bottle = useContext(BottleContext) as any;
  const { durationVideo, duration, durationTimeout } = Bottle;
  const [ended, setEnded] = useState(false);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime >= 20) {
        videoRef.current.playbackRate = 1;
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      const newDuration = durationVideo / duration;
      videoRef.current.playbackRate = newDuration;
    }
  }, [duration]);

  useEffect(() => {
    if (ended) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }, durationTimeout * 1000);
    }
  }, [ended, durationTimeout]);

  return (
    <div className="min-w-[500px] h-[600px]">
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
