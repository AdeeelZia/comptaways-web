import * as React from "react";

const baseClasses = "text-xl font-bold text-center text-[#1D1D1C]";

const Heading = ({ as = "h2", children, className = "", ...rest }) => {
  const Tag = as;

  return (
    <Tag className={`${baseClasses} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Heading;
