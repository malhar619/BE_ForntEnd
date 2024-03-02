import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import backgroundImage from '../components/background/background.jpg'
const Login = () => {
  const { user, loginUser } = useAuth();
  const navigate = useNavigate();

  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };

    loginUser(userInfo);
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="login-register-container bg-gray-900 bg-opacity-90 rounded-lg p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300">
        <form onSubmit={handleSubmit} ref={loginForm} className="text-center">

          <div className="mb-6">
            <label className="block text-green-400 text-sm font-bold mb-2 text-justify">Email:</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter email..."
              className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label className="block text-green-400 text-sm font-bold mb-2 text-justify">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password..."
              autoComplete="password"
              className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <input
              type="submit"
              value="Login"
              className="btn bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-full cursor-pointer transition duration-300"
            />
          </div>
        </form>

        <p className="text-white">
          Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
