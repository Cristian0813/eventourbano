import Link from 'next/link';
import Logotipo from '@/public/image/1.png';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" passHref legacyBehavior>
      <a className="-m-1.5 p-1.5">
        <span className="sr-only">Evento Urbano</span>
        <Image className="h-8 w-auto" src={Logotipo} alt="Logo" />
      </a>
    </Link>
  );
}
