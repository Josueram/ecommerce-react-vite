import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center pt-28 bg-[#F7FAFC]">
      {children}
    </div>
  );
};

export default Layout;
