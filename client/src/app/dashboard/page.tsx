import React from 'react';
import Navbar from '@components/navbar/navbar';
import Coins from '@assets/images/dashboard/Coins.png'
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div>
        <div className='p-4 flex'>
          <div className='bg-Button w-[20%] text-black p-2 rounded flex mr-4'>
            <Image src={Coins} width={50} alt='Coins' className='mr-6 ml-2' />
            <div className='font-semibold '>
              <p className='text-[#3a3938]'>
                Efectivo
              </p>
              <p>
                COP 400.000
              </p>
            </div>
          </div>
          <div className='bg-Button w-[20%] text-black p-2 rounded flex mr-4'>
            <Image src={Coins} width={50} alt='Coins' className='mr-6 ml-2' />
            <div className='font-semibold '>
              <p className='text-[#3a3938]'>
                Efectivo
              </p>
              <p>
                COP 400.000
              </p>
            </div>
          </div>
          <div className='bg-Button w-[20%] text-black p-2 rounded flex'>
            <Image src={Coins} width={50} alt='Coins' className='mr-6 ml-2' />
            <div className='font-semibold '>
              <p className='text-[#3a3938]'>
                Efectivo
              </p>
              <p>
                COP 400.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
