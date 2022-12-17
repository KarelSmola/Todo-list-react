import { useState } from "react";

const UseInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [valueBlur, setValueBlur] = useState(false);

  const valueIsValid = validateValue(inputValue);
  const valueIsInvalid = !valueIsValid && valueBlur;

  const valueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setValueBlur(true);
  };

  const valueInputError = () => {
    setValueBlur(true);
  };

  const resetValue = () => {
    setInputValue("");
    setValueBlur(false);
  };

  const resetValueInput = () => {
    setInputValue("");
  };

  const resetValueBlur = () => {
    setValueBlur(false);
  };

  return {
    inputValue,
    valueIsValid,
    valueIsInvalid,
    valueChangeHandler,
    valueBlurHandler,
    valueInputError,
    resetValue,
    resetValueInput,
    resetValueBlur,
  };
};

export default UseInput;
