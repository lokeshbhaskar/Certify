// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/* Main Content */}
      <main className="flex-grow pt-16  bg-gradient-to-t from-[#fff1eb] to-[#ace0f9] overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
