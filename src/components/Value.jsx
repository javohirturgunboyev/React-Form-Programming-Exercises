import { useState } from "react";

const Value = () => {
  const [birinchi, setBirinchi] = useState("");
  const [ikkinchi, setIkkinchi] = useState("");

  const almashtir = () => {
    const temp = birinchi;
    setBirinchi(ikkinchi);
    setIkkinchi(temp);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <input
        type="text"
        className="border p-2 rounded mb-2"
        placeholder="Birinchi qiymat"
        value={birinchi}
        onChange={(e) => setBirinchi(e.target.value)}
      />
      <input
        type="text"
        className="border p-2 rounded mb-2"
        placeholder="Ikkinchi qiymat"
        value={ikkinchi}
        onChange={(e) => setIkkinchi(e.target.value)}
      />
      <button
        className="bg-teal-500 text-white py-2 px-4 rounded"
        onClick={almashtir}
      >
        Almashtirish
      </button>
    </div>
  );
};

export default Value;
