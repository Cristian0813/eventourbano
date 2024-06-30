'use client';

import { Skeleton } from '@/components/skeleton/skeleton-slider';
import { useState, useEffect } from 'react';
import { UseSlider } from '@/components/hook/usesleider';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // CARGA DE SKELETON
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      <UseSlider />
    </div>
  );
}

/* 


      {/*       <div className="mt-8 p-4 sm:p-8 md:p-12 lg:p-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Hola todo el MUNDO</h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-justify"></p>
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


const callouts = [
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
