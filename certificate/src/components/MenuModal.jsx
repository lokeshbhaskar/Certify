// components/layouts/MenuModal.jsx
import React, { useEffect, useRef, useContext } from "react";
import { UserContext } from "../context/userContext"; // update path if needed
import { Link } from "react-router-dom";

const MenuModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const { user, clearUser } = useContext(UserContext); // assuming you have user context

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLogout = () => {
    clearUser();
    // setShowDropdown(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 h-[70vh] bg-white/60 w-full bg-gradient-to-b from-white to-orange-50 z-40 flex flex-col items-center space-y-5 py-10 px-6 shadow-2xl backdrop-blur-sm">
      <div
        ref={modalRef}
        className="w-full flex flex-col items-center overflow-y-auto space-y-5"
      >
        {user ? (
          <>
            <div className="text-lg font-semibold text-gray-800 mt-20">
              👋 Hello, {user.name}
            </div>

            <Link to='/user-dashboard' className="w-full max-w-xs text-center py-3 px-4 rounded-xl bg-white shadow hover:shadow-md transition-all text-lg font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-100">
                Dashboard
            </Link>

            <button
              className="w-full max-w-xs text-center py-3 px-4 rounded-xl bg-white shadow hover:shadow-md transition-all text-lg font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <a
            href="/login"
            className="mt-20 w-full max-w-xs text-center py-3 px-4 rounded-xl bg-white shadow hover:shadow-md transition-all text-lg font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-100"
          >
            Login
          </a>
        )}

        <a
          href="/pricing"
          className="w-full max-w-xs text-center py-3 px-4 rounded-xl bg-white shadow hover:shadow-md transition-all text-lg font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-100"
        >
          Pricing
        </a>
        <a
          href="/support"
          className="w-full max-w-xs text-center py-3 px-4 rounded-xl bg-white shadow hover:shadow-md transition-all text-lg font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-100"
        >
          Support
        </a>
      </div>
    </div>
  );
};

export default MenuModal;
