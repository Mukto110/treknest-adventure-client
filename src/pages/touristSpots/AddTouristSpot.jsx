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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Add a New Tourist Spot
        </h2>

        {message.text && (
          <div
            className={`mb-4 p-4 rounded-md ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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
              label: "Average Cost",
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
            <div className="mb-4" key={name}>
              <label className="block text-sm font-medium text-gray-600">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder={placeholder}
                required
              />
            </div>
          ))}

          <button className="w-full py-3 text-white bg-primary rounded-md hover:bg-primary-dark transition text-sm font-medium">
            Add Spot
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTouristSpot;
