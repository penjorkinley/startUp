import { useState } from "react";

function User() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "Admin",
    },
    // Add more users as needed
  ];

  const totalUsers = users.length;

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here
    console.log("Searching for:", searchValue);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">User</h2>
        <div className="flex items-center">
          <span className="text-2xl font-bold">{totalUsers}</span>
          <span className="ml-2 text-gray-600">Total</span>
        </div>
      </div>
      <div className="mb-4 flex justify-center">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 mr-2"
          />
          <button
            type="submit"
            className="bg-yellow-300 text-black px-4 py-2 rounded-md"
          >
            Search
          </button>
        </form>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 text-left">Sl. No</th>
            <th className="py-2 text-left">Name</th>
            <th className="py-2 text-left">UserRole</th>
            <th className="py-2 text-left">Details</th>
            <th className="py-2 text-left">Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="py-2 border-b">{index + 1}</td>
              <td className="py-2 border-b">{user.name}</td>
              <td className="py-2 border-b">{user.role}</td>
              <td className="py-2 border-b">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Detail
                </button>
              </td>
              <td className="py-2 border-b">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
