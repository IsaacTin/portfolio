"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { TabButton } from './TabButton';
import { TabButtonProp, TabData } from '../types/Types';
import { motion, AnimatePresence } from 'framer-motion';

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Springboot</li>
        <li>Angular</li>
        <li>TypeScript</li>
        <li>MySQL</li>
        <li>Ansible</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>National University of Singapore</li>
        <li>Second Upper Honours Degree in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Docker for the Absolute Beginner - Hands-on - DevOps</li>
        <li>Kubernetes for the Absolute Beginner - Hands-on</li>
        <li>Angular - The Complete Guide(2023 Edition)</li>
        <li>Complete SQL Bootcamp</li>
      </ul>
    ),
  },
];

const aboutMeDescription = "Adventurous, curious and imaginative in nature, I often venture out to seek and explore new things in both my professional work and personal life. Reading, writing, learning and applying new technologies are examples of hobbies I have which fuel my curiosity and satisfy my adventurous spirit. I also have a deep appreciation for teamwork and collaboration- instilled through hobbies such as team sports - allowing me to be not only a strong individual contributor, but also an approachable and capable team player."

const contentVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 } // Ensure it shrinks back while exiting
};

export const AboutSection = () => {
  const [tab, setTab] = useState("Skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image alt="" src="/images/aboutSectionImage.png" width={2000} height={2000} />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4 mt-4'>About me</h2>
          <p className='text-base sm:text-lg'>{aboutMeDescription}</p>
          <div className='flex flex-row mt-8'>
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                tabButtonProp={{
                  active: tab === tabData.id,
                  selectTab: handleTabChange,
                  children: tabData.title
                }}
              />
            ))}
          </div>
          <div className="relative mt-8" style={{ height: '200px' }}> {/* Adjust height as needed */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                className="absolute inset-0"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
                transition={{ duration: 0.5 }}
              >
                {TAB_DATA.find((t) => t.id === tab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
