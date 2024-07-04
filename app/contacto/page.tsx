import React from 'react'
import Image from 'next/image';

export default function Contacto() {
  return (
    <div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¡Conéctate con las siguientes páginas! 😊
          </h2>
          <p className="mt-4 text-gray-500">
            Puedes ponerte en contacto con a través de las plataformas{' '}
            <strong>Tuboleta</strong> y <strong>TuTicket.</strong> Estamos aquí
            para proporcionarte información detallada, resolver tus dudas y
            asegurarnos de que tengas la mejor experiencia posible al descubrir
            y disfrutar de eventos emocionantes en tu ciudad.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 ">
          <a href="https://www.google.com" target="_blank">
            <Image
              src="https://www.tuboleta.com/img/ic_logotuboleta.svg"
              alt="Tuboleta"
              className="rounded-lg bg-[#0071ce] w-full h-full hover:opacity-65"
              width="100"
              height="100"
            />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <Image
              src="https://2-tuticket-com-co.my-uploads.ticketplus.global/themes/81/assets/logo2-aef71f00bc6451c1a641f0b577383f6ae0fd52fd.webp"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-[#292f54] w-full h-full hover:opacity-65"
              width="150"
              height="150"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

    {/* <div className="">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Puedes ponerte en contacto con nosotros a través de las siguientes
          páginas web
        </h1>
      </div>
    </div> */}