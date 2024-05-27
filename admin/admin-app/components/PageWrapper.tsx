// components/PageWrapper.tsx
import React from "react";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="ml-64 p-4 bg-gray-100 min-h-screen">
      {children}
    </div>
  );
};

export default PageWrapper;
