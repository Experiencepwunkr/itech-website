export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch with our team for any inquiries</p>
        </div>
        
        <div className="space-y-6 mb-12">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center justify-center">
              <span className="mr-2">📧</span> 
              <a href="mailto:itech_enterprises@outlook.com" className="text-blue-600 hover:text-blue-800">itech_enterprises@outlook.com</a>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">📧</span> 
              <a href="mailto:info@itechenterprises.net" className="text-blue-600 hover:text-blue-800">info@itechenterprises.net</a>
            </div>
          </div>
          <p className="flex items-center justify-center">
            <span className="mr-2">☎</span> 
            <a href="tel:+2348102466786" className="text-blue-600 hover:text-blue-800">+234 810 246 6786</a>
          </p>
          <p className="flex items-center justify-center">
            <span className="mr-2">🏢</span> 
            168 Itire Road, Surulere, Lagos, Nigeria
          </p>
        </div>
        
        <div className="pt-8">
          <a 
            href="https://wa.me/2348102466786" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
        
        <p className="text-gray-600 mt-12">© {new Date().getFullYear()} ITECH ENTERPRISES (BN7718782). All Rights Reserved.</p>
      </div>
    </div>
  );
}