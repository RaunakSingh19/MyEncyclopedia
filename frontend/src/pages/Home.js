import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
// import Courses from '../components/Courses';
import BlogPreview from '../components/BlogPreview';
// import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';
// import BackToTop from '../components/BackToTop';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <AboutSection />
        {/* <Courses /> */}
        <BlogPreview />
        {/* <AppDownload /> */}
      </main>
      <Footer />
      {/* <BackToTop /> */}
    </>
  );
};

export default Home;