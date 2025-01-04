import React, { useState } from "react";
import Navbar from "../components/navbar";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Logged in:", { email, password });
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <Navbar />
         <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <div className="mb-4">
               <label className="block text-gray-700">Email</label>
               <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
               />
            </div>
            <div className="mb-6">
               <label className="block text-gray-700">Password</label>
               <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
               />
            </div>
            <button
               type="submit"
               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
               Login
            </button>
         </form>
      </div>
   );
};

export default Login;