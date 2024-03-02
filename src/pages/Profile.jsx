import React from 'react';
import { useAuth } from '../utils/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto p-4 text-green-400 border shadow-md bg-gray-900 bg-opacity-90 rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-4">User Details</h1>
        {user ? (
          <div className='text-white'>
            <p className="text-lg">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {user.email}
            </p>
            
            {/* Add other profile details as needed */}
          </div>
        ) : (
          <p className="text-lg">No user details available</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
