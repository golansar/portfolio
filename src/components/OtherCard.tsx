import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OtherCardProps {
  title: string;
  image: string;
  href: string;
}

export function OtherCard({ title, image, href }: OtherCardProps) {
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
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-muted">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={image}
            alt={`${title} preview`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h4 className="text-body font-medium group-hover:text-primary transition-colors">
          {title}
        </h4>
      </div>
    </motion.a>
  );
}