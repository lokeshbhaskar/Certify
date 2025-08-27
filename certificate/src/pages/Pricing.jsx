import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹499",
      features: ["2 Course Access", "Community support", "7 Days validity"],
      highlight: false,
    },
    {
      name: "Basic",
      price: "₹0",
      features: ["Access to free courses", "Community support", "No certificate"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹999",
      features: [
        "All course access",
        "Certificate of completion",
        "Email support",
        "1 Year validity",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "₹2499",
      features: [
        "Lifetime access",
        "1:1 mentor support",
        "Priority certificate verification",
        "Downloadable resources",
      ],
      highlight: false,
    },
    {
      name: "Enterprise",
      price: "₹4999",
      features: [
        "Team access (10 members)",
        "Dedicated mentor",
        "Priority support",
        "Custom learning path",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="px-6 py-20 bg-gradient-to-r from-[#fdcbf1] to-[#e6dee9] min-h-screen">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-14 text-gray-900"
      >
        Choose Your Plan
      </motion.h2>

      {/* Pricing Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`p-8 rounded-3xl shadow-lg text-center bg-white transition relative ${
              plan.highlight
                ? "border-2 border-blue-500 shadow-blue-200"
                : "border border-gray-200"
            }`}
          >
            {/* Plan Title */}
            <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
            <p className="text-4xl font-bold text-blue-600 mt-3">{plan.price}</p>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-gray-600 text-left">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`mt-8 w-full py-3 px-5 rounded-xl font-semibold shadow-md transition 
                ${
                  plan.highlight
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              Get Started
            </motion.button>

            {/* Popular Badge */}
            {plan.highlight && (
              <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                Popular
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
