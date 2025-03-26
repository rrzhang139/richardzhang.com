import React from 'react';

export const Bold = ({ children }) => {
  return <span className="font-bold">{children}</span>;
};

export const Italic = ({ children }) => {
  return <span className="italic">{children}</span>;
};

export const Underline = ({ children }) => {
  return <span className="underline">{children}</span>;
}; 