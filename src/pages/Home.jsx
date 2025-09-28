import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to ITECH ENTERPRISES</h1>
          <p className="text-xl text-gray-600 mb-8">Professional compliance solutions for individuals and businesses</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/services"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-semibold"
            >
              Explore Services
            </Link>
            <a
              href="https://wa.me/2348102466786"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Secure & Reliable</h3>
            <p className="text-gray-600">Government-approved compliance solutions with advanced security measures</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Fast Processing</h3>
            <p className="text-gray-600">Quick turnaround times for all your compliance needs</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Expert Team</h3>
            <p className="text-gray-600">Professional consultants with years of experience</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Quick Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services" className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Services</h3>
              <p className="text-gray-600">View all our compliance services</p>
            </Link>
            <Link to="/knowledge" className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Knowledge Base</h3>
              <p className="text-gray-600">Requirements and documentation</p>
            </Link>
            <Link to="/contact" className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Contact Us</h3>
              <p className="text-gray-600">Get in touch with our team</p>
            </Link>
            <Link to="/agent-login" className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Agent Login</h3>
              <p className="text-gray-600">Access your dashboard</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}