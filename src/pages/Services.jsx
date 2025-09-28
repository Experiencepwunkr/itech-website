import { useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const [activeTab, setActiveTab] = useState('identity');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Complete service data with professional formatting
  const services = {
    identity: [
      { 
        id: 'nin-verify', 
        name: 'NIN Verification', 
        price: '₦1,500 – ₦3,000', 
        deliverable: 'Verification Status, Basic Demographic Data Match.', 
        description: 'Verification Status, Basic Demographic Data Match.',
        duration: 'Instant',
        officialFees: false,
        category: 'Identity & Personal Verification'
      },
      { 
        id: 'bvn-verify', 
        name: 'BVN Verification', 
        price: '₦1,500 – ₦3,000', 
        deliverable: 'Verification Status, Full Name, DOB, Phone Number Match.', 
        description: 'Verification Status, Full Name, DOB, Phone Number Match.',
        duration: 'Instant',
        officialFees: false,
        category: 'Identity & Personal Verification'
      },
      { 
        id: 'ipe-clearance', 
        name: 'IPE Clearance (Instant)', 
        price: '₦3,000 – ₦5,000', 
        deliverable: 'Official Clearance Confirmation.', 
        description: 'Official Clearance Confirmation.',
        duration: 'Instant',
        officialFees: false,
        category: 'Identity & Personal Verification'
      },
      { 
        id: 'validation', 
        name: 'Validation (Instant)', 
        price: '₦2,000 – ₦4,000', 
        deliverable: 'Instant Data Validation Report.', 
        description: 'Instant Data Validation Report.',
        duration: 'Instant',
        officialFees: false,
        category: 'Identity & Personal Verification'
      },
      { 
        id: 'nin-phone', 
        name: 'NIN With Phone', 
        price: '₦5,000 – ₦8,000', 
        deliverable: 'Confirmation of NIN linked to a specific phone number.', 
        description: 'Confirmation of NIN linked to a specific phone number.',
        duration: '1-2 Days',
        officialFees: false,
        category: 'Identity & Personal Verification'
      },
      { 
        id: 'bvn-retrieval', 
        name: 'BVN Retrieval', 
        price: '₦5,000 – ₦8,000', 
        deliverable: 'Client\'s BVN (Sent via registered SMS/Email).', 
        description: 'Client\'s BVN (Sent via registered SMS/Email).',
        duration: '1-2 Days',
        officialFees: false,
        category: 'Identity & Personal Verification'
      },
      { 
        id: 'self-service-unlink', 
        name: 'Self Service Unlink', 
        price: '₦5,000 – ₦10,000', 
        deliverable: 'Confirmation of data unlinking from your platform.', 
        description: 'Confirmation of data unlinking from your platform.',
        duration: '2-3 Days',
        officialFees: false,
        category: 'Identity & Personal Verification'
      },
      { 
        id: 'modifications', 
        name: 'Modifications', 
        price: '₦15,000 – ₦60,000', 
        deliverable: 'Update confirmation notice.', 
        description: 'Update confirmation notice.',
        duration: '3-7 Days',
        officialFees: true,
        category: 'Identity & Personal Verification'
      },
      { 
        id: 'nin-slips', 
        name: 'NIN Reprint & General Services', 
        price: '₦7,000 – ₦15,000', 
        deliverable: 'New physical NIN Slip or Digital Copy.', 
        description: 'New physical NIN Slip or Digital Copy.',
        duration: '3-7 Days',
        officialFees: true,
        category: 'Identity & Personal Verification'
      }
    ],
    corporate: [
      { 
        id: 'cac-reservation', 
        name: 'CAC RESERVATION & REGISTRATION FAST TRACK', 
        price: '₦35,000 – ₦70,000', 
        deliverable: 'CAC Certificate, Status Report, JTB/FIRS TIN.', 
        description: 'CAC Certificate, Status Report, JTB/FIRS TIN.',
        duration: '7-14 Days',
        officialFees: true,
        category: 'Entity Formation (CAC)'
      },
      { 
        id: 'limited-company', 
        name: 'Limited Company (LTD)', 
        price: '₦80,000 – ₦170,000+', 
        deliverable: 'CAC Certificate, MEMART, Status Report, JTB/FIRS TIN.', 
        description: 'CAC Certificate, MEMART, Status Report, JTB/FIRS TIN.',
        duration: '14-21 Days',
        officialFees: true,
        category: 'Entity Formation (CAC)'
      },
      { 
        id: 'ngo-foundation', 
        name: 'Incorporated Trustees (NGO/Foundation)', 
        price: '₦170,000 – ₦280,000+', 
        deliverable: 'CAC Certificate, Trustees\' Constitution.', 
        description: 'CAC Certificate, Trustees\' Constitution.',
        duration: '21-30 Days',
        officialFees: true,
        category: 'Entity Formation (CAC)'
      },
      { 
        id: 'group-companies', 
        name: 'Group of Companies Formation', 
        price: 'Custom Quote (₦350,000+)', 
        deliverable: 'Multiple CAC Certificates and supporting documents.', 
        description: 'Multiple CAC Certificates and supporting documents.',
        duration: '30+ Days',
        officialFees: true,
        category: 'Entity Formation (CAC)'
      },
      { 
        id: 'us-uk-company', 
        name: 'US or UK Company Registration', 
        price: 'Custom Quote (₦430,000+)', 
        deliverable: 'LLC/LTD Certificate, EIN/VAT equivalent, Bank account setup guide.', 
        description: 'LLC/LTD Certificate, EIN/VAT equivalent, Bank account setup guide.',
        duration: '30+ Days',
        officialFees: true,
        category: 'Entity Formation (CAC)'
      }
    ],
    corporateGovernance: [
      { 
        id: 'annual-returns', 
        name: 'ACTIVATION OF ANNUAL RETURNS', 
        price: '₦13,500 per Year', 
        deliverable: 'CAC Filing Confirmation/Status Change.', 
        description: 'CAC Filing Confirmation/Status Change.',
        duration: '7-14 Days',
        officialFees: true,
        category: 'Corporate Governance'
      },
      { 
        id: 'post-incorporation', 
        name: 'ALL CAC POST INCORPORATION SERVICES', 
        price: '₦30,000 – ₦75,000', 
        deliverable: 'Confirmation of change (Directors, Address, Share Capital, etc.).', 
        description: 'Confirmation of change (Directors, Address, Share Capital, etc.).',
        duration: '7-14 Days',
        officialFees: true,
        category: 'Corporate Governance'
      },
      { 
        id: 'relisting', 
        name: 'CAC RELISTING', 
        price: '₦60,000 – ₦170,000', 
        deliverable: 'Confirmation of Company Status Re-Activation.', 
        description: 'Confirmation of Company Status Re-Activation.',
        duration: '14-21 Days',
        officialFees: true,
        category: 'Corporate Governance'
      },
      { 
        id: 'update-share-details', 
        name: 'UPDATE OF COMPANY SHARE DETAILS', 
        price: '₦90,000 – ₦150,000', 
        deliverable: 'Official confirmation of the updated share structure.', 
        description: 'Official confirmation of the updated share structure.',
        duration: '14-21 Days',
        officialFees: true,
        category: 'Corporate Governance'
      }
    ],
    tax: [
      { 
        id: 'jtb-tin', 
        name: 'JTB & FIRS TIN FAST TRACK', 
        price: '₦10,000 – ₦25,000', 
        deliverable: 'Official TIN Certificate/Slip (JTB and FIRS).', 
        description: 'Official TIN Certificate/Slip (JTB and FIRS).',
        duration: '7-14 Days',
        officialFees: false,
        category: 'Tax & Regulatory'
      },
      { 
        id: 'taxpromax', 
        name: 'TAXPROMAX FIRS TIN VALIDATION', 
        price: '₦15,000 – ₦30,000', 
        deliverable: 'Validation Report or Updated TIN Status.', 
        description: 'Validation Report or Updated TIN Status.',
        duration: '3-7 Days',
        officialFees: false,
        category: 'Tax & Regulatory'
      },
      { 
        id: 'redirection-tin', 
        name: 'REDIRECTION OF TIN MSTO', 
        price: '₦25,000 – ₦40,000', 
        deliverable: 'Official notification of change in Tax Office.', 
        description: 'Official notification of change in Tax Office.',
        duration: '14-21 Days',
        officialFees: false,
        category: 'Tax & Regulatory'
      },
      { 
        id: 'scuml', 
        name: 'SCUML EXPRESS SERVICE PACKAGE', 
        price: '₦40,000 – ₦70,000', 
        deliverable: 'SCUML Certificate and Compliance Report.', 
        description: 'SCUML Certificate and Compliance Report.',
        duration: '14-21 Days',
        officialFees: false,
        category: 'Tax & Regulatory'
      },
      { 
        id: 'export-license', 
        name: 'EXPORT LICENSE - NEPC', 
        price: '₦100,000 – ₦200,000', 
        deliverable: 'NEPC Export License Certificate.', 
        description: 'NEPC Export License Certificate.',
        duration: '21-30 Days',
        officialFees: true,
        category: 'Tax & Regulatory'
      }
    ],
    ip: [
      { 
        id: 'trademark', 
        name: 'TRADEMARK (Search, Acknowledgment & Acceptance Letter)', 
        price: '₦150,000 – ₦300,000', 
        deliverable: 'Official Search Report, Acknowledgment Letter, Acceptance Letter.', 
        description: 'Official Search Report, Acknowledgment Letter, Acceptance Letter.',
        duration: '6-12 Months',
        officialFees: true,
        category: 'Intellectual Property'
      },
      { 
        id: 'patent', 
        name: 'Patent Registration', 
        price: 'Custom Quote (₦500,000+)', 
        deliverable: 'Patent Filing Acknowledgment.', 
        description: 'Patent Filing Acknowledgment.',
        duration: '12-18 Months',
        officialFees: true,
        category: 'Intellectual Property'
      },
      { 
        id: 'copyright', 
        name: 'Copyright Protection', 
        price: '₦80,000 – ₦150,000', 
        deliverable: 'Copyright Registration Certificate.', 
        description: 'Copyright Registration Certificate.',
        duration: '3-6 Months',
        officialFees: false,
        category: 'Intellectual Property'
      },
      { 
        id: 'court-affidavit', 
        name: 'COURT AFFIDAVIT ALSO AVAILABLE', 
        price: '₦5,000 – ₦15,000', 
        deliverable: 'Notarized/Sworn Affidavit Document.', 
        description: 'Notarized/Sworn Affidavit Document.',
        duration: '1-2 Days',
        officialFees: false,
        category: 'Intellectual Property'
      },
      { 
        id: 'ctc-affidavit', 
        name: 'AFFIDAVIT FOR CERTIFIED TRUE COPY (CTC)', 
        price: '₦10,000 – ₦20,000', 
        deliverable: 'Certified True Copy of the original document.', 
        description: 'Certified True Copy of the original document.',
        duration: '2-3 Days',
        officialFees: false,
        category: 'Intellectual Property'
      },
      { 
        id: 'trustees-declaration', 
        name: 'TRUSTEES DECLARATION (NGO REGISTRATION)', 
        price: '₦30,000 – ₦60,000', 
        deliverable: 'Official declaration forms signed and notarized.', 
        description: 'Official declaration forms signed and notarized.',
        duration: '7-14 Days',
        officialFees: false,
        category: 'Intellectual Property'
      },
      { 
        id: 'newspaper-publication', 
        name: 'NEWSPAPER PUBLICATION FOR CHANGE OF NAME', 
        price: '₦15,000 – ₦30,000', 
        deliverable: 'Copies of 2 published Newspaper Notices.', 
        description: 'Copies of 2 published Newspaper Notices.',
        duration: '7-14 Days',
        officialFees: true,
        category: 'Intellectual Property'
      }
    ],
    personal: [
      { 
        id: 'birth-certificate', 
        name: 'BIRTH CERTIFICATE, STATE OF ORIGIN', 
        price: '₦20,000 – ₦50,000', 
        deliverable: 'Certified Copy of Birth Certificate/Attestation, or State of Origin Certificate.', 
        description: 'Certified Copy of Birth Certificate/Attestation, or State of Origin Certificate.',
        duration: '14-21 Days',
        officialFees: true,
        category: 'Personal & Educational'
      },
      { 
        id: 'waec-certificate', 
        name: 'ORIGINAL WAEC CERTIFICATE', 
        price: '₦15,000 – ₦30,000', 
        deliverable: 'Original or Certified True Copy of WAEC Certificate.', 
        description: 'Original or Certified True Copy of WAEC Certificate.',
        duration: '21-30 Days',
        officialFees: true,
        category: 'Personal & Educational'
      },
      { 
        id: 'international-passport', 
        name: 'INTERNATIONAL PASSPORT', 
        price: '₦40,000 – ₦90,000', 
        deliverable: 'Passport Application Assistance/Renewal/Change of Data.', 
        description: 'Passport Application Assistance/Renewal/Change of Data.',
        duration: '21-30 Days',
        officialFees: false,
        category: 'Personal & Educational'
      }
    ],
    training: [
      { 
        id: 'entrepreneurial-workshops', 
        name: 'Entrepreneurial Workshops', 
        price: '₦5,000 – ₦25,000', 
        deliverable: 'Course Access', 
        description: 'Course Access.',
        duration: '1-3 Days',
        officialFees: false,
        category: 'Training & Mentorship'
      },
      { 
        id: 'digital-marketing', 
        name: 'Digital Marketing Training (SEO & Social)', 
        price: '₦15,000 – ₦75,000', 
        deliverable: 'Course Access, Mentorship Access (if applicable).', 
        description: 'Course Access, Mentorship Access (if applicable).',
        duration: '1-4 Weeks',
        officialFees: false,
        category: 'Training & Mentorship'
      },
      { 
        id: 'business-mentorship', 
        name: 'Business Mentorship Programs', 
        price: '₦50,000 – ₦150,000+', 
        deliverable: 'Scheduled Mentorship Sessions, Action Plan.', 
        description: 'Scheduled Mentorship Sessions, Action Plan.',
        duration: '1-6 Months',
        officialFees: false,
        category: 'Training & Mentorship'
      },
      { 
        id: 'leadership-courses', 
        name: 'Career Advancement/Leadership Courses', 
        price: '₦10,000 – ₦40,000', 
        deliverable: 'Course Access.', 
        description: 'Course Access.',
        duration: '1-2 Weeks',
        officialFees: false,
        category: 'Training & Mentorship'
      }
    ],
    professional: [
      { 
        id: 'business-plan', 
        name: 'Business Plan/Strategy Drafting', 
        price: '₦80,000 – ₦150,000', 
        deliverable: 'Comprehensive, professionally written Business Plan or Strategic Road-map Document.', 
        description: 'Comprehensive, professionally written Business Plan or Strategic Road-map Document.',
        duration: '14-21 Days',
        officialFees: false,
        category: 'Professional Documentation'
      },
      { 
        id: 'corporate-letter', 
        name: 'Corporate/Formal Letter Drafting', 
        price: '₦15,000 – ₦35,000', 
        deliverable: 'Professionally written, formatted, and error-free formal letter (e.g., Letter of Intent, Proposal).', 
        description: 'Professionally written, formatted, and error-free formal letter (e.g., Letter of Intent, Proposal).',
        duration: '3-7 Days',
        officialFees: false,
        category: 'Professional Documentation'
      },
      { 
        id: 'consent-form', 
        name: 'Consent Form & Data Handling Assistance', 
        price: '₦25,000 – ₦60,000', 
        deliverable: 'Guidance, drafting assistance, and clarification on complex forms.', 
        description: 'Guidance, drafting assistance, and clarification on complex forms.',
        duration: '3-7 Days',
        officialFees: false,
        category: 'Professional Documentation'
      },
      { 
        id: 'general-documentation', 
        name: 'General Professional Documentation', 
        price: '₦40,000 – ₦150,000', 
        deliverable: 'Custom policy, manual, or internal procedural document.', 
        description: 'Custom policy, manual, or internal procedural document.',
        duration: '7-14 Days',
        officialFees: false,
        category: 'Professional Documentation'
      }
    ]
  };

  // Tabs for all service categories
  const tabs = [
    { id: 'identity', label: 'Identity & Personal Verification' },
    { id: 'corporate', label: 'Entity Formation (CAC)' },
    { id: 'corporateGovernance', label: 'Corporate Governance' },
    { id: 'tax', label: 'Tax & Regulatory' },
    { id: 'ip', label: 'Intellectual Property' },
    { id: 'personal', label: 'Personal & Educational' },
    { id: 'training', label: 'Training & Mentorship' },
    { id: 'professional', label: 'Professional Documentation' }
  ];

  // Function to initialize Paystack payment
  const initializePayment = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // Handle Paystack payment
  const handlePaystackPayment = (amount) => {
    const PaystackPop = window.PaystackPop;
    const handler = PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: 'customer@example.com',
      amount: amount * 100,
      currency: 'NGN',
      ref: `${selectedService.id}_${new Date().getTime()}`,
      metadata: {
        service_name: selectedService.name,
        service_id: selectedService.id,
        custom_field: {
          service_name: selectedService.name,
          deliverable: selectedService.deliverable
        }
      },
      callback: (response) => {
        alert(`Payment successful! Reference: ${response.reference}`);
        setIsModalOpen(false);
        
        const whatsappMessage = `Hello, I just paid for: ${selectedService.name}. Reference: ${response.reference}. Service Deliverable: ${selectedService.deliverable}`;
        const whatsappUrl = `https://wa.me/2348102466786?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
      },
      onClose: () => {
        alert('Payment was cancelled.');
        setIsModalOpen(false);
      }
    });
    handler.openIframe();
  };

  // Extract price for Paystack
  const extractPrice = (priceStr) => {
    const match = priceStr.match(/₦(\d+),?(\d+)?/);
    if (match) {
      const amount = parseInt(match[1] + (match[2] || ''));
      return amount;
    }
    return 1000;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Complete compliance solutions for individuals and businesses</p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center border-b border-gray-300 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 rounded-t-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services[activeTab]?.map((service, index) => (
            <div key={service.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-shrink-0 w-full sm:w-1/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Category:</strong> {service.category}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Processing Time:</strong> {service.duration}
                  </div>
                  {service.officialFees && (
                    <div className="text-xs text-red-600 font-medium mb-2">
                      * + Official Government Fees
                    </div>
                  )}
                </div>
                
                <div className="flex-grow">
                  <div className="mb-3">
                    <p className="text-gray-600 mb-2">{service.description}</p>
                    <div className="bg-blue-50 rounded-lg p-3 mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-gray-700">Price:</span>
                        <span className="text-lg font-bold text-blue-600">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      <strong>Deliverable:</strong> {service.deliverable}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => initializePayment(service)}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
                    >
                      Pay Now
                    </button>
                    <a
                      href="https://wa.me/2348102466786"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Confirm Payment</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{selectedService?.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{selectedService?.description}</p>
                
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-gray-700">Price:</span>
                    <span className="text-lg font-bold text-blue-600">{selectedService?.price}</span>
                  </div>
                  {selectedService?.officialFees && (
                    <div className="text-xs text-red-600 font-medium">
                      * + Official Government Fees
                    </div>
                  )}
                  <div className="text-xs text-gray-600 mt-1">
                    Processing Time: {selectedService?.duration}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Deliverable:</strong> {selectedService?.deliverable}
                </p>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => handlePaystackPayment(extractPrice(selectedService?.price))}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Pay with Paystack
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}