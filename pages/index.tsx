import PlayBottleVideo from "@/components/playBottle";
import BottleContext from "@/context/Bottle/BottleContext";
import { useContext, useEffect } from "react";

export default function App() {
  const Bottle = useContext(BottleContext) as any;
  const { setDuration } = Bottle;

  useEffect(() => {
    setDuration(localStorage.getItem("duration") || 35);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center ml-10">
      <PlayBottleVideo />
    </div>
  );
}
