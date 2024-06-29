import { NextArrow } from '@/components/navigation/next-arrow';
import { PrevArrow } from '@/components/navigation/prev-arrow';
import { SliderItem } from '@/components/slider/slider-item';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export function UseSlider() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 6;
  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      onNext();
    } else if (endX.current - startX.current > 50) {
      onPrev();
    }
  };

  // CAMBIAR DE IMAGEN
  const onPrev = () => {
    setItemActive((prev) => (prev === 1 ? countItems : prev - 1));
  };

  const onNext = () => {
    setItemActive((prev) => (prev >= countItems ? 1 : prev + 1));
  };

  // PASAR SLIDER AUTO
  useEffect(() => {
    const interval = setInterval(onNext, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[20vh] relative shadow-md shadow-gray-400 rounded-b-lg sm:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] 2xl:h-[70vh]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
      <PrevArrow onClickPrev={onPrev} />
      <NextArrow onClickNext={onNext} />
    </div>
  );
}
