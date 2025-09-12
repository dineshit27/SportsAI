import React, { useState } from 'react';

export const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <div>
      <div className="tabs">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            isActive: child.props.value === activeTab,
            onClick: () => handleTabClick(child.props.value),
          });
        })}
      </div>
      <div className="tabs-content">
        {React.Children.map(children, (child) => {
          if (child.props.value === activeTab) {
            return child.props.children;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export const TabsList = ({ children }) => {
  return <div className="tabs-list">{children}</div>;
};

export const TabsTrigger = ({ isActive, onClick, children }) => {
  return (
    <button
      className={`tab-trigger ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children }) => {
  return <div className="tabs-content">{children}</div>;
};