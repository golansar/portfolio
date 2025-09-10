import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { CVPage } from './components/pages/CVPage';
import { CaseStudyPage } from './components/pages/CaseStudyPage';
import { OthersPage } from './components/pages/OthersPage';

type Page = 'home' | 'cv' | 'case-study' | 'others';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  role: string;
  tags: string[];
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentCaseStudy, setCurrentCaseStudy] = useState<CaseStudy | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // URL-based routing simulation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      
      if (hash === 'cv') {
        setCurrentPage('cv');
        setCurrentCaseStudy(null);
      } else if (hash === 'others') {
        setCurrentPage('others');
        setCurrentCaseStudy(null);
      } else if (hash.startsWith('case-studies/')) {
        const caseStudyId = hash.replace('case-studies/', '');
        const caseStudy = getCaseStudyById(caseStudyId);
        if (caseStudy) {
          setCurrentCaseStudy(caseStudy);
          setCurrentPage('case-study');
        }
      } else {
        // Handle home navigation (empty hash, '#', or any other case)
        setCurrentPage('home');
        setCurrentCaseStudy(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const getCaseStudyById = (id: string): CaseStudy | null => {
    const caseStudies = [
      {
        id: 'converse-experience',
        title: 'Converse: Experience — Audience Engagement in Real-Time',
        client: 'Converse',
        role: 'Senior UI/UX Designer',
        tags: ['UX Design', 'Real-time Systems', 'Event Design']
      },
      {
        id: 'genesis',
        title: 'Genesis: Streamlining HR and Project Management',
        client: 'Genesis',
        role: 'Product Designer',
        tags: ['Enterprise UX', 'Workflow Design', 'B2B']
      },
      {
        id: 'lifestyle-and-rewards',
        title: 'Lifestyle & Rewards: UOB TMRW',
        client: 'UOB Bank',
        role: 'Senior UX Designer',
        tags: ['Fintech', 'Mobile Banking', 'Rewards System']
      },
      {
        id: 'simple-invest',
        title: 'Simple Invest: Self-Serve Capabilities to Regional Markets',
        client: 'Investment Platform',
        role: 'Lead Designer',
        tags: ['Fintech', 'Investment', 'Self-Service', 'Regional Markets']
      }
    ];

    return caseStudies.find(cs => cs.id === id) || null;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'cv':
        return <CVPage />;
      case 'case-study':
        return <CaseStudyPage caseStudy={currentCaseStudy} />;
      case 'others':
        return <OthersPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header theme={theme} onThemeToggle={toggleTheme} />
      
      <main className="pt-20">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}