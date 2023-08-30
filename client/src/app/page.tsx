import React from 'react';
import Image from 'next/image';
import Wallet from '@assets/images/Wallet.png';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="h-screen w-screen flex">
      <div className="h-full w-1/2 scale-x-[-1]">
        <Image
          className=""
          src={Wallet}
          alt="Auth"
          width={1000}
          priority={true}
        />
      </div>
      <div className="h-full w-1/2 flex flex-col justify-center pr-40">
        <h1 className="font-extrabold text-7xl">Welcome to</h1>
        <h1 className="font-extrabold text-7xl text-MainYellow">e-Wallet!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          aut? Numquam maxime eos asperiores enim sunt nobis, nulla deleniti
          praesentium fuga, incidunt vero in. Deleniti iure doloremque
          voluptatum amet nemo.
        </p>
        <Link href={'/auth/login'}>Log In</Link>
      </div>
    </div>
  );
}
