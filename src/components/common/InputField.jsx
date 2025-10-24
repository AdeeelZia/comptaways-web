import React from "react";

const Input = React.forwardRef(
  ({ type = "text", placeholder = "", className = "", ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={`
        bg-white
        rounded-[60px]
        shadow-[0_2px_15px_0_rgba(0,0,0,0.06)]
        px-6
        py-3
        outline-none
        focus:ring-2
        focus:ring-[#2AD884]
        transition
        duration-200
        ${className}
      `}
        {...props}
      />
    );
  }
);

export default Input;
