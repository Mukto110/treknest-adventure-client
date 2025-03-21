import { Link } from "react-router-dom";

const TouristSpotCard = ({ spot }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={spot.image}
        alt={spot.tourists_spot_name}
        className="w-full rounded-lg h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mt-3">{spot.tourists_spot_name}</h3>
      <p className="text-gray-600 text-sm mt-1">
        {spot.short_description.slice(0, 100)}...
      </p>
      <Link to={`/tourist-spots/${spot._id}`}>
        <button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default TouristSpotCard;
