import { useState } from "react";

const Figure = () => {
  const [raqam, setRaqam] = useState("");
  const [natija, setNatija] = useState("");

  const shaklniAniqla = () => {
    if (raqam === "3") setNatija("Uchburchak");
    else if (raqam === "4") setNatija("To'rtburchak");
    else if (raqam === "5") setNatija("Beshburchak");
    else setNatija("Bunday shakl mavjud emas");
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <input
        type="number"
        className="border p-2 rounded mb-2"
        placeholder="Raqam kiriting"
        value={raqam}
        onChange={(e) => setRaqam(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={shaklniAniqla}
      >
        Aniqlash
      </button>
      {natija && <p className="mt-4 text-lg font-semibold">{natija}</p>}
    </div>
  );
};

export default Figure;
