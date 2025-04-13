
import React from 'react';

interface StatCardProps {
  number: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="bg-akcess-lime rounded-full w-12 h-12 flex items-center justify-center text-akcess-black font-bold mb-4">
        {number}
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-300 text-center md:text-left">{description}</p>
    </div>
  );
};

export default StatCard;
