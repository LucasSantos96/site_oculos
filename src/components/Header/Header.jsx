'use client'

import { useState } from "react";
//Links
import Link from "next/link";

//Imagem
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('cliquei')
  };

  return (
    <header className="bg-[#ffffff28] flex py-2 px-4 m-4 border border-[#F26B1D30] rounded-full justify-between items-center shadow-[2px_4px_24px_0_#F26B1D30] lg:mx-32 lg:px-8">
      <div>
        <Image src="/logo.png" alt="logo sol" width={50} height={50} />
      </div>

      {/*Botão menu */}
        <button onClick={toggleMenu}
        aria-label="Abrir Menu" className="lg:hidden">
           
            { isOpen ? <Image
            src='/x.svg'
            alt="menu icon"
            width={30}
            height={40}
            /> : <Image
            src='/menu.svg'
            alt="menu icon"
            width={30}
            height={40}
            /> }
        </button>
            
       

      {/*Menu mobile*/}
      <div className={`${isOpen ? "flex" : "hidden"} lg:hidden text-[#F24405] flex-col absolute top-21 left-0 right-0 bg-[#f26b1db4] p-4 w-full text-center gap-4 rounded-2xl z-20 text-white`}>
        <Link href=""> Óculos de sol </Link>
        <Link href=""> Óculos de gráu </Link>
        <Link href=""> Novidades </Link>
        <Link href=""> Acessórios </Link>
      </div>

      {/*Menu desktop */}
      <div className="text-[#F24405] hidden lg:flex gap-6  lg:font-medium">
        <Link href=""> Óculos de sol </Link>
        <Link href=""> Óculos de gráu </Link>
        <Link href=""> Novidades </Link>
        <Link href=""> Acessórios </Link>
      </div>

      {}
    </header>
  );
};

export default Header;
