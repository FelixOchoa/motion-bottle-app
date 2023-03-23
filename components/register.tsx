import { cleanState } from "@/utils";
import { useState, useContext } from "react";
import BottleContext from "@/context/Bottle/BottleContext";

const Register = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const Bottle = useContext(BottleContext) as any;
  const { disableForm } = Bottle;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (localStorage.getItem("listUsers")) {
      const listUser = JSON.parse(localStorage.getItem("listUsers") || "[]");
      listUser.push({ invoiceNumber, name, email, phone });
      localStorage.setItem("listUsers", JSON.stringify(listUser));
      cleanState(setInvoiceNumber, setName, setEmail, setPhone);
    } else {
      localStorage.setItem(
        "listUsers",
        JSON.stringify([{ invoiceNumber, name, email, phone }])
      );
      cleanState(setInvoiceNumber, setName, setEmail, setPhone);
    }
  };

  return (
    <section className="max-md:w-full w-[700px] flex flex-col shadow-xl rounded-xl border px-7 py-7 h-full">
      <h1 className="text-2xl font-bold">¡Puedes ser un ganador!</h1>
      <p className="text-sm pt-2 text-gray-400">
        Ingresa tus datos para continuar
      </p>
      <form className="flex flex-col gap-4 pt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="invoiceNumber">Número de factura</label>
          <input
            type="number"
            name="invoiceNumber"
            id="invoiceNumber"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-300"
            disabled={disableForm}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-300"
            disabled={disableForm}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-300"
            disabled={disableForm}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-300"
            disabled={disableForm}
          />
        </div>
        <button
          type="submit"
          className={`bg-red-500 text-white rounded-md py-2 font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 ease-in-out duration-200 ${
            disableForm ? "cursor-not-allowed" : ""
          }`}
          disabled={disableForm}
        >
          Continuar
        </button>
      </form>
    </section>
  );
};

export default Register;
