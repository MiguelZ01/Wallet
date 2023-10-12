'use client';
import React, { useState } from 'react';
import Google from '@assets/images/login/Google.png';
import Image from 'next/image';
import Auth from '@assets/images/login/Auth.png';
import Link from 'next/link';

export default function Login() {
  const [togglePassword, setTogglePassword] = useState(false);

  const handleTogglePassword = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTogglePassword(!togglePassword);
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-[60%]">
        <section className="w-[40%]">
          <h1 className="text-center mb-8 font-bold text-xl">Bienvenidos</h1>
          <Link
            href="#"
            className="bg-Button flex w-full p-2 items-center rounded"
          >
            <Image
              className="absolute ml-2"
              src={Google}
              alt="google"
              width={25}
            />
            <p className="flex text-black font-medium justify-center w-full">
              Ingresar con google
            </p>
          </Link>

          <div className="flex my-8 items-center">
            <div className="flex-1 border-t border-white h-1/2"></div>
            <div className="mx-4 text-gray-300 h-full">O</div>
            <div className="flex-1 border-t border-white h-1/2"></div>
          </div>

          <form action="">
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email</label>
              <input
                className="bg-Button rounded p-2 text-black"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
              />
            </div>

            <div className="flex flex-col relative">
              <label htmlFor="password">Password</label>
              <input
                className="bg-Button rounded p-2 text-black"
                type={togglePassword ? 'text' : 'password'}
                name="password"
                id="password"
              />
              <button
                onClick={handleTogglePassword}
                className="absolute right-0 px-3 pt-6 h-full text-black"
              >
                {togglePassword ? (
                  <img
                    className="opacity-70"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABH0lEQVR4nO2UvU5CQRCFv4poxELFzkIT8TVAan9ewehDGJFefBsE30ILLbil2lzt4QEwk5xCNzOXxcJQ8CWT3MycM7uZ3buwYtnZBq6AIVAAU0Wh3KU0C7MO9NRsNidMcytPFnvAc0bjWRKvwMG85kfAl2MeAC1gQ9HWiFKdeZtR813gwzFdV2yo6+jfgYYnfgx2btSAe+ATKIG+csbI8T2QcB7MtaV636lZzjgOvKc/FygCUV310qlZztgMvON/XeAsELUrRnSnWifwnqTn4F27oWo1LVI6h1x1OX7R0BVLxV1ieo7+DdiJDM3gRxvpttQVnWDn5j0k46l4+sNT8QLsk8maRjPNaDwBbuRZmC3gQoc2VrOJvgeqmWbFEvMNriXJVcp1zQIAAAAASUVORK5CYII="
                  ></img>
                ) : (
                  <img
                    className="opacity-70"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nO2UvUpDQRCFv8LO4F+rF8GAF19CxFdRqzyBRfRZLBMCaSRCQAjGJoUpLNLEYJFWxSSoZWThXFkna3Jvc7HIgYFlzpnZn5kdWOK/YwsoAdfAEPiSDeUrSZMZK8A5MAGmC2wirYtJhR2g4yVoAidADKzKYvmanq6j2LnYBQYKeAIOUxzIafqKGShHEAWgJ+EdsOFxEVADxrK6bpFgHWgptqdcM7iSoGsEEfAaePs3cf4Bu+Jcrl84EvEJFA1XE+e6Zlvv3JCvarRF5Zgq5w/acl4EbjYW5xcwkm8U0JfFtUMblDNu8B7QX4Y2SJ7oA9gzAXVxDW3ikt/IVzHafX3EmSfyi/ygXk8Qq6C2yC/mVmvA419Ftm3aUusliFTQkaxikm8C94va1H60fsqPdgw8p/lo80bFKXCgkxW0PgNus46KXIZdLuN6ifzwDezZi1/ebTEHAAAAAElFTkSuQmCC"
                  ></img>
                )}
              </button>
            </div>

            <a href="#">
              <p className="flex justify-end text-sm mb-12">
                ¿Olvidaste la contraseña?
              </p>
            </a>

            <Link href="/dashboard">
              <button
                type="submit"
                className="bg-MainYellow w-[100%] text-black rounded p-2 font-medium mb-2 "
              >
                Ingresar
              </button>
            </Link>
            <div className="flex justify-center text-sm">
              <p>
                ¿No tienes cuenta?{' '}
                <Link className="font-semibold" href="/auth/register">
                  Registrate
                </Link>
              </p>
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
