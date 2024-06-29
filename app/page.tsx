'use client';

import { NextArrow } from '@/components/widgets/next-arrow';
import { PrevArrow } from '@/components/widgets/prev-arrow';
import { Skeleton } from '@/components/widgets/skeleton';
import { SliderItem } from '@/components/widgets/slider-item';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [itemActive, setItemActive] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const countItems = 6;

  const onPrev = () => {
    setItemActive((prev) => (prev === 1 ? countItems : prev - 1));
  };

  const onNext = () => {
    setItemActive((prev) => (prev >= countItems ? 1 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(onNext, 30000);
    return () => clearInterval(interval);
  }, []);

  // Simular una carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de carga simulada
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      {/* SLIDERS */}
      <div className="h-[20vh] relative shadow-md shadow-gray-400 rounded-b-lg sm:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] 2xl:h-[70vh]">
        <ul>
          <Link href="https://tuboleta.com/eventos/detalle/willy-garcia-30-exitos-en-vivo-buenaventura/395470055410">
            <SliderItem
              itemActive={itemActive}
              id={1}
              image="https://tuboleta.com/imagenes/667f600182b1d.webp"
            />
          </Link>
          <Link href="https://tuticket.com.co/events/rock-pop">
            <SliderItem
              itemActive={itemActive}
              id={2}
              image="https://2-tuticket-com-co.my-uploads.ticketplus.global/images/promotions/210aedef0e180b95b3aa0a789bb5b6fc9f62c4d9.png?1717596220"
            />
          </Link>
          <Link href="https://elcantantedelghetto.com/tour/">
            <SliderItem
              itemActive={itemActive}
              id={3}
              image="https://tuboleta.com/imagenes/667ec4a540bfa.jpg"
            />
          </Link>
          <Link href="https://tuticket.com.co/events/las-leyendas-de-la-salsa-bogota">
            <SliderItem
              itemActive={itemActive}
              id={4}
              image="https://2-tuticket-com-co.my-uploads.ticketplus.global/images/promotions/62bc9c201d5e2705dcd00a1ad84be7c9aa081784.jpg?1719412815"
            />
          </Link>
          <Link href="https://teatromayor.checkout.tuboleta.com/selection/event/date?productId=10229674036855">
            <SliderItem
              itemActive={itemActive}
              id={5}
              image="https://tuboleta.com/imagenes/667c488e11bd6.webp"
            />
          </Link>
          <Link href="https://www.tuboleta.com/images/Eventos/immersive-disney-animation/index.html">
            <SliderItem
              itemActive={itemActive}
              id={6}
              image="https://tuboleta.com/imagenes/667c488f2296c.jpg"
            />
          </Link>
        </ul>
        <PrevArrow onClickPrev={() => onPrev()} />
        <NextArrow onClickNext={() => onNext()} />
      </div>
      {/*  FIN DEL SLIDERS */}
      {/*       <div className="mt-8 p-4 sm:p-8 md:p-12 lg:p-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Hola todo el MUNDO</h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-justify"></p> */}
      <div>
        <h1>Hola todo el MUNDO</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          voluptate, eveniet dignissimos totam dolores doloribus eum dolorum
          sint similique! At commodi voluptatem nostrum fugiat dolore suscipit
          consequatur, dolorum adipisci iusto! Earum porro nulla molestias,
          consequatur, veniam in quos ratione harum doloremque corporis tempora
          id! Soluta alias esse enim ab veniam deserunt perspiciatis adipisci
          repellendus animi. Dolorem a possimus accusantium nobis. Similique qui
          doloremque deserunt amet! Veniam aliquam ducimus corrupti quis quos
          alias minus rem voluptatibus dolore. Tempora tempore voluptas
          quibusdam itaque beatae, vel laborum nihil eligendi debitis, nesciunt
          eius exercitationem.
        </p>
      </div>
    </div>
  );
}

/* const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc:
    'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
    'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

export default function Home() {
  return (
    // THREE-COLUM COLLECTION 
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 */
