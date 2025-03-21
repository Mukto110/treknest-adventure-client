import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TouristSpotCard from "./TouristSpotCard";

const TouristSpotSection = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTouristSpots = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tourist-spots");
        const data = await response.json();
        setTouristSpots(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching tourist spots:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTouristSpots();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          🌍 Explore Tourist Spots
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {touristSpots.map((spot) => (
              <TouristSpotCard key={spot._id} spot={spot} />
            ))}
          </div>
        )}

        <button
          onClick={() => navigate("/tourist-spots")}
          className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-600"
        >
          View All 🌎
        </button>
      </div>
    </section>
  );
};

export default TouristSpotSection;
