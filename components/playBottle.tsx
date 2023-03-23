import BottleContext from "@/context/Bottle/BottleContext";
import { useContext, useEffect, useRef } from "react";

const PlayBottleVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const Bottle = useContext(BottleContext) as any;
  const { durationVideo, duration, setDisableForm } = Bottle;

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime >= 20) {
        videoRef.current.playbackRate = 1;
        setDisableForm(true);
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

  return (
    <div className="min-w-[300px] h-[500px]">
      <video
        ref={videoRef}
        src="liquidBottle.mp4"
        muted
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full"
      />
    </div>
  );
};

export default PlayBottleVideo;
