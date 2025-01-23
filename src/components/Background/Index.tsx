import React from 'react';
import './style.scss';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 background z-1" >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-95" />
      <div className="absolute inset-0 backdrop-blur-sm" />
      <div className="glow-effect" />
      <div className="glow-effect-small" />
    </div>
  );
};

