import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUpInputFields } from '../../constents';
const SignupForm = () => {
  
      const [user,setUser] = useState({
              firstname: "",
              lastname: "",
              phoneNumber: "",
              password: "",
              confirmPassword: ""

          })
      
        
          const handleInputChange = (e)=>{
              const { name, value } = e.target;
              setUser((prevUser) => ({
                  ...prevUser,
                  [name]: value
              }));
          }
          const handleFormSubmit = (e) => {
              e.preventDefault();
              console.log("Form submitted:", user);
                setUser({
                    firstname: "",
                    lastname: "",
                    phoneNumber: "",
                    password: "",
                    confirmPassword: ""
                });
                // Add your login logic here
          }
          return (
              <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 px-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg w-full max-w-md px-6 sm:px-8 py-6 text-white text-center border border-white/20">
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-indigo-200 mb-2">SignUp Here</h1>
                      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 mt-4 text-start">
                          {signUpInputFields.map((field, index) => (
                              <div key={index} className="flex flex-col">
                                  <label className="font-semibold text-indigo-100 mb-1">{field.label}</label>
                                  <input
                                      type={field.type}
                                      name={field.name}
                                      value={user[field.name]}
                                      placeholder={field.placeholder}
                                      required
                                      onChange={handleInputChange}
                                      autoComplete="off"
                                      className="outline-none border border-indigo-400/40 bg-indigo-100/80 text-indigo-900 px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 transition"
                                  />
                              </div>
                          ))}
                          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded mt-4 shadow transition">
                              Sign Up
                          </button>
                          <p className="text-sm mt-2 text-indigo-200">
                              Already have an account? <span className="text-blue-300 hover:underline cursor-pointer"><Link to={'/'}>Login</Link></span>
                          </p>      
                      </form>
                  </div>
              </div>
          );
  
}

export default SignupForm
