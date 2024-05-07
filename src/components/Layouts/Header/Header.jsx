import React from 'react';

export const Header = ({ children }) => {
  return (
    <header className="w-full h-3/5  bg-cover bg-center " style={{ backgroundImage: 'url(/backHeader.jpg)'}}>
      {children}
    </header>
  );
};
