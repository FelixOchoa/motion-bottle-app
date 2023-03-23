import BottleContext from "@/context/Bottle/BottleContext";
import { useContext, useEffect, useRef, useState } from "react";

const PlayBottleVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const Bottle = useContext(BottleContext) as any;
  const { durationVideo, duration } = Bottle;
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
  }, []);

  useEffect(() => {
    if (ended) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }, 5000);
    }
  }, [ended]);

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
