import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-4">Feel free to reach out through the form below or connect with me on social media.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact; 