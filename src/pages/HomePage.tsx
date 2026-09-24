import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Hero } from '../sections/home/Hero';
import { CommunityZoneSection } from '../sections/home/CommunityZoneSection';
import { Introduction } from '../sections/home/Introduction';
import { ServicesSection } from '../sections/home/ServicesSection';
import { WhyChooseUs } from '../sections/home/WhyChooseUs';
import { HowWeWork } from '../sections/home/HowWeWork';
import { EnvironmentsGallery } from '../sections/home/EnvironmentsGallery';
import { FeaturedStatement } from '../sections/home/FeaturedStatement';
import { FinalCta } from '../sections/home/FinalCta';

interface ContextType {
  openAssessmentModal: () => void;
}

export const HomePage: React.FC = () => {
  const { openAssessmentModal } = useOutletContext<ContextType>();

  return (
    <>
      <SEO
        title="Sri Thrayi Facility | Facility Management Services in Hyderabad"
        description="Sri Thrayi Facility provides security, electrical, fire safety, plumbing, WTP & STP, housekeeping, landscaping, pesticide, and clubhouse management services in Hyderabad."
        canonicalPath="/"
      />

      <Hero onRequestAssessment={openAssessmentModal} />
      <CommunityZoneSection onRequestAssessment={openAssessmentModal} />
      <Introduction />
      <ServicesSection />
      <WhyChooseUs />
      <HowWeWork />
      <EnvironmentsGallery />
      <FeaturedStatement />
      <FinalCta onRequestAssessment={openAssessmentModal} />
    </>
  );
};
