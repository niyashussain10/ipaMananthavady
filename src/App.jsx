import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Pages
import Home from './pages/home/Home';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import PlacementPage from './pages/PlacementPage';
import GalleryPage from './pages/GalleryPage';
import StudentHub from './pages/StudentHub';

// Centralized SEO Configuration for all routes
const seoData = {
  '/': {
    title: 'IPA Mananthavady | Academy of Accountants | Professional Accounting & ERP Courses',
    description: 'Join IPA Mananthavady, Kerala\'s premier accounting academy inside DXD Fitness building. Expert hands-on courses in Tally Prime, SAP Business One, SAP S/4HANA, Zoho Books, QuickBooks, GST concepts, and Gulf VAT compliance with 100% placement support.'
  },
  '/courses': {
    title: 'Professional Accounting Courses | IPA Mananthavady | Tally & SAP ERP',
    description: 'Explore certified accounting programs (ACPA, CPIFA, PGDIFA, PGDCAM) at IPA Mananthavady. Direct on-the-job training in Tally Prime, SAP, QuickBooks, and Excel.'
  },
  '/about': {
    title: 'About Us | IPA Mananthavady | Wayanad\'s Leading Accounting Academy',
    description: 'Learn how IPA Mananthavady prepares accounting students for high-demand corporate jobs. Active project-based curricula, certified industry senior accountants, and expert counseling.'
  },
  '/gallery': {
    title: 'Campus & Events Gallery | IPA Mananthavady',
    description: 'Browse photos of certificate ceremonies, training workshops, batch events, and the digital classrooms at the IPA Mananthavady, Wayanad campus.'
  },
  '/student-hub': {
    title: 'Student Learning Hub | IPA Mananthavady Resource Portal',
    description: 'Access digital tools, syllabus guides, reference materials, cloud billing simulators, and practice resources for Tally and SAP at IPA Mananthavady.'
  },
  '/team': {
    title: 'Expert Faculty & Advisory Board | IPA Mananthavady',
    description: 'Meet the certified accountants, senior finance instructors, and management advisors guiding career growth for students at IPA Mananthavady.'
  },
  '/contact': {
    title: 'Contact Us | Visit IPA Mananthavady Academy',
    description: 'Find us in the DXD Fitness Building, Mananthavady. Reach out via call, email, or WhatsApp for custom admissions, batch timings, and career counseling.'
  },
  '/placement': {
    title: '100% Placement Records & Corporate Alumni | IPA Mananthavady',
    description: 'Explore the successful career placements of our certified accounting students in leading multinational firms, corporate accounting cells, and private offices.'
  }
};

// Scroll to top & dynamic SEO update on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Centralized Dynamic SEO Updater
    const seo = seoData[pathname] || seoData['/'];
    document.title = seo.title;
    
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', seo.description);
    
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) ogTitleMeta.setAttribute('content', seo.title);
    
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) ogDescMeta.setAttribute('content', seo.description);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/student-hub" element={<StudentHub />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/placement" element={<PlacementPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
