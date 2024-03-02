import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import backgroundImage from '../components/background/background.jpg'
const Register = () => {
  const registerForm = useRef(null);
  const { registerUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password1.value;
    const password2 = registerForm.current.password2.value;

    if (password1 !== password2) {
      alert('Passwords did not match!');
      return;
    }

    const userInfo = { name, email, password1, password2 };

    registerUser(userInfo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="login-register-container bg-gray-900 bg-opacity-90 rounded-lg p-8 rounded-md shadow-md  transform hover:scale-105 transition-transform duration-300 max-w-md w-full">
        <form ref={registerForm} onSubmit={handleSubmit} className="text-center">

          <div className="mb-6">
            <label className="block text-green-400 text-sm text-justify font-bold mb-2">Name:</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter name..."
              className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label className="block text-green-400 text-sm text-justify font-bold mb-2">Email:</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter email..."
              className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label className="block text-green-400 text-sm text-justify font-bold mb-2">Password:</label>
            <input
              type="password"
              name="password1"
              placeholder="Enter password..."
              autoComplete="password1"
              className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label className="block text-green-400 text-sm text-justify font-bold mb-2">Confirm Password:</label>
            <input
              type="password"
              name="password2"
              placeholder="Confirm password..."
              autoComplete="password2"
              className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <input
              type="submit"
              value="Register"
              className="btn bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full cursor-pointer transition duration-300"
            />
          </div>
        </form>

        <p className="text-white">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
