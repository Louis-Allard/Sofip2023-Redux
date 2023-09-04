// components/ComparisonComponent.js
import React from 'react';
import { useSelector } from 'react-redux';

const ComparisonComponent = () => {
  const valueA = useSelector((state) => state.valueA);
  const valueB = useSelector((state) => state.valueB);

  let Result = "";
  if (valueA < valueB) {
    Result = "La valeur A est inférieur à la valeur B"
  }
  if(valueA > valueB) {
    Result = "La valeur A est supérieur à la valeur B"
  }
  if(valueA === valueB) {
    Result = "La valeur A est égale à la valeur B"
  }

  return (
    <div>
      <h2>Résultat :</h2>
      <p>{Result}</p>
    </div>
  );
};

export default ComparisonComponent;
