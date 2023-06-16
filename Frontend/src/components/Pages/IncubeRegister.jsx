import { useState } from 'react';

function IncubeRegister() {
  const [formData, setFormData] = useState({
    institution: '',
    training: '',
    duration: '',
    businessType: '',
    businessDescription: '',
    supportRequired: '',
    technologyUsed: '',
    locationAfterGraduation: '',
    spaceRequired: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
  };

  const handleCancel = () => {
    // TODO: Handle cancel action
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Details about additional qualification/Training program attended</h2>
      <div className="mb-4">
        <label htmlFor="institution" className="block">Name of Institution:</label>
        <input
          type="text"
          id="institution"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="training" className="block">Training:</label>
        <input
          type="text"
          id="training"
          name="training"
          value={formData.training}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="duration" className="block">Duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">Proposed Business Information</h2>
      <div className="mb-4">
        <label htmlFor="businessType" className="block">Business Type:</label>
        <div>
          <input
            type="radio"
            id="existingBusiness"
            name="businessType"
            value="Existing Business"
            checked={formData.businessType === 'Existing Business'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="existingBusiness">Existing Business</label>
        </div>
        <div>
          <input
            type="radio"
            id="newBusiness"
            name="businessType"
            value="New Business"
            checked={formData.businessType === 'New Business'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="newBusiness">New Business</label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="businessDescription" className="block">Brief description of Business Idea:</label>
        <textarea
          id="businessDescription"
          name="businessDescription"
          value={formData.businessDescription}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="supportRequired" className="block">Support required from business Incubation center:</label>
        <textarea
          id="supportRequired"
          name="supportRequired"
          value={formData.supportRequired}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="technologyUsed" className="block">Technology to use:</label>
        <textarea
          id="technologyUsed"
          name="technologyUsed"
          value={formData.technologyUsed}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="locationAfterGraduation" className="block">Business location after graduation:</label>
        <textarea
          id="locationAfterGraduation"
          name="locationAfterGraduation"
          value={formData.locationAfterGraduation}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="spaceRequired" className="block">Space Required (sq.ft):</label>
        <input
          type="text"
          id="spaceRequired"
          name="spaceRequired"
          placeholder="sq.ft"
          value={formData.spaceRequired}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        />
      </div>

      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Preview</button>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        <button type="button" onClick={handleCancel} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
  );
}

export default IncubeRegister;
