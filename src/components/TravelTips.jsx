import React from "react";
import { FaPlane, FaWallet, FaShieldAlt } from "react-icons/fa";

const TravelTips = () => {
  const tips = [
    {
      id: 1,
      icon: <FaPlane className="text-blue-500 text-4xl" />,
      title: "Plan Ahead",
      description:
        "Book your flights and accommodations in advance to get the best deals.",
    },
    {
      id: 2,
      icon: <FaWallet className="text-green-500 text-4xl" />,
      title: "Budget Wisely",
      description:
        "Set a budget and keep track of your expenses to avoid overspending.",
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-red-500 text-4xl" />,
      title: "Stay Safe",
      description:
        "Keep copies of your important documents and be aware of local safety tips.",
    },
  ];

  return (
    <section className="my-12 px-6 md:px-12 lg:px-20 bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        📖 Travel Tips & Insights
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition"
          >
            <div className="mb-4">{tip.icon}</div>
            <h3 className="text-xl font-semibold">{tip.title}</h3>
            <p className="text-gray-500">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelTips;
