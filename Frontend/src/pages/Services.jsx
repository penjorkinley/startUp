import { useState } from "react";
import { Link } from "react-router-dom";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";

function Services() {
  const services = [
    { id: 1, name: "Changzamto SC", image: service1 },
    { id: 2, name: "Dangdum SC", image: service2 },
    { id: 3, name: "CST", image: service3 },
    { id: 4, name: "GCB", image: service4 },
    { id: 5, name: "CNR", image: service5 },
    { id: 6, name: "Sherubtse", image: service1 },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  const handleCardHover = (id) => {
    setHoveredId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="relative bg-white rounded-lg shadow"
          onMouseEnter={() => handleCardHover(service.id)}
          onMouseLeave={() => handleCardHover(service.id)}
          style={{
            maxWidth: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <div
            className="overflow-hidden"
            style={{ paddingBottom: "56.25%", position: "relative" }}
          >
            <img
              src={service.image}
              alt={service.name}
              className={`object-cover object-center w-full h-full ${
                hoveredId === service.id ? "opacity-75" : "opacity-100"
              }`}
              style={{ position: "absolute" }}
            />
          </div>
          {hoveredId === service.id && (
            <div
              className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-75 transition-opacity duration-300"
              style={{ width: "100%", height: "100%" }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.name}
              </h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-2">
                Learn More
              </button>
              <Link to="/incube">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                  Book
                </button>
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Services;
