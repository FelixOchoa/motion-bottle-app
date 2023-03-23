import BottleContext from "@/context/Bottle/BottleContext";
import { useContext, useState } from "react";

export const ConfigTime = () => {
  const [isFocusDuration, setIsFocusDuration] = useState(false);
  const [isFocusRepeat, setIsFocusRepeat] = useState(false);
  const Bottle = useContext(BottleContext) as any;
  const { duration, durationTimeout, setDuration, setTimeOut } = Bottle;
  const [durationState, setDurationState] = useState<any>(null);
  const [repeat, setRepeatState] = useState<any>(null);

  const handleDuration = (e: any) => {
    if (e.target.value > 0) {
      setDurationState(e.target.value);
    }
  };

  const handleRepeat = (e: any) => {
    setRepeatState(e.target.value);
  };

  const handleSave = () => {
    setDuration(durationState ? durationState : duration);
    setTimeOut(repeat ? repeat : durationTimeout);
  };

  return (
    <div className="w-full flex items-center pb-10">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-center">
          Configuración de la aplicación
        </h1>

        <div className="flex flex-col gap-4 p-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="duration" className="font-medium">
              Duración de la botella
            </label>
            <input
              type="number"
              name="duration"
              id="duration"
              className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-300 border-red-200"
              defaultValue={duration}
              onChange={handleDuration}
              onFocus={() => setIsFocusDuration(true)}
              onBlur={() => setIsFocusDuration(false)}
            />
            {isFocusDuration && (
              <p className="text-xs text-gray-500 font-normal">
                Establece la duración de la botella en segundos
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="duration" className="font-medium">
              Repetir vídeo de la botella
            </label>
            <input
              type="number"
              name="duration"
              id="duration"
              defaultValue={durationTimeout}
              className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-300 border-red-200"
              onChange={handleRepeat}
              onFocus={() => setIsFocusRepeat(true)}
              onBlur={() => setIsFocusRepeat(false)}
            />
            {isFocusRepeat && (
              <p className="text-xs text-gray-500 font-normal">
                Establece la duración del tiempo en el que se repetirá el vídeo
                después de que la botella se haya llenado, en segundos
              </p>
            )}
          </div>
          <button
            className="bg-red-300 px-4 rounded-lg py-2 mt-5"
            onClick={handleSave}
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};
