import React from "react";

type Props = {
  error: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Text({ error, placeholder, value, onChange, name }: Props) {
  return (
    <div>
      <label htmlFor=""></label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        name={name}
        className="border-b border-gray-700 p-2 w-full focus:outline-none"
        placeholder={placeholder || "Masukkan teks di sini"}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default Text;
