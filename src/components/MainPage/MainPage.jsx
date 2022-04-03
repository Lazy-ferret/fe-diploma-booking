import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import ReviewsSection from '../ReviewsSection/ReviewsSection';

export default function MainPage(props) {

  return (
    <main className="container main">
      <AboutSection />
      <FeaturesSection />
      <ReviewsSection />
    </main>
  )
};
