import React from "react";
import Select from "react-select";
import { Globe, SlidersHorizontal } from "lucide-react";

const Filter = ({ gender, setGender, language, setLanguage, onApply }) => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ur", label: "Urdu" },
    { value: "ar", label: "Arabic" },
    { value: "fr", label: "French" },
    { value: "es", label: "Spanish" },
    { value: "zh", label: "Chinese" },
    { value: "de", label: "German" },
    { value: "hi", label: "Hindi" },
     {value:"ps", label:"Pashto"},
     {value:"fa", label:"Persian"},
     {value:"pa", label:"Punjabi"},
      {value:"dr", label:"Dari"}
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: "0.5rem",
      padding: "2px 4px",
      boxShadow: "none",
      color: "white",
    }),
    singleValue: (provided) => ({ ...provided, color: "white" }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#2c2c2c",
      color: "white",
      zIndex: 50,
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
    input: (provided) => ({ ...provided, color: "white" }),
  };

  return (
    <div className="w-[90%] mx-auto mt-32 bg-gradient-to-r from-[#863aa744] to-[#873AA794] p-6 rounded-xl flex flex-col items-start gap-4">
      {/* Title */}
      <div className="flex items-center gap-2 text-white font-bold text-2xl">
        <SlidersHorizontal className="w-5 h-5" />
        Enter your search criteria
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        <div className="flex md:flex-row flex-col w-full gap-6 items-center justify-between">
          {/* Gender */}
          <div className="flex items-center w-full gap-2">
            <span className="px-3 py-2 bg-[#5b2c78] rounded-md text-white text-sm">
              Gender
            </span>
            <Select
              options={genderOptions}
              styles={customStyles}
              placeholder="Select Gender"
              value={genderOptions.find((g) => g.value === gender)}
              onChange={(e) => setGender(e.value)}
              className="w-full"
            />
          </div>

          {/* Language */}
          <div className="flex w-full items-center gap-2">
            <span className="px-3 py-2 bg-[#5b2c78] rounded-md text-white text-sm flex items-center gap-1">
              <Globe className="w-4 h-4" /> Language
            </span>
            <Select
              options={languageOptions}
              styles={customStyles}
              placeholder="Select Language"
              value={languageOptions.find((l) => l.value === language)}
              onChange={(e) => setLanguage(e.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Apply button */}
        <button
          onClick={onApply}
          className="ml-auto px-6 py-2 bg-[#a855f7] hover:bg-[#9333ea] text-white rounded-md transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
