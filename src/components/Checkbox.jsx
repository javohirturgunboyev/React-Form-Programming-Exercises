import { useState } from "react";

const Checkbox = () => {
  const [tanlanganlar, setTanlanganlar] = useState([]);

  const mevalar = ["Olma", "Banan", "Apelsin","xurmo","mango", "anor", "bexi"];

  const checkboxniBosish = (meva) => {
    setTanlanganlar((current) =>
      current.includes(meva)
        ? current.filter((item) => item !== meva)
        : [...current, meva]
    );
  };

  return (
    <div className="p-4 flex flex-col items-center">
      {mevalar.map((meva, index) => (
        <label key={index} className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            className="accent-blue-500"
            onChange={() => checkboxniBosish(meva)}
          />
          {meva}
        </label>
      ))}
      <div className="mt-4">
        <p className="text-lg font-semibold">Tanlanganlar:</p>
        <ul>
          {tanlanganlar.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Checkbox;
