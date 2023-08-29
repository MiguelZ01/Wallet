import React from 'react';
import Google from '@assets/Google.png';
import Image from 'next/image';
import Auth from '@assets/Auth.png';

function Login() {
  return (
    <div>
      <div>
        <h1>Bienvenidos</h1>
        <button>
          <Image src={Google} alt="google" width="100" />
          <p>Ingresar con google</p>
        </button>

        <p>_____ o _____</p>

        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" />

          <a href="#">
            <p>¿Olvidaste la contraseña?</p>
          </a>

          <button type="submit">Ingresar</button>
          <p>
            ¿No tienes cuenta? <a href="#">Registrate</a>
          </p>
        </form>
      </div>
      <div>
        <Image src={Auth} alt="Auth" width="100" />
      </div>
    </div>
  );
}

export default Login;
