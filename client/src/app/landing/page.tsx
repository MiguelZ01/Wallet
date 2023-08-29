import React from 'react';
import Image from 'next/image';
import Wallet from '@assets/Wallet.png';


export default function landing() {
  return (
    <div>
      <div>
        <Image className='w-[70%] h-[40%]' src={Wallet} alt='Auth' width='100'/>
      </div>
      <div>
        <h1>Welcome to Wallet!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          aut? Numquam maxime eos asperiores enim sunt nobis, nulla deleniti
          praesentium fuga, incidunt vero in. Deleniti iure doloremque voluptatum
          amet nemo.
        </p>
    </div>
    </div>
  );
}
