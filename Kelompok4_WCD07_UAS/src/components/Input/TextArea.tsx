import React from "react";

type Props = {
  error: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  name?: string;
};

function Text({ error, placeholder, value, onChange, rows, name }: Props) {
  return (
    <div>
      <label htmlFor=""></label>
      <textarea
        value={value}
        onChange={onChange}
        rows={rows || 4}
        name={name}
        className="border-b border-gray-700 p-2 w-full focus:outline-none"
        placeholder={placeholder || "Masukkan teks di sini"}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default Text;
