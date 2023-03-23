export const ModalWinner = ({ openModal, setOpenModal }: any) => {
  const handleModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="max-md:w-full w-[700px] h-[400px] flex flex-col shadow-xl rounded-xl border px-7 py-7 bg-white justify-center">
        <h1 className="text-2xl font-bold text-center">
          ¡Felicidades has ganado un premio!
        </h1>
        <p className="text-base pt-2 text-center">
          Eres el ganador de: Premio Ganado
        </p>
        <div className="pt-7 text-center text-lg">
          <p>Número de factura</p>
          <p>Nombre</p>
          <p>Correo electrónico</p>
          <p>Teléfono</p>
        </div>
        <button
          className="mt-7 w-[100px] self-center bg-red-500 text-white rounded-md py-2 font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 ease-in-out duration-200"
          onClick={handleModal}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
