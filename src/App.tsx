import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollManager from './components/ScrollManager';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  return (
    <div className="font-sans text-white min-h-screen bg-pureblack flex flex-col">
      <LoadingScreen onComplete={() => setIsAppReady(true)} />
      
      {isAppReady && (
        <>
          <ScrollManager />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
          <FloatingContact />
        </>
      )}
    </div>
  );
}
