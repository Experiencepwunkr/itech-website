import { Link } from "react-router-dom";
import { useState } from 'react';

export default function AgentRegister() {
  const [formData, setFormData] = useState({
    name: '',
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
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration attempt with:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="https://i.ibb.co/pvCRYYCd/ITECH-ENTERPRISES-Logo-Design.png" 
            alt="ITECH ENTERPRISES" 
            className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-600"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%233B82F6'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='white' font-size='12'%3EITECH%3C/text%3E%3C/svg%3E";
            }}
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Agent Registration</h2>
          <p className="text-gray-600">Create your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="agent@itechenterprises.net"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Create a password"
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Confirm your password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-lg transition font-semibold"
          >
            Create Account
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <Link to="/agent-login" className="text-blue-600 hover:text-blue-800 text-sm">Already have an account? Sign In</Link>
        </div>
        
        <div className="mt-4 text-center">
          <Link to="/" className="text-gray-600 hover:text-gray-800 text-sm">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}