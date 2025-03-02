import { useState, useEffect } from "react";
import image1 from "../assets/pexels-ekrulila-2305765.jpg";
import image2 from "../assets/pexels-tirachard-kumtanom-112571-887828.jpg";

const images = [image1, image2];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="carousel w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item absolute w-full h-full transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img} className="w-full h-full object-cover" alt="Slide" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                {index === 0 ? "Explore The World" : "Adventure Awaits"}
              </h1>
              <p className="mt-2 text-lg md:text-xl max-w-xl">
                {index === 0
                  ? "Discover breathtaking destinations and unforgettable experiences."
                  : "Experience the thrill of nature and culture like never before."}
              </p>
              <button className="mt-4 px-6 py-3 bg-primary hover:bg-primary-dark transition rounded-lg text-white font-medium">
                {index === 0 ? "Get Started" : "Discover More"}
              </button>
            </div>
          </div>
        ))}

        {/* Manual Navigation */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={() =>
              setCurrentSlide((prevSlide) =>
                prevSlide === 0 ? images.length - 1 : prevSlide - 1
              )
            }
            className="btn btn-circle bg-white/20 hover:bg-white text-white border-none"
          >
            ❮
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
            }
            className="btn btn-circle bg-white/20 hover:bg-white text-white border-none"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
