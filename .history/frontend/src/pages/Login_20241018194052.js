import React, {useState} from 'react';
import loginIcons from '../assest/signin.gif';
import {FaEye} from 'react-icons/fa';
import {FaEyeSlash} from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState (false);

  return (
    <section id="login">
      <div className="mx-auto-container p-4">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icon" />
          </div>

          <form>
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full -h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password: </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="w-full -h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword (prev => !prev)}
                >
                  <span>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 text-white w-full px-6 py-2 max-w-[150px] rounded-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
