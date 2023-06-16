
function Programs() {
  const events = [
    {
      id: 1,
      title: 'Webinar: Introduction to React',
      date: 'June 20, 2023',
      location: 'Online',
    },
    {
      id: 2,
      title: 'Workshop: Mastering CSS Grid',
      date: 'July 5, 2023',
      location: 'City Conference Center',
    },
    {
      id: 3,
      title: 'Conference: Future of Technology',
      date: 'August 12-14, 2023',
      location: 'Grand Hotel',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-2">{event.date}</p>
            <p className="text-gray-600 mb-4">{event.location}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Register</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
