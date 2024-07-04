import { useEffect, useState, useMemo } from 'react';

interface Evento {
  id: number;
  nombre: string;
  ciudad: string;
  categoria: string;
}

interface UseFetchCategoriaParams {
  ciudad?: string;
  nombre?: string;
  categoria?: string;
}

interface UseFetchCategoriaResult {
  eventos: Evento[];
  ciudades: string[];
  categorias: string[];
}

export const useFetchCategoria = (params: UseFetchCategoriaParams) => {
  const [result, setResult] = useState<UseFetchCategoriaResult>({
    eventos: [],
    ciudades: [],
    categorias: [],
  });

  const paramsMemo = useMemo(
    () => ({ ...params }),
    [params.ciudad, params.nombre, params.categoria]
  );

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const queryParams = new URLSearchParams(paramsMemo as any).toString();
        const response = await fetch(`/api/eventos?${queryParams}`);
        if (!response.ok) {
          throw new Error('Error al obtener los eventos');
        }
        const data: Evento[] = await response.json();

        const ciudades = Array.from(
          new Set(data.map((evento) => evento.ciudad))
        );
        const categorias = Array.from(
          new Set(data.map((evento) => evento.categoria))
        );

        setResult({ eventos: data, ciudades, categorias });
      } catch (error) {
        console.error('Error fetching eventos:', error);
      }
    };
    fetchCategorias();
  }, [paramsMemo]);

  return result;
};
