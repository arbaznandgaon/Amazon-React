import React, { useState, useEffect } from "react";

function NoRepeatInput() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let isValid = value.split("").every((letter, i) => value.indexOf(letter) === i);
    setError(!isValid);
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      {error && <div>No Repeated Letters Allowed</div>}
    </div>
  );
}

export default NoRepeatInput;