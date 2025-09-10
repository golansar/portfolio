import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  client?: string;
  role?: string;
  tags?: string[];
  eyebrow?: string;
}

export function PageHeader({ 
  title, 
  subtitle, 
  client, 
  role, 
  tags,
  eyebrow 
}: PageHeaderProps) {
  return (
    <motion.header 
      className="py-16 lg:py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          {eyebrow && (
            <motion.div 
              className="text-small text-primary font-medium mb-4 uppercase tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {eyebrow}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1 
            className="text-h1 lg:text-display font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p 
              className="text-h3 text-muted-foreground mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Meta row */}
          {(client || role || tags) && (
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Client and Role */}
              {(client || role) && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {client && (
                    <div>
                      <span className="text-small text-muted-foreground uppercase tracking-wide block mb-1">
                        Client
                      </span>
                      <span className="text-body font-medium">
                        {client}
                      </span>
                    </div>
                  )}
                  
                  {role && (
                    <div>
                      <span className="text-small text-muted-foreground uppercase tracking-wide block mb-1">
                        Role
                      </span>
                      <span className="text-body font-medium">
                        {role}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-caption px-3 py-1 rounded-full bg-muted"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}