'use client'
import { handleClick } from '@/api/getDataWebflow';
import React from 'react';
import { ButtonCJProps } from '@/interfaces';

const ButtonCJ: React.FC<ButtonCJProps> = ({ children}) => {
  return (
    <button
      onClick={handleClick}
      className="bg-transparent border-2 border-blue-500 text-blue-500 text-tiny font-bold uppercase hover:text-orange-500 hover:border-orange-500 rounded-lg px-8 py-2 transition duration-150 ease-in-out"
    >
      {children}
    </button>
  );
};

export default ButtonCJ;
