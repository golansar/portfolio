import React from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { PageHeader } from '../PageHeader';
import { Section } from '../Section';

export function CVPage() {
  const skills = [
    {
      category: 'Design',
      items: ['User Experience Design', 'User Interface Design', 'Service Design', 'Design Systems', 'Prototyping', 'User Research']
    },
    {
      category: 'Strategy',
      items: ['Product Strategy', 'Design Strategy', 'Workshop Facilitation', 'Stakeholder Management']
    },
    {
      category: 'Tools',
      items: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'InVision', 'Miro', 'Whimsical']
    }
  ];

  const experiences = [
    {
      company: 'Digital Design Agency',
      role: 'Senior UI/UX Designer',
      period: '2022 - Present',
      location: 'Singapore',
      bullets: [
        'Led design for 3 major fintech products serving 100K+ users across Southeast Asia',
        'Established design system used across 5 product teams, reducing design debt by 40%',
        'Mentored 2 junior designers and conducted design reviews for cross-functional teams'
      ]
    },
    {
      company: 'Tech Startup',
      role: 'Product Designer',
      period: '2020 - 2022',
      location: 'Singapore',
      bullets: [
        'Designed end-to-end experiences for B2B SaaS platform from concept to launch',
        'Conducted user research with 50+ enterprise clients to validate product direction',
        'Collaborated with engineering team to ensure design feasibility and implementation'
      ]
    },
    {
      company: 'Digital Agency',
      role: 'UI/UX Designer',
      period: '2018 - 2020',
      location: 'Malaysia',
      bullets: [
        'Created digital experiences for clients in banking, e-commerce, and healthcare',
        'Delivered 15+ projects from wireframes to high-fidelity prototypes',
        'Worked directly with clients to understand business requirements and user needs'
      ]
    }
  ];

  const education = [
    {
      institution: 'University of Design',
      degree: 'Bachelor of Design (Visual Communication)',
      period: '2014 - 2018',
      location: 'Malaysia'
    }
  ];

  const tools = [
    'Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'InVision', 'Miro', 
    'Whimsical', 'Notion', 'Slack', 'Jira', 'Confluence'
  ];

  return (
    <>
      <PageHeader
        title="My CV"
        subtitle="Senior UI/UX & Service Designer with 6+ years of experience creating meaningful digital experiences."
      />

      {/* Download CV Button */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button size="lg" className="group">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <Section title="Skills" id="skills">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-h3 font-medium mb-4">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="text-body text-muted-foreground">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience" id="experience" className="bg-card">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              className="border-l-2 border-border pl-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-h3 font-medium">{exp.company}</h3>
                  <div className="text-body font-medium text-primary">{exp.role}</div>
                </div>
                <div className="text-small text-muted-foreground mt-1 sm:mt-0 sm:text-right">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-body text-muted-foreground">
                    • {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section title="Tools & Technologies" id="tools">
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {tools.map((tool) => (
            <Badge
              key={tool}
              variant="secondary"
              className="text-small px-4 py-2 rounded-full bg-muted"
            >
              {tool}
            </Badge>
          ))}
        </motion.div>
      </Section>

      {/* Education */}
      <Section title="Education" id="education" className="bg-card">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${edu.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-h3 font-medium">{edu.institution}</h3>
                  <div className="text-body text-muted-foreground">{edu.degree}</div>
                </div>
                <div className="text-small text-muted-foreground mt-1 sm:mt-0 sm:text-right">
                  <div>{edu.period}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}