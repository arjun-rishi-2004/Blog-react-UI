import { ChangeEvent, useState } from "react";

function Write() {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 👇 Store the input value to local state
    setInputText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputText} />

      {/* 👇 Use the input value from state */}
      <p>Your input: {inputText}</p>
    </div>
  );
};