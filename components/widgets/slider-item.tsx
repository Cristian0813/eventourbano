import { cn } from '@/lib/utils';
import Image from 'next/image';

interface SliderItemProps {
  itemActive: number;
  id: number;
  image: string;
}

export const SliderItem = ({
  itemActive,
  id,
  image,
}: SliderItemProps) => {
  return (
    <li
      className={cn(
        'absolute inset-0 overflow-hidden after:absolute after:w-full after:h-[20vh] after:left-0 after:bottom-0',
        itemActive === id ? 'opacity-100 z-10' : 'opacity-0'
      )}
    >
      <div className="relative w-full h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] 2xl:h-[70vh] rounded-b-lg">
        <Image
          src={image}
          alt="Image"
          fill
          className="w-full h-full rounded-b-lg"
        />
      </div>
    </li>
  );
};
