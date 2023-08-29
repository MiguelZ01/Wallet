import React from 'react';
import Image from 'next/image';
import Auth from '@assets/Auth.png';

function Register() {
  return (
    <div>
      <div>
        <h1>REGISTRO</h1>
        <form action="">
          <label htmlFor="">Nombre</label>
          <input type="text" />

          <label htmlFor="">Email</label>
          <input type="email" />

          <label htmlFor="">Contraseña</label>
          <input type="password" />

          <label htmlFor="">Confirmar contraseña</label>
          <input type="password" />

          <button>Cancelar</button>

          <button>Registrar</button>
        </form>
      </div>
      <div>
        <Image src={Auth} alt="Auth" width="100" />
      </div>
    </div>
  );
}

export default Register;
