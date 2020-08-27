import React from "react";

export default function Banner({ children }) {
  return (
    <div className="bg-orange-500 p-2 text-center text-sm text-white">
      {children}
    </div>
  );
}
