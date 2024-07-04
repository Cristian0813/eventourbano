// categoryfilter.tsx
'use client';

import { useState } from 'react';
import { CardCategory } from '@/components/card/cardcategory';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuItems,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { useFetchCategoria } from '@/hook/useFetchCategoria';

export const CategoryFilters = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { filteredCategorias, ciudades, categoriasUnicas } =
    useFetchCategoria(search);
  const [selectedCiudades, setSelectedCiudades] = useState<string[]>([]);
  const [selectedCategorias, setSelectedCategorias] = useState<string[]>([]);

  const handleCiudadChange = (ciudad: string) => {
    setSelectedCiudades((prev) =>
      prev.includes(ciudad)
        ? prev.filter((c) => c !== ciudad)
        : [...prev, ciudad]
    );
  };

  const handleCategoriaChange = (categoria: string) => {
    setSelectedCategorias((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria)
        : [...prev, categoria]
    );
  };

const filteredBySelection = filteredCategorias.filter(
  (evento) =>
    (selectedCiudades.length === 0 ||
      selectedCiudades.includes(evento.ciudad)) &&
    (selectedCategorias.length === 0 ||
      selectedCategorias.includes(evento.categoria))
);

  const filters = [
    {
      id: 'ciudad',
      name: 'Ciudad',
      options: ciudades.map((ciudad) => ({
        value: ciudad,
        label: ciudad,
        checked: selectedCiudades.includes(ciudad),
      })),
    },
    {
      id: 'categoria',
      name: 'Categoría',
      options: categoriasUnicas.map((categoria) => ({
        value: categoria,
        label: categoria,
        checked: selectedCategorias.includes(categoria),
      })),
    },
  ];

  return (
    <div>
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          className="relative z-40 lg:hidden"
          open={mobileFiltersOpen}
          onClose={() => setMobileFiltersOpen(false)}
        >
          <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filtro</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Cerrar menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categorias</h3>
                <div className="mt-2 block px-4 py-3">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      autoComplete="off"
                      className="block w-full flex-1 border-0 rounded-md py-1.5 pl-3 text-gray-900 placeholder-gray-500 focus:ring-0"
                      placeholder="Ciudad, Categoría, Evento"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <DisclosureButton className="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  checked={option.checked}
                                  onChange={() =>
                                    section.id === 'ciudad'
                                      ? handleCiudadChange(option.value)
                                      : handleCategoriaChange(option.value)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Filters */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Eventos
            </h1>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md shadow-2xl ring-1 ring-black ring-opacity-5"></MenuItems>
              </Menu>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filtro</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-11 pt-6">
            <h2 id="products-heading" className="sr-only">
              Eventos
            </h2>
            <div className="grid grid-cols-1 gap-x-1 gap-y-2 lg:grid-cols-6">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categorias</h3>
                <div className="mt-2 space-y-4 border-b border-gray-200 pb-6 text-sm font-medium">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input
                      type="text"
                      autoComplete="off"
                      className="block w-full flex-1 border-0 rounded-md py-1.5 pl-3 text-gray-900 placeholder-gray-500 focus:ring-0"
                      placeholder="Buscar por nombre, ciudad o categoría"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <DisclosureButton className="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  checked={option.checked}
                                  onChange={() =>
                                    section.id === 'ciudad'
                                      ? handleCiudadChange(option.value)
                                      : handleCategoriaChange(option.value)
                                  }
                                  className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Event Cards */}
              <div className="lg:col-span-5">
                <CardCategory eventos={filteredBySelection} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
