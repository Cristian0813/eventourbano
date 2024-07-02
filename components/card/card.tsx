import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Evento {
  id: number;
  nombre: string;
  imagen: string;
  url: string;
  fecha: string;
}

export const CardCategory = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await fetch('/api/eventos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEventos(data);
      } catch (error) {
        console.error('Error fetching eventos:', error);
      }
    };

    fetchEventos();
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h1 className="text-2xl font-bold text-gray-900">Eventos</h1>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {eventos.map((evento) => (
              <div
                key={evento.id}
                className="group relative bg-white rounded-lg shadow-md p-4"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:h-64">
                  <Image
                    src={evento.imagen}
                    alt={evento.nombre}
                    className="w-full h-full"
                    layout="fill"
                  />
                </div>
                <h2 className="mt-4 text-lg text-gray-500 font-semibold">
                  <a href={evento.url}>
                    <span className="absolute inset-0" />
                    {evento.nombre}
                  </a>
                </h2>
                <p className="text-sm font-semibold text-gray-900">
                  {evento.fecha}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
