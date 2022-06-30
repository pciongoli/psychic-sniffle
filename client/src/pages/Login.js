import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
   const [formState, setFormState] = useState({ username: "", password: "" });
   const [login, { error }] = useMutation(LOGIN);

   // update state based on form input changes
   const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
         ...formState,
         [name]: value,
      });
   };

   // submit form
   const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
         const { data } = await login({
            variables: { ...formState },
         });

         Auth.login(data.login.token);
      } catch (e) {
         console.error(e);
      }

      // clear form values
      setFormState({
         username: "",
         password: "",
      });
   };

   return (
      <main className="flex-row justify-center mb-4">
         <div className="col-12 col-md-6">
            <div className="login-box">
               <h2 className="">Login</h2>
               <div className="card-body">
                  <form onSubmit={handleFormSubmit}>
                     <div className="user-box">
                        <input
                           className="form-input"
                           placeholder="Your username"
                           name="username"
                           type="username"
                           id="username"
                           value={formState.username}
                           onChange={handleChange}
                        />
                     </div>
                     <div className="user-box">
                        <input
                           className="form-input"
                           placeholder="Enter Password"
                           name="password"
                           type="password"
                           id="password"
                           value={formState.password}
                           onChange={handleChange}
                        />
                     </div>

                     <button className="btn d-block w-100" type="submit">
                        <span></span>
                        Login
                     </button>
                  </form>
                  {error && <div>Login failed</div>}
               </div>
            </div>
         </div>
      </main>
   );
};

export default Login;
