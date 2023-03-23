import { ModalWinner } from "@/components/modalWinner";
import PlayBottleVideo from "@/components/playBottle";
import Register from "@/components/register";
import BottleContext from "@/context/Bottle/BottleContext";
import { useContext, useEffect, useState } from "react";

export default function App() {
  const Bottle = useContext(BottleContext) as any;
  const { disableForm, setDuration } = Bottle;
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setDuration(localStorage.getItem("duration") || 35);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center pr-10 max-md:flex-col max-md:pr-0 max-md:px-auto">
      <PlayBottleVideo />
      <Register />
      {disableForm && openModal && (
        <ModalWinner openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
}
