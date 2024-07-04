'use client';

import { useState, useEffect } from 'react';
import { SkeletonSlider } from '@/components/skeleton/skeleton-slider';
import { SkeletonCard } from '@/components/skeleton/skeleton-card';
import { UseSlider } from '@/hook/useSleider';
import { CategoryFilters } from '@/components/filters/category-filters';

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
      <CategoryFilters />
    </div>
  );
}
