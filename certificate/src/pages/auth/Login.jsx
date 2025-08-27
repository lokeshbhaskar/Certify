// import React, { useContext, useEffect, useState } from "react";
// import Navbar from "../../components/layouts/Navbar";
// import { Link, useNavigate } from "react-router-dom";
// import axiosInstance from "../../utils/axiosInstance";
// import { API_PATHS } from "../../utils/apiPaths";
// import { UserContext } from "../../context/userContext";
// import bgimg from "../../assets/bgimg.png";
// import Loader from "./Loader";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { updateUser } = useContext(UserContext);

  
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }
//     if (!password) {
//       setError("Please enter a valid password");
//       return;
//     }
//     setError("");

//     try {
//       const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
//         email,
//         password,
//       });
//       const { token } = response.data;
//       setTimeout(() => {
//         if (token) {
//           localStorage.setItem("token", token);
//           updateUser(response.data);
//           navigate("/");
//         }
//         setIsLoading(false);
//       }, 3000); 
//     } catch (error) {
//       if (error.response?.data?.message) {
//         setError(error.response.data.message);
//       } else {
//         setError("Something went wrong. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen w-full"
//       style={{
//         backgroundImage: `url(${bgimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "repeat",
       
//       }}
//     >
    
//       <div className="min-h-screen  flex items-center justify-center pt-20 ">
//         <div className=" w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[60%] rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
//           {/* Left Side */}
//           <div className="md:w-1/2 p-10 flex flex-col justify-center  ">
//             <h2 className="text-4xl text-white font-bold mb-4">Sign In</h2>
//             <p className="text-lg text-cyan-600">
//               Don't have an account?
//               <br />
//               <Link to="/signup" className="text-blue-500 text-[16px]">
//                 Sign Up
//               </Link>
//             </p>
//             <img
//               src="https://img.freepik.com/premium-photo/man-riding-pencil-rocket_81048-542.jpg"
//               alt="Rocket man"
//               className="w-36 mx-auto mt-10 rounded-2xl"
//             />
//           </div>

//           {/* Right Side */}
//           <form onSubmit={handleLogin} className="md:w-1/2  ">
//             <div className="p-10 flex flex-col justify-center">
//               <input
//                 type="email"
//                 placeholder="Enter Email"
//                 className="p-3 mb-4 border rounded-lg w-full bg-gray-100"
//                 value={email}
//                 onChange={({ target }) => setEmail(target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="p-3 mb-4 border rounded-lg w-full bg-gray-100"
//                 value={password}
//                 onChange={({ target }) => setPassword(target.value)}
//               />
//               {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
//               <button
//                 type="submit"
//                 className="bg-orange-600 text-white py-3 rounded-lg mb-4 shadow-md cursor-pointer"
//                 disabled={isLoading}
//               >
//                 Sign In
//               </button>

//               <Link className="text-amber-400" to="/admin-login">
//                 Login as Admin
//               </Link>

//               {isLoading && (
//                 <div className="flex justify-center items-center">
//                   <Loader />
//                 </div>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/userContext";
import Loader from "./Loader";
import { Mail, Lock, Power } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }
    if (!password) {
      setError("Please enter a valid password");
      setIsLoading(false);
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="bg-neutral-900 rounded-2xl shadow-xl w-[90%] max-w-md p-8 flex flex-col items-center">
        {/* Logo or Circle */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mb-6">
          <span className="text-xl font-bold"><Power /></span>
        </div>

        <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-400 text-sm mb-6">
          Don’t have an account yet?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>

        <form onSubmit={handleLogin} className="w-full">
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="email address"
              className="w-full pl-10 pr-3 py-3 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>

          <div className="relative mb-4">
            <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-3 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg mb-4"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          {isLoading && (
            <div className="flex justify-center">
              <Loader />
            </div>
          )}
        </form>

        <div className="w-full flex items-center my-4">
          <hr className="flex-grow border-gray-700" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Social logins */}
        <div className="flex gap-3 w-full">
          <button className="flex-1 bg-neutral-800 py-2 rounded-lg hover:bg-neutral-700">
            
          </button>
          <button className="flex-1 bg-neutral-800 py-2 rounded-lg hover:bg-neutral-700">
            G
          </button>
          <button className="flex-1 bg-neutral-800 py-2 rounded-lg hover:bg-neutral-700">
            ✕
          </button>
        </div>

        <Link to="/admin-login" className="text-gray-400 text-xs mt-6">
          Login as Admin
        </Link>
      </div>
    </div>
  );
};

export default Login;
