import React from 'react';

// El componente Table recibe netIncomes como una prop, que es el arreglo de ingresos netos de las compañías.
const Table = ({ netIncomes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Compañia</th>
          <th>Ingresos Netos</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((company, index) => (
          <tr key={index}>
            <td>{company.brand}</td>
            <td>{company.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// METODO MAP: Itera sobre el arreglo netIncomes, que devuelve una nueva lista de elementos JSX para cada compañía en el arreglo.
// TR KEY={INDEX}: Crea una fila en la tabla para cada compañía. La propiedad key se usa para darle una clave única a cada fila, basada en el índice del arreglo.
export default Table;
