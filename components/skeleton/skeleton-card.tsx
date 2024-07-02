import React from 'react';

export const SkeletonCard = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h1 className="text-2xl font-bold text-gray-900">Eventos</h1>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg shadow-md p-4"
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-300"></div>
                  <h2 className="mt-4 text-lg bg-gray-300 text-transparent rounded">
                    Loading...
                  </h2>
                  <p className="text-base font-semibold bg-gray-300 text-transparent rounded">
                    Loading...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
