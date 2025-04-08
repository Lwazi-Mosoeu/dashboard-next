import React from "react";

interface CardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

const Card: React.FC<CardProps> = ({ icon, value, label }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg flex items-center">
      <div className="p-2 bg-gray-100 rounded-full text-gray-700">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg font-bold">{value}</h3>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
};

export default Card;
