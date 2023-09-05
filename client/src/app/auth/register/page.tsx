'use client';
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import User from '@core/models/user.interface';
import Auth from '@assets/images/login/Auth.png';

export default function Register() {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);

    const newName = event.target.value;
    const newEmail = event.target.value;
    const newPassword = event.target.value;
    const newConfirmPassword = event.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      name: newName,
      email: newEmail,
      password: newPassword,
      confirmPassword: newConfirmPassword,
    }));
  };

  const onSubmit = () => {
    // if (user.password === user.confirmPassword) {
    console.log(user);
    // }
  };

  return (
    <div className="flex w-screen h-screen my-auto">
      <div className="flex flex-col justify-center items-center w-[60%]">
        <section className="w-[40%]">
          <h1 className="text-center mb-8 font-bold text-xl">REGISTRO</h1>
          <form action="">
            <div className="flex flex-col mb-4">
              <label htmlFor="name">Nombre</label>
              <input
                onChange={handleChange}
                className="bg-Button rounded h-8 p-2 text-black"
                type="text"
                name="name"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                className="bg-Button rounded h-8 p-2 text-black"
                type="email"
                name="email"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="password">Contraseña</label>
              <input
                onChange={handleChange}
                className="bg-Button rounded h-8 p-2 text-black"
                type="password"
                name="password"
              />
            </div>

            <div className="flex flex-col mb-8">
              <label htmlFor="confirm">Confirmar contraseña</label>
              <input
                className="bg-Button rounded h-8 p-2 text-black"
                type="password"
                name="confirm"
              />
            </div>

            <div className="flex justify-between">
              <Link
                href="/auth/login"
                className="border border-solid border-20 border-MainYellow text-MainYellow w-[30%] rounded h-8 font-medium mb-2 flex items-center justify-center"
              >
                <button>Cancelar</button>
              </Link>

              <Link
                href="/auth/login"
                className=" bg-MainYellow text-black w-[30%] rounded h-8 font-medium mb-2 flex items-center justify-center"
              >
                <button type="submit" onClick={onSubmit}>
                  Registrar
                </button>
              </Link>
            </div>
          </form>
        </section>
      </div>
      <div className="flex w-[40%] bg-[#ffa500] items-center justify-center">
        <Image
          src={Auth}
          alt="Auth"
          width={1000}
          height={1000}
          className="w-[90%] "
        />
      </div>
    </div>
  );
}
