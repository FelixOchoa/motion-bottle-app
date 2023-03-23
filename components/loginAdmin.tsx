import { isLogin } from "@/utils";
import { useState } from "react";

const LoginAdmin = () => {
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLogin(password);
  };

  return (
    <div className="bg-red-400 min-h-screen flex justify-center items-center">
      <div className="bg-white w-[700px] h-full rounded-lg shadow-lg px-6 py-10 flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="username">Nombre de Usuario</label>
            <input
              type="text"
              name="username"
              id="username"
              value="Administrador"
              disabled
              className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-red-400 text-white rounded-md py-2 font-bold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 ease-in-out duration-200"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
