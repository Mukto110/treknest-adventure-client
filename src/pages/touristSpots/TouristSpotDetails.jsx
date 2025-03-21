import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TouristSpotDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [spot, setSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTouristSpot = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/tourist-spots/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch tourist spot details");
        }
        const data = await response.json();
        setSpot(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTouristSpot();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
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
    <section className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        {/* Image */}
        <div className="relative">
          <img
            src={spot.image}
            alt={spot.tourists_spot_name}
            className="w-full h-72 object-cover rounded-lg"
          />
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-md text-sm"
          >
            ⬅ Back
          </button>
        </div>

        {/* Details */}
        <div className="mt-6">
          <h2 className="text-3xl font-bold text-gray-700">
            {spot.tourists_spot_name}
          </h2>
          <p className="text-gray-500 text-lg mt-2">{spot.short_description}</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <p>
              <strong>📍 Location:</strong> {spot.location}
            </p>
            <p>
              <strong>🌍 Country:</strong> {spot.country_Name}
            </p>
            <p>
              <strong>💰 Average Cost:</strong> ${spot.average_cost}
            </p>
            <p>
              <strong>❄️ Best Season:</strong> {spot.seasonality}
            </p>
            <p>
              <strong>⏳ Travel Time:</strong> {spot.travel_time}
            </p>
            <p>
              <strong>👥 Visitors Per Year:</strong> {spot.totalVisitorsPerYear}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouristSpotDetails;
