import React from 'react';

const Film = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      {/* Nueva columna */}
      <div className="flex flex-col md:flex-row">
        {/* Primera columna con la foto mediana */}
        <div className="md:w-1/2">
          <img
            src="/foto1.jpg"
            alt="Foto Mediana"
            className="mx-auto mb-4 rounded-md"
            style={{ maxWidth: "100%" }} // Usar el 100% para que la imagen sea completamente responsiva
          />
        </div>

        {/* Segunda columna con el texto y el botón */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">video-de-boda-buenos-aires</h2>
          <p>DEPARTAMENTO DE POR MEDIO</p>
          <p>JANISE & JULIAN</p>
          <p>BARADERO, BUENOS AIRES</p>
          <p className="text-lg font-bold mt-4">WEDDINGS |</p>
          <p>Trailer de la boda de destino de Janise & Julian.</p>
          <p>Tres días de evento en la ciudad de Baradero.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            PLAY FILM
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Film;
