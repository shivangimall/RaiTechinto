// RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [registrationFields, setRegistrationFields] = useState([
    { id: 1, label: 'Full Name', type: 'text', value: '' },
    { id: 2, label: 'Email', type: 'email', value: '' },
    { id: 3, label: 'Phone Number', type: 'tel', value: '' },
    // Add more fields as needed
  ]);

  const handleFieldChange = (id, value) => {
    const updatedFields = registrationFields.map(field =>
      field.id === id ? { ...field, value } : field
    );
    setRegistrationFields(updatedFields);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Registration Form Configuration:</h3>
      <form>
        {registrationFields.map(field => (
          <div key={field.id} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{field.label}:</label>
            <input
              type={field.type}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              value={field.value}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default RegistrationForm;

