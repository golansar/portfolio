import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { Section } from '../Section';
import { CaseStudyCard } from '../CaseStudyCard';
import { OtherCard } from '../OtherCard';

export function HomePage() {
  const caseStudies = [
    {
      title: 'Converse: Experience — Audience Engagement in Real-Time',
      excerpt: 'Designing real-time engagement systems for live events and brand activations.',
      coverImage: 'https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MDkyODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['UX Design', 'Real-time Systems', 'Event Design'],
      href: '#case-studies/converse-experience',
      client: 'Converse'
    },
    {
      title: 'Genesis: Streamlining HR and Project Management',
      excerpt: 'Enterprise-grade workflow optimization for human resources and project coordination.',
      coverImage: 'https://images.unsplash.com/photo-1536692192939-f1547f1cde39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMGRlc2lnbiUyMG1vYmlsZXxlbnwxfHx8fDE3NTYxMTM1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Enterprise UX', 'Workflow Design', 'B2B'],
      href: '#case-studies/genesis',
      client: 'Genesis'
    },
    {
      title: 'Lifestyle & Rewards: UOB TMRW',
      excerpt: 'Mobile banking rewards system enhancing customer engagement and retention.',
      coverImage: 'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFwcHxlbnwxfHx8fDE3NTYwNTMzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Fintech', 'Mobile Banking', 'Rewards System'],
      href: '#case-studies/lifestyle-and-rewards',
      client: 'UOB Bank'
    },
    {
      title: 'Simple Invest: Self-Serve Capabilities to Regional Markets',
      excerpt: 'Empowering investment platforms with self-service features for regional market expansion.',
      coverImage: 'https://images.unsplash.com/photo-1613442301287-4fa478efd9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwaW52ZXN0bWVudCUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTYxMTQ0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Fintech', 'Investment', 'Self-Service', 'Regional Markets'],
      href: '#case-studies/simple-invest',
      client: 'Investment Platform'
    }
  ];

  const others = [
    {
      title: 'ASAP – Warranty Management App',
      image: 'https://images.unsplash.com/photo-1536692192939-f1547f1cde39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMGRlc2lnbiUyMG1vYmlsZXxlbnwxfHx8fDE3NTYxMTM1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      href: '#others/asap-warranty-management-app'
    },
    {
      title: 'Logo design',
      image: 'https://images.unsplash.com/photo-1670341447004-606a07fcfaa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzU2MDM1Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      href: '#others/logo-design'
    },
    {
      title: 'Print',
      image: 'https://images.unsplash.com/photo-1580130775562-0ef92da028de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNwcmludCUyMGRlc2lnbiUyMHBvc3RlcnxlbnwxfHx8fDE3NTYxMTM1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      href: '#others/print'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-4xl">
            <motion.h1
              className="text-h1 lg:text-display font-semibold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Senior UI/UX & Service Designer shaping clear, practical experiences.
            </motion.h1>
            
            <motion.p
              className="text-h3 text-muted-foreground mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Senior Product Designer | UI/UX Specialist in Finance & Wealth | Figma, Design Systems, User Research | Based in Singapore
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <Section id="work" title="Case studies" eyebrow="Featured Work">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CaseStudyCard {...study} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Others Section */}
      <Section id="others" title="Others" eyebrow="Additional Work">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <OtherCard {...item} />
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}