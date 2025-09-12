import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div className="border-b p-4 bg-gray-100">
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return (
    <div className="p-4">
      {children}
    </div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h2 className="text-lg font-semibold">
      {children}
    </h2>
  );
};

export { Card, CardHeader, CardContent, CardTitle };