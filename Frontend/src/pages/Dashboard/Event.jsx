
function Event() {
  const events = [
    {
      id: 1,
      eventName: "Webinar: Introduction to React",
      status: "Active",
      date: "June 20, 2023",
    },
    // Add more events as needed
  ];

  const totalEvents = events.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Event</h2>
        <div>
        <span className="text-gray-500 ml-2 mr-4">Total: {totalEvents}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Add Event
          </button>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 text-left border">Sl. No.</th>
            <th className="py-2 text-left border">Event Name</th>
            <th className="py-2 text-left border">Status</th>
            <th className="py-2 text-left border">Date</th>
            <th className="py-2 text-left border">Detail</th>
            <th className="py-2 text-left border">Edit</th>
            <th className="py-2 text-left border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td className="py-2 border">{index + 1}</td>
              <td className="py-2 border">{event.eventName}</td>
              <td className="py-2 border">{event.status}</td>
              <td className="py-2 border">{event.date}</td>
              <td className="py-2 border">
                <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded">
                  Detail
                </button>
              </td>
              <td className="py-2 border">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
                  Edit
                </button>
              </td>
              <td className="py-2 border">
                <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Event;
