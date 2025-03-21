import React, { useEffect, useState } from "react";

const AllTouristSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTouristSpots = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tourist-spots");
        if (!response.ok) throw new Error("Failed to fetch tourist spots");
        const data = await response.json();
        setTouristSpots(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTouristSpots();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
        All Tourist Spots
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {touristSpots.map((spot) => (
          <div
            key={spot._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={spot.image}
              alt={spot.tourists_spot_name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {spot.tourists_spot_name}
              </h3>
              <p className="text-gray-500">{spot.location}</p>
              <p className="text-gray-600 text-sm mt-2">
                {spot.short_description}
              </p>
              <div className="mt-4">
                <p className="text-gray-700 font-bold">
                  💰 Cost: ${spot.average_cost}
                </p>
                <p className="text-gray-600">
                  ❄️ Best Season: {spot.seasonality}
                </p>
                <p className="text-gray-600">
                  ⏳ Travel Time: {spot.travel_time}
                </p>
                <p className="text-gray-600">
                  👥 Visitors: {spot.totalVisitorsPerYear}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllTouristSpots;
