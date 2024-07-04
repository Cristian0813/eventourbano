// CategoriaComponent.tsx
import React, { useState } from 'react';
import { useFetchCategoria } from '@/hook/useFetchCategoria';
import { CardCategory } from '../card/cardcategory';

const CategoriaComponent = () => {
  const [search, setSearch] = useState('');
  const { filteredCategorias, ciudades, categoriasUnicas } =
    useFetchCategoria(search);

  const [selectedCiudades, setSelectedCiudades] = useState<string[]>([]);
  const [selectedCategorias, setSelectedCategorias] = useState<string[]>([]);

  const handleCiudadChange = (ciudad: string) => {
    setSelectedCiudades((prev) =>
      prev.includes(ciudad)
        ? prev.filter((c) => c !== ciudad)
        : [...prev, ciudad]
    );
  };

  const handleCategoriaChange = (categoria: string) => {
    setSelectedCategorias((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria)
        : [...prev, categoria]
    );
  };

  const filteredBySelection = filteredCategorias.filter(
    (evento) =>
      (selectedCiudades.length === 0 ||
        selectedCiudades.includes(evento.ciudad)) &&
      (selectedCategorias.length === 0 ||
        selectedCategorias.includes(evento.categoria))
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre, ciudad o categoría"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <h3>Ciudades</h3>
        {ciudades.map((ciudad) => (
          <label key={ciudad}>
            <input
              type="checkbox"
              checked={selectedCiudades.includes(ciudad)}
              onChange={() => handleCiudadChange(ciudad)}
            />
            {ciudad}
          </label>
        ))}
      </div>
      <div>
        <h3>Categorías</h3>
        {categoriasUnicas.map((categoria) => (
          <label key={categoria}>
            <input
              type="checkbox"
              checked={selectedCategorias.includes(categoria)}
              onChange={() => handleCategoriaChange(categoria)}
            />
            {categoria}
          </label>
        ))}
      </div>
      <CardCategory eventos={filteredBySelection} />
    </div>
  );
};

export default CategoriaComponent;
