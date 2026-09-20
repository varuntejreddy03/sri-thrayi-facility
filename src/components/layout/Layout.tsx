import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from '../common/FloatingActions';
import { SiteAssessmentModal } from '../common/SiteAssessmentModal';

export const Layout: React.FC = () => {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-ivory selection:bg-gold selection:text-obsidian">
      {/* Sticky Header */}
      <Navbar onRequestAssessment={() => setIsAssessmentModalOpen(true)} />

      {/* Main Page Body */}
      <main className="flex-grow">
        <Outlet context={{ openAssessmentModal: () => setIsAssessmentModalOpen(true) }} />
      </main>

      {/* Multi-Column Footer */}
      <Footer onRequestAssessment={() => setIsAssessmentModalOpen(true)} />

      {/* Quick Floating Actions (WhatsApp & Back to Top) */}
      <FloatingActions />

      {/* Universal Site Assessment Request Modal */}
      <SiteAssessmentModal
        isOpen={isAssessmentModalOpen}
        onClose={() => setIsAssessmentModalOpen(false)}
      />
    </div>
  );
};
