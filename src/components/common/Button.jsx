import * as React from "react";

const baseClasses =
  "inline-flex items-center justify-center py-2 px-4 cursor-pointer focus:outline-none";

const variantClasses = {
  primary: "text-white rounded-[3.125rem] bg-[#2AD884] hover:bg-[#2AD884] transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:rounded-[3.125rem]",
  outline:
    "border-2 bg-transparent rounded-[3.125rem] text-[#1D1D1C] border-[#2AD884]",
};

const Button = ({ children, onClick, variant, className = "", ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant] || ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
