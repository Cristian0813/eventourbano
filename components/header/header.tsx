'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Logo from '@/ui/logo';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="relative text-slate-700 transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-full before:h-0.5 before:bg-slate-700 before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className="relative hover:text-slate-700 transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-slate-700 before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="relative hover:text-slate-700 transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-slate-700 before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
          >
            Contacto
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="block relative text-slate-700 transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-9 before:h-0.5 before:bg-slate-700 before:rounded-full before:transition-all before:duration-300 hover:before:w-9"
                >
                  Inicio
                </Link>
                <Link
                  href="/nosotros"
                  className="block relative hover:text-slate-700 transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-slate-700 before:rounded-full before:transition-all before:duration-300 hover:before:w-20"
                >
                  Nosotros
                </Link>
                <Link
                  href="/contacto"
                  className="block relative hover:text-slate-700 transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-slate-700 before:rounded-full before:transition-all before:duration-300 hover:before:w-20"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
