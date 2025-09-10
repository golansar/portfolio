import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, eyebrow, children, className = '', id }: SectionProps) {
  return (
    <motion.section 
      id={id}
      className={`py-16 lg:py-24 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
        {/* Section Header */}
        {(eyebrow || title) && (
          <motion.div 
            className="mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {eyebrow && (
              <div className="text-small text-primary font-medium mb-3 uppercase tracking-wide">
                {eyebrow}
              </div>
            )}
            
            {title && (
              <h2 className="text-h2 font-semibold max-w-3xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}

        {/* Section Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}