import React, { useState } from 'react';
import { suDSData } from '../data';
import "./selection.css";

interface Option {
  scale: string;
  description: string;
  value: number;
}

interface Criteria {
  name: string;
  indicator: string;
  options: Option[];
}

const SelectionPage: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Map<string, string>>(new Map());

  const handleSelection = (criteriaName: string, scale: string) => {
    setSelectedOptions(prev => new Map(prev).set(criteriaName, scale));
  };

  const renderOptions = (options: Option[], criteriaName: string) => {
    return options.map((option, index) => (
      <div key={index}>
        <label>
          <input
            type="radio"
            name={criteriaName}
            value={option.scale}
            onChange={() => handleSelection(criteriaName, option.scale)}
          />
          {option.scale}: {option.description}
        </label>
      </div>
    ));
  };

  return (
    <div>
      <h1>Selecciona las opciones para los sistemas de drenaje sostenible</h1>
      {suDSData.map((component, index) => (
        <div key={index}>
          <h2>{component.componentType}</h2>
          {component.criteria.map((criterion, idx) => (
            <div key={idx}>
              <h3>{criterion.name}</h3>
              <p>{criterion.indicator}</p>
              {renderOptions(criterion.options, criterion.name)}
            </div>
          ))}
        </div>
      ))}
      <h3>Opciones seleccionadas:</h3>
      <ul>
        {Array.from(selectedOptions.entries()).map(([criteria, scale], idx) => (
          <li key={idx}>
            {criteria}: {scale}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectionPage;