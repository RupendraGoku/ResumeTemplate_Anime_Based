import { useState } from "react";

const TopRight = () => {
  const slides = [
    "I’m passionate about building responsive web apps, solving UI/UX problems, and collaborating in teams. Proficient in Java, JavaScript, SQL, React.js, Tailwind, and MongoDB with strong skills in DSA and SDLC.",
    "I have worked on IoT-based Smart Irrigation System, responsive Todo List, and admin panel with JSP & Servlet. I'm skilled in developing scalable, user-friendly interfaces and backend systems.",
    "Certified in React JS by Infosys, 5-star Java coder on HackerRank. Self-taught Java Developer and anime sketching enthusiast. Always eager to learn, build, and contribute to impactful projects."
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (dotIndex) => {
    setIndex(dotIndex);
  };

  return (
    <div className="relative h-full min-h-[200px] flex flex-col justify-between pr-6">
      {/* Slide Content */}
      <p className="text-sm leading-relaxed text-white transition-all duration-300 ease-in-out">
        {slides[index]}
      </p>

      {/* Button and Dots aligned at bottom-right */}
      <div className="flex justify-end items-center gap-4 mt-6">
        <button
          onClick={handleNext}
          className="text-[8px] md:text-[14px] inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-white hover:text-[#c8af4f] transition cursor-pointer"
        >
          READ MORE <span>→</span>
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full border cursor-pointer transition-all duration-300 ${
                i === index
                  ? "scale-110 border-yellow-400 shadow-md"
                  : "opacity-70 hover:opacity-100"
              } ${
                i === 0
                  ? "bg-green-500"
                  : i === 1
                  ? "bg-red-400"
                  : "bg-white border-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRight;
