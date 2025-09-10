import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { PageHeader } from '../PageHeader';
import { Section } from '../Section';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  role: string;
  tags: string[];
}

interface CaseStudyPageProps {
  caseStudy: CaseStudy | null;
}

export function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  if (!caseStudy) {
    return (
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl py-24">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Case Study Not Found</h1>
          <Button asChild>
            <a href="#home">Back to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  const projectContent = {
    'converse-experience': {
      subtitle: 'Designing real-time engagement systems for live events and brand activations.',
      heroImage: 'https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MDkyODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      about: 'Converse wanted to create deeper connections with their audience during live events and brand activations. The challenge was to design a real-time engagement platform that would allow attendees to interact with the brand and each other in meaningful ways.',
      process: 'We started with extensive user research, conducting interviews with event attendees and brand activation participants. This helped us understand the pain points and opportunities in live event engagement.',
      features: [
        {
          title: 'Real-time Polls & Q&A',
          problem: 'Audience engagement during presentations was limited and one-directional.',
          solution: 'Implemented interactive polling and Q&A features that allowed real-time participation from the audience.'
        },
        {
          title: 'Social Wall Integration',
          problem: 'Social media content was scattered across platforms and hard to curate.',
          solution: 'Created a unified social wall that aggregated and displayed user-generated content in real-time.'
        }
      ]
    },
    'genesis': {
      subtitle: 'Enterprise-grade workflow optimization for human resources and project coordination.',
      heroImage: 'https://images.unsplash.com/photo-1536692192939-f1547f1cde39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMGRlc2lnbiUyMG1vYmlsZXxlbnwxfHx8fDE3NTYxMTM1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      about: 'Genesis needed to streamline their HR and project management processes across multiple departments. The existing system was fragmented and caused inefficiencies in workflow management.',
      process: 'We conducted stakeholder interviews across HR, project management, and IT departments to understand the current workflow challenges and identify key improvement areas.',
      features: [
        {
          title: 'Unified Dashboard',
          problem: 'Information was scattered across multiple systems and spreadsheets.',
          solution: 'Designed a comprehensive dashboard that consolidated all HR and project data in one place.'
        },
        {
          title: 'Automated Workflows',
          problem: 'Manual processes were time-consuming and prone to errors.',
          solution: 'Implemented automated approval workflows and notification systems to streamline operations.'
        }
      ]
    },
    'lifestyle-and-rewards': {
      subtitle: 'Mobile banking rewards system enhancing customer engagement and retention.',
      heroImage: 'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNmaW50ZWNoJTIwYmFua2luZyUyMGFwcHxlbnwxfHx8fDE3NTYwNTMzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      about: 'UOB TMRW aimed to increase customer engagement through a comprehensive lifestyle and rewards program integrated into their mobile banking app.',
      process: 'We analyzed existing customer behavior data and conducted user interviews to understand spending patterns and reward preferences.',
      features: [
        {
          title: 'Personalized Rewards',
          problem: 'Generic rewards programs had low engagement rates.',
          solution: 'Developed AI-driven personalization that suggested relevant rewards based on spending patterns.'
        },
        {
          title: 'Gamified Experience',
          problem: 'Banking interactions felt transactional and unengaging.',
          solution: 'Introduced gamification elements like progress tracking and achievement badges to increase engagement.'
        }
      ]
    }
  };

  const content = projectContent[caseStudy.id as keyof typeof projectContent];

  if (!content) {
    return (
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl py-24">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Content Coming Soon</h1>
          <Button asChild>
            <a href="#home">Back to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Back Navigation */}
      <section className="pt-8 pb-4">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
          <Button variant="ghost" asChild className="group">
            <a href="#home">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </a>
          </Button>
        </div>
      </section>

      <PageHeader
        title={caseStudy.title}
        subtitle={content.subtitle}
        client={caseStudy.client}
        role={caseStudy.role}
        tags={caseStudy.tags}
      />

      {/* Hero Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
          <motion.div
            className="aspect-[16/9] rounded-lg overflow-hidden bg-muted"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src={content.heroImage}
              alt={`${caseStudy.title} hero image`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* About the Project */}
      <Section title="About the project">
        <div className="max-w-3xl">
          <p className="text-h3 text-muted-foreground leading-relaxed">
            {content.about}
          </p>
        </div>
      </Section>

      {/* Process */}
      <Section title="Process" className="bg-card">
        <div className="max-w-3xl">
          <p className="text-body leading-relaxed mb-8">
            {content.process}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-semibold">1</span>
              </div>
              <h4 className="font-medium mb-2">Research</h4>
              <p className="text-small text-muted-foreground">User interviews and data analysis</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-semibold">2</span>
              </div>
              <h4 className="font-medium mb-2">Design</h4>
              <p className="text-small text-muted-foreground">Ideation and prototyping</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-semibold">3</span>
              </div>
              <h4 className="font-medium mb-2">Validate</h4>
              <p className="text-small text-muted-foreground">Testing and iteration</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section title="Key Features">
        <div className="space-y-16">
          {content.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-h3 font-medium mb-4">{feature.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-body font-medium text-red-600 mb-2">Problem</h4>
                    <p className="text-body text-muted-foreground">{feature.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-body font-medium text-green-600 mb-2">Solution</h4>
                    <p className="text-body text-muted-foreground">{feature.solution}</p>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Feature mockup placeholder</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Summary */}
      <Section title="Summary" className="bg-card">
        <div className="max-w-3xl space-y-8">
          <p className="text-h3 text-muted-foreground leading-relaxed">
            This project successfully improved user engagement and achieved key business objectives 
            through thoughtful design and strategic implementation.
          </p>
          
          <div>
            <h3 className="text-h3 font-medium mb-4">My Contributions</h3>
            <ul className="space-y-2">
              <li className="text-body text-muted-foreground">• Led user research and stakeholder interviews</li>
              <li className="text-body text-muted-foreground">• Designed end-to-end user experience and interface</li>
              <li className="text-body text-muted-foreground">• Created and maintained design system components</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Next Case Study */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button variant="outline" asChild>
              <a href="#home">View All Work</a>
            </Button>
            
            <Button asChild className="group">
              <a href="#case-studies/genesis">
                Next Case Study
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}