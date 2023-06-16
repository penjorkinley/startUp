import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    CID: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      gender: '',
      CID: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-5xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4 flex">
          <label htmlFor="name" className="block w-24 text-gray-700 font-medium mr-4">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 flex-grow focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4 flex">
          <label htmlFor="gender" className="block w-24 text-gray-700 font-medium mr-4">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 flex-grow focus:outline-none focus:border-blue-500">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4 flex">
          <label htmlFor="CID" className="block w-24 text-gray-700 font-medium mr-4">CID:</label>
          <input type="text" id="CID" name="CID" value={formData.CID} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 flex-grow focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4 flex">
          <label htmlFor="email" className="block w-24 text-gray-700 font-medium mr-4">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 flex-grow focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4 flex">
          <label htmlFor="password" className="block w-24 text-gray-700 font-medium mr-4">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 flex-grow focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4 flex">
          <label htmlFor="confirmPassword" className="block w-24 text-gray-700 font-medium mr-4">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 flex-grow focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Login;
