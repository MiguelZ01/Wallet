import React from 'react';
import Navbar from '@components/navbar/navbar';
import Image from 'next/image';
import Auth from '@assets/Auth.png';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Image src={Auth} alt="Login" width="300" />
    </div>
  );
}

export default Dashboard;
