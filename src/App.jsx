import React from 'react';
import Hero from './components/Hero';
import GlassToolbar from './components/GlassToolbar';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Hero />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 -mt-16 mb-16 relative z-10">
        <GlassToolbar />
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 pb-20">
        <FeatureGrid />
      </div>
      <Footer />
    </div>
  );
}
