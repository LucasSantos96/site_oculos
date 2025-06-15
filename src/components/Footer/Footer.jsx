import React from "react";
import Button from "../Button/Button";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#1E1E1E] w-full text-white lg:px-32">
      <div className="mx-4 p-8 flex flex-col items-center lg:flex-row  lg:justify-between lg:p-12">
        <div>
          <form className="flex flex-col space-y-6 mt-8">
        <h2 className="text-3xl font-medium lg:text-5xl">Contatos</h2>
            <label htmlFor="name">
              Seu Nome:
              <input
                type="text"
                name="name"
                placeholder=" ________________________"
              />
            </label>

            <label htmlFor="email">
              Seu E-mail:
              <input
                type="email"
                name="email"
                placeholder="________________________"
              />
            </label>

            <label htmlFor="message">
              Sua mensagem:
              <textarea
                name="mesage"
                id="mesage"
                className="w-full min-h-20 border border-[#ffffff96] rounded-2xl mt-2"
              ></textarea>
            </label>
              <Button name="Enviar" linkBtn="" />
          </form>

        </div>

        <div className="">
          <div className="space-y-1 mt-8 text-center lg:text-left lg:space-y-6">
              <h2 className="text-[18px]">
                  E-mail:
              </h2>
              <p className="font-light"> email@email.com.br</p>
              <h2 className="text-[18px]">
                  Endereço
              </h2>
              <p className="font-light">Endereço da loja avenida-123, Rio de Janeiro - Brasil</p>
          </div>
          <div className="flex space-x-2 mt-4">
          <Image
          src='/instagram.svg'
          alt="instagram"
          width={50}
          height={50}
          />
           <Image
          src='/facebook.svg'
          alt="instagram"
          width={50}
          height={50}
          />
          <Image
          src='/x (twitter).svg'
          alt="instagram"
          width={50}
          height={50}
          />
          <Image
          src='/linkedin.svg'
          alt="instagram"
          width={50}
          height={50}
          />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
