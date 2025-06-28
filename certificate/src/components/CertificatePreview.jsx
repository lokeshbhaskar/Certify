import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import seal from '../assets/logo2.png'
import signlok from '../assets/sign.webp'

const CertificatePreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { task } = location.state || {};
  const { user } = useContext(UserContext);
  // console.log(user);
  const certRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(certRef.current);
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `${user?.name}_${task?.title}_certificate.png`;
    link.click();
  };
 
  if (!task || !user) {
    return (
      <div className="p-10 text-center">
        <p className="text-red-500 font-semibold">Certificate data not available.</p>
        <button
          onClick={() => navigate("/user-dashboard")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    // <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white py-10 px-4 flex flex-col items-center">
    //   <div
    //     ref={certRef}
    //     className="relative bg-white border-[10px] border-double border-yellow-500 p-10 rounded-xl w-[950px] text-center shadow-2xl"
    //   >
    //     {/* Ribbon Top */}
    //     <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-10 py-3 rounded-full font-bold text-xl shadow-md">
    //       Certificate
    //     </div>
    //     {/* Title */}
    //     <h1 className="text-4xl font-extrabold text-yellow-600 mb-4 mt-6 tracking-widest uppercase font-serif">
    //       Certificate of Completion
    //     </h1>

    //     {/* Subtitle */}
    //     <p className="text-md text-gray-600 italic mb-8">
    //       This certificate is proudly presented to
    //     </p>

    //     {/* Recipient Name */}
    //     <h2 className="text-3xl font-bold text-gray-800 underline decoration-yellow-400 mb-6">
    //       {user.name}
    //     </h2>

    //     {/* Task Field */}
    //     <p className="text-lg text-gray-700 mb-4">
    //       For successfully completing the{" "}
    //       <span className="text-yellow-700 font-semibold capitalize">
    //         {task.taskField} Developer
    //       </span>{" "}
    //       task during the Virtual Internship Program.
    //     </p>

    //     {/* Task Title */}
    //     <p className="text-lg text-blue-800 font-semibold mb-8 italic">
    //       Project: {task.title}
    //     </p>

    //     {/* Issued Date */}
    //     <p className="text-sm text-gray-500 mb-6">
    //       Issued on: {new Date().toLocaleDateString()}
    //     </p>

    //     {/* Signature Line */}
    //     <div className="mt-10 flex justify-between px-12">
    //       <div className="text-left">
    //         <div className="w-48 border-t-2 border-gray-500 mb-1"></div>
    //         <p className="font-medium text-sm">Authorized Signature</p>
    //       </div>
    //       <div className="text-right">
    //         <div className="w-48 border-t-2 border-gray-500 mb-1"></div>
    //         <p className="font-medium text-sm">Internship Coordinator</p>
    //       </div>
    //     </div>

    //     {/* Seal */}
    //     <div className="absolute bottom-8 right-8">
    //       <img
    //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ribbon_award_icon.svg/1024px-Ribbon_award_icon.svg.png"
    //         alt="Seal"
    //         className="w-20 h-20 opacity-80"
    //       />
    //     </div>
    //   </div>

    //   {/* Buttons */}
    //   <div className="mt-10 flex gap-4">
    //     <button
    //       onClick={handleDownload}
    //       className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
    //     >
    //       Download Certificate
    //     </button>
    //     <button
    //       onClick={() => navigate("/user-dashboard")}
    //       className="bg-gray-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition"
    //     >
    //       Back to Dashboard
    //     </button>
    //   </div>
    // </div>
     <div className="min-h-screen bg-[#f6f9fc] py-10 px-4 flex flex-col items-center font-serif">
      <div
        ref={certRef}
        className="relative bg-[#FFFFFF] border-[1px] border-[#d1d5db
] rounded-md w-full max-w-4xl px-12 py-10 shadow-lg text-center"
      >
        {/* Border Background Curve Simulations */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#34d399] to-[#60a5fa] rounded-br-full opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#34d399] to-[#60a5fa] rounded-tl-full opacity-60"></div>
        {/* Title */}
        <h1 className="text-4xl font-bold text-[#f97316] tracking-wider mb-2">CERTIFICATE</h1>
        <h2 className="text-2xl font-medium text-[#fdba74] tracking-widest mb-6">OF ACHIEVEMENT</h2>

        {/* Line & Subheading */}
        <div className="w-40 border-t-2 border-[#0891b2] mx-auto my-2"></div>
        <p className="text-md text-[#4b5563] tracking-wide mb-2 uppercase">This certificate is proudly presented to</p>
        {/* Name */}
        <h3 className="island-moments-regular text-5xl italic font-semibold text-[#7c2d12] mb-2">{user.name}</h3>

        {/* Task/Project */}
        <p className="text-sm text-[#374151] leading-relaxed max-w-2xl mx-auto">
          has successfully completed the role of
          <span className="font-semibold"> {task.taskField} Developer </span>
          in the project titled  during the Virtual Internship Program.
        </p>

        {/* Date */}
        <p className="text-xs text-[#6b7280] mt-8">Issued on: {new Date().toLocaleDateString()}</p>

        {/* Signatures */}
        <div className="flex justify-between items-center mt-12 px-4">
          <div className="text-left">
             <img src={signlok} alt="sign_lok" className="w-20 h-16" />
            <p className="font-bold text-sm">Lokesh Kumar</p>
            <p className="text-xs text-[#4b5563]">REPRESENTATIVE</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-[#4b5563] rounded-full flex items-center justify-center">
              <img src={seal} alt="seal-img" className="object-cover w-full h-full " />
            </div>
          </div>
          <div className="text-right">
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Signature_icon.svg/512px-Signature_icon.svg.png" alt="signature" className="w-24 mb-2" /> */}
            <p className="font-bold text-sm">Vivek Kr</p>
            <p className="text-xs text-[#4b5563]">Founder of Certify</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-md transition"
        >
          Download Certificate
        </button>
        <button
          onClick={() => navigate("/user-dashboard")}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded shadow-md transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default CertificatePreview;
