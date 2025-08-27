// src/pages/Support.jsx
import { HelpCircle, Mail, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Support() {
  const faqs = [
    {
      q: "Do I get a certificate?",
      a: "✅ Yes, Pro & Premium plans include certificates after course completion.",
    },
    {
      q: "Can I upgrade later?",
      a: "🔄 Yes, you can upgrade anytime by paying the difference.",
    },
    {
      q: "Is there a refund policy?",
      a: "💰 Yes, you can request a refund within 7 days of purchase.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="px-6 py-16 bg-gradient-to-br from-[#fdcbf1] to-[#e6dee9] min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        Support & FAQ
      </h2>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-4 cursor-pointer transition hover:shadow-xl"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 font-semibold text-gray-800">
                <HelpCircle className="w-5 h-5 text-purple-500" />
                {faq.q}
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </div>
            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  className="mt-3 text-gray-700 pl-7"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Still need help?
        </h3>
        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="mailto:support@yourwebsite.com"
            className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-800">Email Support</span>
          </a>
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 text-green-600" />
            <span className="font-medium text-gray-800">Call Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
