import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';
import { HomeIcon } from '@heroicons/react/solid';

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();

  const logoutClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <div className="bg-[#1c1c24] rounded-[100px] p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link id="header-logo" to="/" className="flex items-center text-xl font-bold">
              <HomeIcon className="h-6 w-6 mr-2 ml-5 text-green-400" /> {/* Home icon */}
            </Link>
          </div>

          <div className="flex space-x-4">
            {user ? (
              <>
                <button
                  onClick={() => navigate('/profile')}
                  className="btn bg-[#2c2f32] text-green-400 px-4 py-2 rounded-full hover:bg-green-400 hover:text-[#2c2f32] transition-colors"
                >
                  Profile
                </button>

                

                <button
                  onClick={() => navigate('/About')}
                  className="btn bg-[#2c2f32] text-green-400 px-4 py-2 rounded-full hover:bg-green-400 hover:text-[#2c2f32] transition-colors"
                >
                  About
                </button>
                <button
                  onClick={logoutUser}
                  className="btn bg-[#2c2f32] text-green-400 px-4 py-2 rounded-full hover:bg-green-400 hover:text-[#2c2f32] transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="btn bg-[#2c2f32] text-green-400 px-4 py-2 rounded-full hover:bg-green-400 hover:text-[#2c2f32] transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
