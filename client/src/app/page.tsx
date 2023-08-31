import React from 'react';
import Image from 'next/image';
import Wallet from '@assets/images/landing/Wallet.png';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="h-full w-[46%] scale-x-[-1]">
        <Image
          className=""
          src={Wallet}
          alt="Auth"
          width={1000}
          priority={true}
        />
      </div>
      <div className="h-full w-[46%] flex flex-col justify-center pr-40">
        <h1 className="font-extrabold text-7xl">Welcome to</h1>
        <h1 className="font-extrabold text-7xl text-MainYellow my-2">e-Wallet!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          aut? Numquam maxime eos asperiores enim sunt nobis, nulla deleniti
          praesentium fuga, incidunt vero in. Deleniti iure doloremque
          voluptatum amet nemo.
        </p>
        <Link href={'/auth/login'} className='bg-MainYellow w-[40%] p-2 my-4 rounded text-black font-semibold flex justify-center'>
          <button>
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
}
