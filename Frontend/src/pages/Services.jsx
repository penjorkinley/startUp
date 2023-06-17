import { useState } from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    { id: 1, name: 'Service 1', image: 'service1.jpg' },
    { id: 2, name: 'Service 2', image: 'service2.jpg' },
    { id: 3, name: 'Service 3', image: 'service3.jpg' },
    { id: 4, name: 'Service 4', image: 'service4.jpg' },
    { id: 5, name: 'Service 5', image: 'service5.jpg' },
    { id: 6, name: 'Service 6', image: 'service6.jpg' },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  const handleCardHover = (id) => {
    setHoveredId(id === hoveredId ? null : id);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="relative overflow-hidden bg-white rounded-lg shadow"
          onMouseEnter={() => handleCardHover(service.id)}
          onMouseLeave={() => handleCardHover(service.id)}
          style={{ maxWidth: '440px', minWidth: '220px' }}
        >
          <div
            className="overflow-hidden"
            style={{ paddingBottom: '56.25%' }}
          >
            <img
              src={service.image}
              alt={service.name}
              className={`object-cover object-center w-full h-full ${
                hoveredId === service.id ? 'opacity-75' : 'opacity-100'
              }`}
            />
          </div>
          {hoveredId === service.id && (
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-75 transition-opacity duration-300">
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
