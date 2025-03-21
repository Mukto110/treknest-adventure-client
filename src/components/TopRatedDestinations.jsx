import React from "react";

const TopRatedDestinations = () => {
  const topDestinations = [
    {
      id: 1,
      name: "Cox’s Bazar",
      image:
        "https://i.ibb.co.com/KxvdVnyr/ehsan-rahman-oj-A0-DBpe7oc-unsplash.jpg",
      rating: "⭐ 4.8",
    },
    {
      id: 2,
      name: "Sundarbans",
      image:
        "https://i.ibb.co.com/G38G90yj/mamun-srizon-m-NVk2uup-Xs0-unsplash.jpg",
      rating: "⭐ 4.7",
    },
    {
      id: 3,
      name: "Sajek Valley",
      image:
        "https://i.ibb.co.com/Y47HQ7XR/mainul-islam-zz-GGb-HIc-WMU-unsplash.jpg",
      rating: "⭐ 4.6",
    },
  ];

  return (
    <section className="my-12 px-4 md:px-2 lg:px-0">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        🌟 Top Rated Destinations
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {topDestinations.map((spot) => (
          <div
            key={spot.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition"
          >
            <img
              src={spot.image}
              alt={spot.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{spot.name}</h3>
              <p className="text-gray-500">{spot.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedDestinations;
