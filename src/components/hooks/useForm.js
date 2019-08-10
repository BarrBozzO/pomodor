import { useState } from "react";

export default function({ init = {}, submit, change }) {
  const [inputs, setInputs] = useState({ ...init });

  const handleChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: change ? change(e.target.value) : e.target.value
    }));
  };

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();

      if (submit) submit(inputs, setInputs);
    }
  };

  return {
    handleSubmit,
    handleChange,
    inputs
  };
}
