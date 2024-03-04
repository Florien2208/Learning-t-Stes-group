import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-center items-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
