import React from 'react';
import Select from "react-select";
import languages from "language-list";

const Vri = () => {
  const options = languages().getData().map(lang => ({
    value: lang.code,
    label: lang.language
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "1px solid rgba(255,255,255,0.4)",
      borderRadius: "0.375rem", // Tailwind md rounded
      padding: "2px 8px",
      color: "white",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid white",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#393838",
      color: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#873AA7" : "transparent",
      color: "white",
      cursor: "pointer",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgba(255,255,255,0.6)",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
  };

  return (
    <div className="flex flex-col gap-5">
      <Select
        options={options}
        placeholder="Select Source Language"
        styles={customStyles}
      />
      <Select
        options={options}
        placeholder="Select Target Language"
        styles={customStyles}
      />
      <input
        type="date"
        className="py-2 px-5 bg-transparent border-[1px] border-[#ffffff62] rounded-md w-full focus:outline-none text-white"
      />
    </div>
  );
};

export default Vri;
