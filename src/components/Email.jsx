import { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const [xabar, setXabar] = useState("");

  const tekshir = () => {
    const valid = email.includes("@") && email.includes(".com");
    setXabar(valid ? "Email to'g'ri" : "Email noto'g'ri formatda");
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <input
        type="text"
        className="border p-2 rounded mb-2"
        placeholder="Email kiriting"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-purple-500 text-white py-2 px-4 rounded"
        onClick={tekshir}
      >
        Tekshirish
      </button>
      {xabar && <p className="mt-4 text-lg font-semibold">{xabar}</p>}
    </div>
  );
};

export default Email;
