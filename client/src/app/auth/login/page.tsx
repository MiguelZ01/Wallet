import React from 'react';
import Google from '@assets/Google.png';
import Image from 'next/image';
import Auth from '@assets/Auth.png';

export default function Login() {
  return (
    <div className='flex w-screen h-screen my-auto'>
          <div className='flex flex-col w-[60%] bg-[#000000] p-28 px-56'>
            <h1 className='text-center mb-8'>Bienvenidos</h1>
            <a href="#">
              <button className='bg-Button flex w-[100%] h-8 items-center rounded'>
                <Image className='flex ml-2 ' src={Google} alt='google' width='25'/>
                <p className='flex ml-24 text-black font-medium'>Ingresar con google</p>
              </button>
            </a>

            <p className='my-6 flex justify-center'>__________ o ___________</p>

            <form action="">

                  <div className='flex flex-col mb-4'>
                    <label htmlFor="email">
                      Email
                    </label>
                    <input className='bg-Button rounded h-8 p-2 text-black' type="email" name='email'/>
                  </div>

                  <div className='flex flex-col'>
                    <label htmlFor="">
                      Password
                    </label>
                    <input className='bg-Button rounded h-8 p-2 text-black' type="password" name='email'/>
                  </div>

                  <a href="#">
                  <p className='flex justify-end text-sm mb-12' >¿Olvidaste la contraseña?</p>
                  </a>

                  <button type='submit' className='bg-MainYellow w-[100%] text-black rounded h-8 font-medium mb-2'> 
                    Ingresar
                  </button>
                  <div className='flex justify-center text-sm'>
                      <p>¿No tienes cuenta? <a className='font-semibold' href="#"> Registrate</a></p>
                  </div>
                </form>
          </div>
          <div className='flex w-[40%] bg-[#ffa500]'>
            <Image className='w-[70%] h-[40%]' src={Auth} alt='Auth' width='100'/>
          </div>
    </div>
  );
}
