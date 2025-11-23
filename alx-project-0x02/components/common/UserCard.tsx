import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <div className="space-y-2 text-gray-600">
        <p className="flex items-center">
          <span className="font-medium mr-2">Email:</span>
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
            {email}
          </a>
        </p>
        <div className="pt-2 border-t border-gray-200">
          <p className="font-medium mb-1">Address:</p>
          <p className="text-sm">
            {address.suite} {address.street}
          </p>
          <p className="text-sm">
            {address.city}, {address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
