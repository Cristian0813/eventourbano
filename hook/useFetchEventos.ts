// useFetchEventos.ts
import { useEffect, useState } from 'react';

interface UseFetchEvento {
  id: number;
  nombre: string;
  imagen: string;
  fecha: string;
  lugar: string;
  ciudad: string;
  url: string;
  categoria: string;
}

export const useFetchEventos = () => {
  const [eventos, setEventos] = useState<UseFetchEvento[]>([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await fetch('/api/eventos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEventos(data);
      } catch (error) {
        console.error('Error fetching eventos:', error);
      }
    };

    fetchEventos();
  }, []);

  return eventos;
};
