import React from 'react';

const ServicesComponent = () => {
  return (
    <div className="flex flex-col md:flex-row dark:bg-zinc-950 pt-20 pb-10">
      {/* Primera columna */}
      <div className="md:w-1/3 bg-gray-200 p-4 dark:bg-zinc-950 dark:text-white">
        <h2 className="text-6xl font-bold mb-4 text-center">Services</h2>
      </div>

      {/* Segunda columna */}
      <div className="md:w-2/3 p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 d">
          {/* Servicio 1 */}
          <div className="bg-gray-100 p-4 dark:bg-zinc-900 dark:text-white ">
            <h3 className="text-lg font-semibold mb-2">Service 1</h3>
            <p>Description of Service 1</p>
          </div>
          <div className="bg-gray-100 p-4 dark:bg-zinc-900 dark:text-white ">
            <h3 className="text-lg font-semibold mb-2">Service 1</h3>
            <p>Description of Service 1</p>
          </div>
          <div className="bg-gray-100 p-4 dark:bg-zinc-900 dark:text-white ">
            <h3 className="text-lg font-semibold mb-2">Service 1</h3>
            <p>Description of Service 1</p>
          </div>
          <div className="bg-gray-100 p-4 dark:bg-zinc-900 dark:text-white ">
            <h3 className="text-lg font-semibold mb-2">Service 1</h3>
            <p>Description of Service 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
