import React from 'react';
import LandingPage from './components/LandingPage';
import BriefSection from './components/BriefSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <LandingPage />
      <BriefSection />
    </div>
  );
}
