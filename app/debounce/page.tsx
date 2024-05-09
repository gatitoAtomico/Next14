"use client";
import React, { useState } from "react";
import useDebouncedCallback from "../_Utils/hooks/useDebounce";

const DebouncedInput = () => {
  const [inputValue, setInputValue] = useState("");

  // Define your callback function
  const handleChange = useDebouncedCallback((value) => {
    console.log("Input value:", value);
    // Do something with the debounced value, like updating state or making API calls
  }, 500); // 500 milliseconds debounce delay

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    handleChange(value); // Call the debounced function with the input value
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Type something..."
    />
  );
};

export default DebouncedInput;
