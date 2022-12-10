import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <h3 className="flex justify-center text-lg">{title}</h3>
    </>
  );
};

export default Header;
