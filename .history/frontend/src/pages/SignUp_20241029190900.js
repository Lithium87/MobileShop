import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import loginIcons from '../assest/signin.gif';
import {FaEye} from 'react-icons/fa';
import {FaEyeSlash} from 'react-icons/fa';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState (false);
  const [showConfirmPassword, setShowConfirmPassword] = useState (false);
  const [data, setData] = useState ({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePic: '',
  });

  const handleOnChange = e => {
    const {name, value} = e.target;

    setData (prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault ();
  };

  console.log ('Data login: ', data);

  return (
    <section id="signup">
      <div className="mx-auto-container p-4">
        <div className="bg-white p-4 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icon" />
          </div>

          <form className="pt-5 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Enter yor name"
                  className="w-full -h-full outline-none bg-transparent"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full -h-full outline-none bg-transparent"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
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
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
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

            <div>
              <label>Confirm Password: </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm password"
                  className="w-full -h-full outline-none bg-transparent"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword (prev => !prev)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Sign Up
            </button>
          </form>

          <p className="my-5">
            Already have an account?
            {' '}
            <Link
              to={'/login'}
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
