import React from 'react';
import loginIcons from '../assest/signin.gif';

const Login = () => {
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
              <div>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full -h-full outline-none"
                />
              </div>
            </div>

            <div>
              <label>Password: </label>
              <div>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full -h-full outline-none"
                />
              </div>
            </div>

            <button>Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
