import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Track Expenses",
      description: "Easily log and categorize your expenses.",
    },
    {
      title: "Generate Reports",
      description: "Get detailed reports on your spending habits.",
    },
    {
      title: "Set Budgets",
      description: "Set monthly budgets to control your spending.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 flex items-center justify-center rounded-lg shadow-lg"
          >
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-700 mb-2">{slide.title}</h2>
              <p className="text-lg font-semibold text-black">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Optional: Add navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'} focus:outline-none`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
