import { useState } from "react";

const Colors = () => {
  const [rang, setRang] = useState("");

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="mb-4">
        {["Qizil", "Yashil", "Ko'k"].map((r, index) => (
          <label key={index} className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              name="rang"
              value={r.toLowerCase()}
              className="accent-blue-500"
              onChange={(e) => setRang(e.target.value)}
            />
            {r}
          </label>
        ))}
      </div>
      <div
        className={`w-40 h-40 ${rang} ${
          rang === "qizil"
            ? "bg-red-500"
            : rang === "yashil"
            ? "bg-green-500"
            : rang === "ko'k"
            ? "bg-blue-500"
            : ""
        }`}
      ></div>
    </div>
  );
};

export default Colors;
