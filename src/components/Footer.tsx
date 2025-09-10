import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'mailto:hello@example.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-small text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}