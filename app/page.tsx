'use client';

import { useState, useEffect } from 'react';
import { UseSlider } from '@/components/hook/usesleider';
import { CardCategory } from '@/components/card/card';
import { SkeletonSlider } from '@/components/skeleton/skeleton-slider';
import { SkeletonCard } from '@/components/skeleton/skeleton-card';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // CARGA DE SKELETON
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

    if (isLoading) {
      return (
        <>
          <SkeletonSlider />
          <SkeletonCard />
        </>
      );
    }

  return (
    <div>
      <UseSlider />
      <CardCategory />
    </div>
  );
}
