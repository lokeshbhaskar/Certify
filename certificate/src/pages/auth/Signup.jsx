import React, { useContext, useState } from "react";
import Navbar from "../../components/layouts/Navbar";
import { Link, useNavigate } from "react-router-dom";
import ProfileSelector from "../../components/inputs/ProfileSelector";
import uploadImage from "../../utils/uploadImage";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/userContext";
import bgimg from "../../assets/bgimg.png";
import Loader from "./Loader";

const Signup = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let profileImageUrl = "";

    // Validation
    if (!fullName) return setError("Please enter your name");
    if (!validateEmail(email)) return setError("Please enter a valid email");
    if (!password) return setError("Please enter a password");

    try {
      // Upload image if selected
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
        profileImageUrl,
      });

      const { token } = response.data;
      setTimeout(() => {
        if (token) {
          localStorage.setItem("token", token);
          updateUser(response.data);
          navigate("/");
        }
        setIsLoading(false);
      }, 3000); // Simulate loading delay
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen  not-last: flex items-center justify-center  pt-20 md:pt-0"
       style={{
              backgroundImage: `url(${bgimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
              // height: "100vh", // or any desired height
              // width: "100%", // optional
            }}
      >
        <div className=" w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[60%] rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
          {/* Left Side */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center ">
            <h2 className="text-4xl text-white font-bold mb-4">Sign Up</h2>
            <p className="text-lg text-cyan-600">
              Already have an account? <br />
              <Link to="/login" className="text-blue-500 text-[16px] ">
                Sign In
              </Link>
            </p>
            <img
              src="https://img.freepik.com/premium-photo/man-riding-pencil-rocket_81048-542.jpg"
              alt="Rocket man"
              className="w-36 mx-auto mt-10 rounded-2xl"
            />
          </div>

          {/* Right Side */}
          <form
            onSubmit={handleSignup}
            className="md:w-1/2  p-10 flex flex-col justify-center"
          >
            <div className="p-10 flex flex-col justify-center">
              <ProfileSelector image={profilePic} setImage={setProfilePic} />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="p-3 mb-4 border rounded-lg w-full bg-gray-100"
              />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 mb-4 border rounded-lg w-full bg-gray-100"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 mb-4 border rounded-lg w-full bg-gray-100"
              />
              {error && <p className="text-red-500 mb-3">{error}</p>}
              <button
                type="submit"
                className="bg-orange-600 text-white py-3 rounded-lg mb-4 shadow-md cursor-pointer"
                disabled={isLoading}
              >
                Sign Up
              </button>
              {isLoading && (
                <div className="flex justify-center items-center">
                  <Loader />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
