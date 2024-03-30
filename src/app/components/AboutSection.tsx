"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { TabButton } from './TabButton'
import { TabButtonProp, TabData } from '../types/Types'

const TAB_DATA : TabData[] = [
    {
      title: "Skills",
      id: "Skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "Education",
      content: (
        <ul className="list-disc pl-2">
          <li>Fullstack Academy of Code</li>
          <li>University of California, Santa Cruz</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "Certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];




export const AboutSection = () => {
    
    const [tab, setTab] = useState("Skills")
    const handleTabChange = (id: string) => {
        setTab(id)
    }



    let skillTabButtonObject : TabButtonProp = {
        active : tab === "Skills",
        selectTab : handleTabChange,
        children: "Skills"
    };

    let educationTabButtonObject : TabButtonProp = {
        active : tab === "Education",
        selectTab : handleTabChange,
        children: "Education"
    };

    let experienceTabButtonObject : TabButtonProp = {
        active : tab === "Certifications",
        selectTab : handleTabChange,
        children: "Certifications"
    };



    return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
            <Image alt="" src="/images/aboutSectionImage.png" width={500} height={500} />
            <div>
                <h2 className='text-4xl fond-bold text-white mb-4 mt-4'>About me</h2>
                <p className='text-base d:text-lg'>About me description (my experience)</p>
                <div className='flex flex-row mt-8'>
                    <TabButton tabButtonProp={skillTabButtonObject}/>
                    <TabButton tabButtonProp={educationTabButtonObject}/>
                    <TabButton tabButtonProp={experienceTabButtonObject}/>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
            </div>
        </div>
    </section>
    )
}
