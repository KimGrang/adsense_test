import { useState } from "react";
import "./UnitConverter.css";

type UnitCategory = {
  name: string;
  units: string[];
  conversions: { [key: string]: number };
};

const unitCategories: UnitCategory[] = [
  {
    name: "길이",
    units: ["m", "cm", "mm", "km", "in", "ft"],
    conversions: {
      m: 1,
      cm: 0.01,
      mm: 0.001,
      km: 1000,
      in: 0.0254,
      ft: 0.3048,
    },
  },
  {
    name: "힘",
    units: ["N", "kN", "dyne", "kgf", "lbf"],
    conversions: {
      N: 1,
      kN: 1000,
      dyne: 0.00001,
      kgf: 9.80665,
      lbf: 4.448222,
    },
  },
  {
    name: "무게",
    units: ["kg", "g", "mg", "lb", "oz"],
    conversions: {
      kg: 1,
      g: 0.001,
      mg: 0.000001,
      lb: 0.45359237,
      oz: 0.028349523125,
    },
  },
  {
    name: "압력",
    units: ["Pa", "kPa", "MPa", "bar", "psi", "atm"],
    conversions: {
      Pa: 1,
      kPa: 1000,
      MPa: 1000000,
      bar: 100000,
      psi: 6894.757293178,
      atm: 101325,
    },
  },
  {
    name: "전압",
    units: ["V", "kV", "mV", "μV"],
    conversions: {
      V: 1,
      kV: 1000,
      mV: 0.001,
      μV: 0.000001,
    },
  },
];

export const UnitConverter = () => {
  const [category, setCategory] = useState(unitCategories[0]);
  const [fromUnit, setFromUnit] = useState(category.units[0]);
  const [toUnit, setToUnit] = useState(category.units[1]);
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleCategoryChange = (categoryName: string) => {
    const newCategory =
      unitCategories.find((c) => c.name === categoryName) || category;
    setCategory(newCategory);
    setFromUnit(newCategory.units[0]);
    setToUnit(newCategory.units[1]);
    setValue("");
    setResult("");
  };

  const convert = () => {
    if (!value) return;
    const inputValue = parseFloat(value);
    if (isNaN(inputValue)) return;

    const baseValue = inputValue * category.conversions[fromUnit];
    const convertedValue = baseValue / category.conversions[toUnit];
    setResult(convertedValue.toExponential(6));
  };

  return (
    <div className='converter'>
      <div className='converter-header'>단위 변환</div>
      <div className='category-buttons'>
        {unitCategories.map((cat) => (
          <button
            key={cat.name}
            className={`category-btn ${
              cat.name === category.name ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className='converter-body'>
        <div className='input-group'>
          <input
            type='number'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='값을 입력하세요'
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {category.units.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <div className='arrow'>→</div>
        <div className='input-group'>
          <input type='text' value={result} readOnly placeholder='변환 결과' />
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            {category.units.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <button className='convert-btn' onClick={convert}>
          변환
        </button>
      </div>
    </div>
  );
};
