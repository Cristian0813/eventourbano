// useFetchCategoria.tsx
import { useEffect, useState } from 'react';

interface Evento {
  id: number;
  nombre: string;
  imagen: string;
  fecha?: string;
  lugar: string;
  ciudad: string;
  url: string;
  categoria: string;
}

export const useFetchCategoria = (search: string) => {
  const [categorias, setCategorias] = useState<Evento[]>([]);
  const [filteredCategorias, setFilteredCategorias] = useState<Evento[]>([]);
  const [ciudades, setCiudades] = useState<string[]>([]);
  const [categoriasUnicas, setCategoriasUnicas] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('/api/eventos');
        if (!response.ok) {
          throw new Error('Error al obtener las categorías');
        }
        const data: Evento[] = await response.json();
        setCategorias(data);

        // Obtener listas únicas de ciudades y categorías
        const uniqueCiudades = Array.from(
          new Set<string>(data.map((evento) => evento.ciudad))
        );
        const uniqueCategorias = Array.from(
          new Set<string>(data.map((evento) => evento.categoria))
        );

        setCiudades(uniqueCiudades);
        setCategoriasUnicas(uniqueCategorias);
      } catch (error) {
        console.error('Error fetching eventos:', error);
      }
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    const filtered = categorias.filter(
      (evento) =>
        evento.nombre.toLowerCase().includes(search.toLowerCase()) ||
        evento.ciudad.toLowerCase().includes(search.toLowerCase()) ||
        evento.categoria.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCategorias(filtered);
  }, [search, categorias]);

  return { filteredCategorias, ciudades, categoriasUnicas, categorias };
};
