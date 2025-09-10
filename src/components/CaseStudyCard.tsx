import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyCardProps {
  title: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  href: string;
  client?: string;
}

export function CaseStudyCard({ 
  title, 
  excerpt, 
  coverImage, 
  tags, 
  href,
  client 
}: CaseStudyCardProps) {
  return (
    <motion.a
      href={href}
      className="group block bg-card rounded-lg border border-border overflow-hidden"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        boxShadow: "var(--shadow-card)"
      }}
      whileHoverStyle={{
        boxShadow: "var(--shadow-card-hover)"
      }}
    >
      {/* Cover Image */}
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={coverImage}
            alt={`${title} preview`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Client */}
        {client && (
          <div className="text-small text-muted-foreground mb-2 uppercase tracking-wide">
            {client}
          </div>
        )}

        {/* Title */}
        <h3 className="text-h3 font-medium mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-body text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-caption px-3 py-1 rounded-full bg-muted hover:bg-muted-foreground/10 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.a>
  );
}