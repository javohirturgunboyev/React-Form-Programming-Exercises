import { useState } from "react";

const Password= () => {
  const [parol, setParol] = useState("");
  const [tasdiq, setTasdiq] = useState("");
  const [xabar, setXabar] = useState("");

  const tekshir = () => {
    setXabar(parol === tasdiq ? "Parol mos keldi" : "Parol mos kelmadi");
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <input
        type="password"
        className="border p-2 rounded mb-2"
        placeholder="Parol"
        value={parol}
        onChange={(e) => setParol(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 rounded mb-2"
        placeholder="Parolni tasdiqlash"
        value={tasdiq}
        onChange={(e) => setTasdiq(e.target.value)}
      />
      <button
        className="bg-green-500 text-white py-2 px-4 rounded"
        onClick={tekshir}
      >
        Tasdiqlash
      </button>
      {xabar && <p className="mt-4 text-lg font-semibold">{xabar}</p>}
    </div>
  );
};

export default Password;
