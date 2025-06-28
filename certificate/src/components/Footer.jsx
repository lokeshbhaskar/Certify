import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white mt-6 p-10 ">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-4">Certify</h3>
          <p className="text-sm text-gray-400">
            Empowering learners to achieve more through verified certifications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">Certifications</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">For Enterprise</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <p className="text-sm text-gray-300">
            Email: <a href="mailto:support@certify.com" className="hover:text-white">support@certify.com</a>
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Phone: +91 12345 67890
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-orange-500">LinkedIn</a>
            <a href="#" className="hover:text-orange-500">Twitter</a>
            <a href="#" className="hover:text-orange-500">Instagram</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Certify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
