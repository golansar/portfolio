'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun, Linkedin, Mail, FileText, Home } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  theme?: 'light' | 'dark';
  onThemeToggle?: () => void;
}

export function Header({ theme = 'light', onThemeToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#', icon: Home, label: 'Home' },
    { href: '#cv', icon: FileText, label: 'CV' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn', external: true },
    { href: 'mailto:hello@example.com', icon: Mail, label: 'Contact', external: true },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/80 backdrop-blur-md border-b border-border py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-xl">
        <nav className="flex items-center justify-center">
          {/* Center aligned icons */}
          <div className="flex items-center space-x-4">
            {/* Navigation Icons */}
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label={item.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onThemeToggle}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Toggle theme"
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? (
                  <Moon size={18} />
                ) : (
                  <Sun size={18} />
                )}
              </motion.div>
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}