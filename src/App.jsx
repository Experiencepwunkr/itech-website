import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./pages/Home";
import Services from "./pages/Services";
import Knowledge from "./pages/Knowledge";
import Contact from "./pages/Contact";
import AgentLogin from "./pages/AgentLogin";
import AgentRegister from "./pages/AgentRegister";
import LandingPage from "./pages/LandingPage";

// Navigation Component
function Navigation() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/knowledge", label: "Knowledge Base" },
    { path: "/contact", label: "Contact" },
    { path: "/agent-login", label: "Agent Login" },
  ];

  return (
    <ul className="flex flex-wrap justify-center gap-4" role="menubar">
      {navItems.map((item) => (
        <li key={item.path} role="none">
          <Link
            to={item.path}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              isActive(item.path)
                ? "bg-blue-600 text-white shadow-lg"
                : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
            }`}
            role="menuitem"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Logo Component
function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <img 
        src="https://i.ibb.co/pvCRYYCd/ITECH-ENTERPRISES-Logo-Design.png" 
        alt="ITECH ENTERPRISES Logo"
        className="w-12 h-12 rounded-full border-2 border-blue-600"
        onError={(e) => {
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%233B82F6'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='white' font-size='12'%3EITECH%3C/text%3E%3C/svg%3E";
        }}
      />
      <div>
        <h1 className="text-xl font-bold text-gray-800">ITECH ENTERPRISES</h1>
        <p className="text-xs text-gray-600">BN7718782</p>
      </div>
    </div>
  );
}

// Not Found Component
function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg bg-white rounded-xl p-12 shadow-lg">
        <div className="text-8xl mb-6 text-gray-400">🔍</div>
        <h2 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-lg">
          The page you're looking for doesn't exist or has been temporarily moved.
        </p>
        <Link 
          to="/" 
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
          <nav 
            className="container mx-auto px-6 py-4"
            role="navigation" 
            aria-label="Main navigation"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex justify-center lg:justify-start">
                <Logo />
              </div>
              
              <div className="flex justify-center">
                <Navigation />
              </div>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/agent-login" element={<AgentLogin />} />
            <Route path="/agent-register" element={<AgentRegister />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <Logo />
              <p className="text-gray-600 mt-4">
                © {new Date().getFullYear()} ITECH ENTERPRISES (BN7718782). All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}