import { isLogout } from "@/utils";

export const Sidebar = ({ children }: any) => {
  const handleLogout = () => {
    isLogout();
  };
  return (
    <div className="flex flex-row">
      <div className="w-[400px] h-screen bg-red-200 flex flex-col relative">
        <h1 className="text-2xl font-bold text-center mt-4">Mocion</h1>
        <div className="flex flex-col gap-4 mt-10 bg-black/10 rounded-lg pt-2">
          <div className="flex flex-row gap-2 items-center px-2 ml-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>

            <h2 className="text-lg font-semibold">Configuración</h2>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center absolute bottom-5 left-[22%] cursor-pointer hover:bg-black/10 rounded-lg px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>

          <h2 className="text-lg font-semibold" onClick={handleLogout}>
            Cerrar Sesión
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
};
