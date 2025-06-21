import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Login = () => {
  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { backendUrl, setShowLogin, setToken, setUser } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">
      <motion.form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500 w-[90%] max-w-md shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
        <p className="text-sm text-center mb-4">Welcome back! Please sign in to continue</p>

        {state !== 'Login' && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-3">
            <img src={assets.email_icon} alt="" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="outline-none text-sm w-full"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-3">
          <img src={assets.email_icon} alt="" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="outline-none text-sm w-full"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-3">
          <img src={assets.lock_icon} alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="outline-none text-sm w-full"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot password?</p>

        <button className="bg-blue-600 w-full text-white py-2 rounded-full transition-all hover:bg-blue-700">
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {state === 'Login' ? (
          <p className="mt-5 text-center text-sm">
            Don't have an account?{' '}
            <span onClick={() => setState('Sign Up')} className="text-blue-600 cursor-pointer font-medium">
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center text-sm">
            Already have an account?{' '}
            <span onClick={() => setState('Login')} className="text-blue-600 cursor-pointer font-medium">
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 cursor-pointer w-5"
          src={assets.cross_icon}
          alt="close"
        />
      </motion.form>
    </div>
  );
};

export default Login;
