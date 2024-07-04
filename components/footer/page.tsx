'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-2 lg:py-2 border-t border-black-900 bg-amber-50">
      <div className="w-[96%] max-w-7xl mx-auto">
        <div className="border-b border-black-900 lg:pb-2 flex lg:justify-center lg:flex-col lg:items-center">
          <div className="space-y-2 pb-2 border-b border-black-900 lg:pb-0 lg:border-none w-full flex flex-col items-center">
            <ul className="flex gap-x-8 text-xs lg:text-xs text-gray-500 flex-col lg:flex-row gap-y-3 text-center items-center">
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Resolución Min Cultura
                </a>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-cyan-600">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-2 flex justify-center items-center">
          <p className="text-xs text-gray-400">
            © 2024 UrbanEvents. Todos los Derechos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
