import React from 'react'
import Google from '@assets/Google.png'
import Image from 'next/image' 
import Auth from '@assets/Auth.png'

function Login() {
  return (
    <div className='flex w-screen h-screen '>
          <div className='flex flex-col w-[60%] bg-[#000000]' >
            <h1>Bienvenidos</h1>
            <button>
              <Image src={Google} alt='google' width='100'/>
              <p>Ingresar con google</p>
            </button>

            <p>_____ o _____</p>

            <form action="">

              <div className='flex flex-col'>
                <label htmlFor="email">
                  Email
                </label>
                <input type="email" name='email'/>
              </div>

              <label htmlFor="password">
                Password
              </label>
              <input type="password" name='password'/>

              <a href="#">
              <p>¿Olvidaste la contraseña?</p>
              </a>

              <button type='submit'> 
                Ingresar
              </button>
              <p>¿No tienes cuenta? <a href="#">Registrate</a></p>
            </form>
          </div>
          <div className='flex w-[40%] bg-[#ffa500]'>
            <Image src={Auth} alt='Auth' width='100'/>
          </div>
    </div>
  )
}

export default Login