import React from "react";

function RadioButtons({ name, value, checkedValue, onChange }) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checkedValue === value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value}
    </label>
  );
}

export default RadioButtons;
