import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { PageHeader } from '../PageHeader';
import { Section } from '../Section';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function OthersPage() {
  const projects = [
    {
      id: 'asap-warranty-management-app',
      title: 'ASAP – Warranty Management App',
      description: 'Mobile application for managing product warranties and service requests.',
      images: [
        'https://images.unsplash.com/photo-1536692192939-f1547f1cde39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHN1c2VyJTIwZXhwZXJpZW5jZSUyMGRlc2lnbiUyMG1vYmlsZXxlbnwxfHx8fDE3NTYxMTM1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      details: 'A comprehensive warranty management solution that allows users to register products, track warranty status, and request service appointments. The app features QR code scanning for quick product registration and push notifications for warranty expiration alerts.'
    },
    {
      id: 'logo-design',
      title: 'Logo Design',
      description: 'Collection of logo designs for various clients across different industries.',
      images: [
        'https://images.unsplash.com/photo-1670341447004-606a07fcfaa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzU2MDM1Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      details: 'Logo design projects spanning technology startups, restaurants, healthcare providers, and retail brands. Each logo was developed through extensive research into the brand\'s values, target audience, and competitive landscape.'
    },
    {
      id: 'print',
      title: 'Print Design',
      description: 'Print design work including posters, brochures, and marketing materials.',
      images: [
        'https://images.unsplash.com/photo-1580130775562-0ef92da028de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNwcmludCUyMGRlc2lnbiUyMHBvc3RlcnxlbnwxfHx8fDE3NTYxMTM1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      details: 'A collection of print design work including event posters, corporate brochures, product catalogs, and marketing collateral. Projects focused on creating strong visual hierarchies and compelling layouts that work effectively in print format.'
    }
  ];

  return (
    <>
      {/* Back Navigation */}
      <section className="pt-8 pb-4">
        <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
          <Button variant="ghost" asChild className="group">
            <a href="#home">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
          </Button>
        </div>
      </section>

      <PageHeader
        title="Other Work"
        subtitle="A collection of additional projects including mobile apps, branding, and print design work."
        eyebrow="Portfolio"
      />

      {/* Projects */}
      <Section>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-h2 font-semibold mb-4">{project.title}</h3>
                <p className="text-h3 text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {project.details}
                </p>
              </div>

              {/* Image Gallery */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="grid gap-4">
                  {project.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      className="aspect-[4/3] rounded-lg overflow-hidden bg-muted group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${project.title} - Image ${imageIndex + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Additional Skills/Capabilities */}
      <Section title="Additional Capabilities" className="bg-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary">📱</span>
            </div>
            <h4 className="text-h3 font-medium mb-2">Mobile Design</h4>
            <p className="text-body text-muted-foreground">
              Native iOS and Android app design with platform-specific considerations
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary">🎨</span>
            </div>
            <h4 className="text-h3 font-medium mb-2">Brand Identity</h4>
            <p className="text-body text-muted-foreground">
              Logo design, brand guidelines, and visual identity systems
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary">📄</span>
            </div>
            <h4 className="text-h3 font-medium mb-2">Print Design</h4>
            <p className="text-body text-muted-foreground">
              Marketing materials, posters, and corporate collateral design
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
}