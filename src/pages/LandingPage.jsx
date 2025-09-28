import { Link } from "react-router-dom";

export default function LandingPage() {
  const services = [
    {
      id: 'identity',
      title: 'Identity & Personal Verification',
      description: 'NIN, BVN, IPE Clearance, and more',
      icon: '🆔',
      color: 'bg-blue-600'
    },
    {
      id: 'corporate',
      title: 'Entity Formation (CAC)',
      description: 'Business Registration, Limited Company, NGO',
      icon: '🏢',
      color: 'bg-purple-600'
    },
    {
      id: 'tax',
      title: 'Tax & Regulatory',
      description: 'JTB, TIN, SCUML, and more',
      icon: '📊',
      color: 'bg-green-600'
    }
  ];

  const features = [
    { title: 'Government Approved', description: 'All services are government-compliant and approved' },
    { title: 'Secure & Reliable', description: 'Your data is protected with advanced security measures' },
    { title: 'Fast Processing', description: 'Quick turnaround times for all services' },
    { title: '24/7 Support', description: 'Get help with anything anytime' },
    { title: 'Expert Team', description: 'Professional consultants with years of experience' },
    { title: 'Transparent Pricing', description: 'Clear and upfront pricing with no hidden fees' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Your Trusted
            <br />
            <span className="text-blue-600">Compliance Platform</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional business registration, compliance, and documentation services. Pay Online → WhatsApp → Service Delivered
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link
              to="/services"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-semibold text-lg"
            >
              Explore Services
            </Link>
            <a
              href="https://wa.me/2348102466786"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition font-semibold text-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Professional compliance solutions for individuals and businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Secure, fast, and reliable compliance services</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition">
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                
                <Link
                  to={`/services#${service.id}`}
                  className={`w-full block text-center py-4 ${service.color} hover:opacity-90 text-white rounded-lg shadow-lg transition font-semibold`}
                >
                  View Services
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing Overview</h2>
            <p className="text-xl text-gray-600">Transparent and competitive pricing for all services</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Identity Verification</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">₦1,500 - ₦8,000</p>
              <p className="text-gray-600">NIN, BVN, IPE Clearance</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Business Registration</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">₦35,000 - ₦280,000+</p>
              <p className="text-gray-600">CAC, Limited Company, NGO</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tax & Regulatory</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">₦10,000 - ₦200,000</p>
              <p className="text-gray-600">TIN, SCUML, Export License</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Documents</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">₦15,000 - ₦150,000</p>
              <p className="text-gray-600">Business Plans, Letters</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12 text-blue-100">
            Join thousands of satisfied clients who trust us with their compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="px-10 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg shadow-lg transition font-semibold text-lg"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/2348102466786"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition font-semibold text-lg"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}