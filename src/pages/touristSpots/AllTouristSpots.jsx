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

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
        All Tourist Spots
      </h2>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {touristSpots.map((spot) => (
          <div
            key={spot._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={spot.image}
              alt={spot.tourists_spot_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">
                {spot.tourists_spot_name}
              </h3>
              <p className="text-gray-600">{spot.location}</p>
              <p className="text-gray-500 text-sm">{spot.short_description}</p>
              <p className="text-gray-700 font-bold mt-2">
                Cost: ${spot.average_cost}
              </p>
              <p className="text-gray-600">Season: {spot.seasonality}</p>
              <p className="text-gray-600">Travel Time: {spot.travel_time}</p>
              <p className="text-gray-600">
                Visitors/Year: {spot.totalVisitorsPerYear}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllTouristSpots;
