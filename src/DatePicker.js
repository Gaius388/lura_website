import React, { useState } from "react";

const DatePicker = () => {
  const [date, setDate] = useState("");
  return (
    <input
      type="date"
      onChange={(e) => setDate(e.target.value)}
      className="flex items-center gap-1 px-1.5 py-0.5 bg-gray-200 rounded-sm"
    />
  );
};

export default DatePicker;
