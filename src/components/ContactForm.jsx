import React from 'react';

const ContactForm = () => {
  return (
    <div className="container mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input type="text" className="w-full p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input type="email" className="w-full p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Message:</label>
          <textarea className="w-full p-2 border rounded-lg"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg" style={{
  boxShadow: '3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff'
}}>send</button>

      </form>
    </div>
  );
};

export default ContactForm;
