export default function Knowledge() {
  const knowledgeBase = [
    {
      category: "Identity & Personal Verification",
      requirements: [
        "Full Name, NIN or BVN, Date of Birth (DOB), and a recent Passport Photograph."
      ]
    },
    {
      category: "Entity Formation (CAC)",
      requirements: [
        "Two Proposed Names",
        "Director(s)/Proprietor(s) Details: Full Names, Addresses, Phone Numbers, Emails",
        "Valid Means of ID: NIN Slip, Voter's Card, or Int'l Passport for all individuals"
      ]
    },
    {
      category: "Corporate Governance",
      requirements: [
        "The Company's Certificate of Incorporation",
        "CAC Registration Number",
        "Audited Financial Statements (for Annual Returns) for the years being filed"
      ]
    },
    {
      category: "Tax & Regulatory",
      requirements: [
        "Company's CAC Certificate or Business Name Registration",
        "Company's Address",
        "Official Company Letterhead (scanned)"
      ]
    },
    {
      category: "SCUML Express Service Package",
      requirements: [
        "Company's Certificate of Incorporation",
        "FIRS TIN Certificate",
        "Valid IDs of Directors",
        "Proof of Address (utility bill/rent agreement)"
      ]
    },
    {
      category: "Intellectual Property",
      requirements: [
        "The proposed Mark/Logo (high-resolution image)",
        "The Class of Goods/Services",
        "The Applicant's Full Name and Address"
      ]
    },
    {
      category: "Professional Documentation",
      requirements: [
        "Business Idea or Concept Note",
        "Target Market information",
        "Financial Data (Revenue/Cost estimates)",
        "Company Vision/Mission (if available)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Knowledge Base</h2>
          <p className="text-xl text-gray-600">Essential requirements and documentation for all our services</p>
        </div>
        
        <div className="space-y-8">
          {knowledgeBase.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">{category.category}</h3>
              <ul className="space-y-4">
                {category.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <span className="text-2xl text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">Need more information about our services?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/2348102466786"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition font-semibold"
            >
              Chat with Support
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}