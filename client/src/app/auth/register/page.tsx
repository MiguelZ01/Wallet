import React from 'react';
import Image from 'next/image';
import Auth from '@assets/Auth.png';

export default function Register() {
  return (
    <div className="flex w-screen h-screen my-auto">
      <div className="flex flex-col w-[60%] bg-[#000000] p-28 px-56">
        <h1 className="text-center mb-8">REGISTRO</h1>
        <form action="">
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Nombre</label>
            <input
              className="bg-Button rounded h-8 p-2 text-black"
              type="text"
              name="email"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email</label>
            <input
              className="bg-Button rounded h-8 p-2 text-black"
              type="email"
              name="email"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email">Contraseña</label>
            <input
              className="bg-Button rounded h-8 p-2 text-black"
              type="password"
              name="email"
            />
          </div>

          <div className="flex flex-col mb-8">
            <label htmlFor="email">Confirmar contraseña</label>
            <input
              className="bg-Button rounded h-8 p-2 text-black"
              type="password"
              name="email"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="border border-solid border-20 border-MainYellow text-MainYellow w-[30%] rounded h-8 font-medium mb-2"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="bg-MainYellow w-[30%] text-black rounded h-8 font-medium mb-2"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
      <div className="flex w-[40%] bg-[#ffa500]">
        <Image className="w-[70%] h-[40%]" src={Auth} alt="Auth" width="100" />
      </div>
    </div>
  );
}
