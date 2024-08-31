import React from 'react';
import Table from './Table';

const Practica2 = () => {

    // Arreglo de objetos por compañia e ingresos netos.
    const netIncomes = [
        { brand: 'McDonalds', income: 1291283 },
        { brand: 'Burger King', income: 1927361 },
        { brand: 'KFC', income: 1098463 }
      ];
    
      // Calcula el ingreso total sumando todos los ingresos netos de las compañías.
      // El método reduce itera sobre el arreglo netIncomes, sumando el valor de income de cada compañía al acumulador (acc) que empieza en 0.
      const totalIncome = netIncomes.reduce((acc, company) => acc + company.income, 0);

      // Calcula el ingreso promedio dividiendo el ingreso total (totalIncome) por la cantidad de compañías en el arreglo netIncomes.
      const averageIncome = totalIncome / netIncomes.length;
    
      // El componente Table recibe netIncomes como prop. Esto pasará los datos de las compañías al componente Table.jsx
      // toFixed(2) formatea a dos decimales.
      return (
        <div>
          <h1>Ingresos Netos</h1>
          <Table netIncomes={netIncomes} />
          <p>Promedio de Ingresos Netos: {averageIncome.toFixed(2)}</p>
        </div>
      );
}

export default Practica2;
