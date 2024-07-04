import Image from 'next/image';
import { useFetchEventos } from '@/hook/useFetchCard';

export const CardCategory = () => {
  const eventos = useFetchEventos();

  return (
    <>
        <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-4">
          <div className="mx-auto max-w-2xl py-2 sm:py-2 lg:max-w-none">
            <div className="grid gap-6 lg:grid-cols-2">
              {eventos.map((evento) => (
                <div
                  key={evento.id}
                  className="group relative bg-white rounded-lg shadow-md p-4"
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:h-64">
                    <Image
                      src={evento.imagen}
                      alt={evento.nombre}
                      fill
                      className="w-full h-full"
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
    </>
  );
};