import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden mx-auto hover:shadow-lg transition-shadow duration-300">
      <div className="w-full bg-gray-100 flex items-center justify-center h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
