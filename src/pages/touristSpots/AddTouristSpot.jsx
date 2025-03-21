import React, { useState } from "react";

const AddTouristSpot = () => {
  const [formData, setFormData] = useState({
    image: "",
    tourists_spot_name: "",
    country_name: "Bangladesh",
    location: "",
    short_description: "",
    average_cost: "",
    seasonality: "",
    travel_time: "",
    totalVisitorsPerYear: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/tourist-spots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage({
          text: "✅ Tourist spot added successfully!",
          type: "success",
        });

        // Reset form
        setFormData({
          image: "",
          tourists_spot_name: "",
          country_name: "Bangladesh",
          location: "",
          short_description: "",
          average_cost: "",
          seasonality: "",
          travel_time: "",
          totalVisitorsPerYear: "",
        });
      } else {
        throw new Error(data?.message || "❌ Failed to add tourist spot");
      }
    } catch (error) {
      setMessage({ text: error.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-6">
          Add a New Tourist Spot
        </h2>

        {message.text && (
          <div
            className={`mb-4 p-4 rounded-md text-center font-medium ${
              message.type === "success"
                ? "bg-green-100 text-green-700 border border-green-400"
                : "bg-red-100 text-red-700 border border-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            {
              label: "Image URL",
              name: "image",
              type: "text",
              placeholder: "Enter image URL",
            },
            {
              label: "Tourist Spot Name",
              name: "tourists_spot_name",
              type: "text",
              placeholder: "Enter spot name",
            },
            {
              label: "Location",
              name: "location",
              type: "text",
              placeholder: "Enter location",
            },
            {
              label: "Short Description",
              name: "short_description",
              type: "text",
              placeholder: "Enter description",
            },
            {
              label: "Average Cost (USD)",
              name: "average_cost",
              type: "number",
              placeholder: "Enter cost in USD",
            },
            {
              label: "Seasonality",
              name: "seasonality",
              type: "text",
              placeholder: "e.g. Summer, Winter",
            },
            {
              label: "Travel Time",
              name: "travel_time",
              type: "text",
              placeholder: "e.g. 7 days",
            },
            {
              label: "Total Visitors Per Year",
              name: "totalVisitorsPerYear",
              type: "number",
              placeholder: "e.g. 10000",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 text-sm"
                placeholder={placeholder}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-medium rounded-md transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Adding..." : "Add Tourist Spot"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTouristSpot;
