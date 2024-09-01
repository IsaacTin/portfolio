"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import projectDetails from '../../../public/data/ProjectDetails.json';
import ProjectTag from './ProjectTag';
import { motion, useInView, AnimatePresence } from "framer-motion";

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -50, opacity: 0 } // Add exit variant
    };

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projectDetails.filter((project) => {
        return tag === "All" || project.tags.includes(tag);
    });

    return (
        <section id="projects">
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={() => handleTagChange("All")} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={() => handleTagChange("Web")} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={() => handleTagChange("Mobile")} name="Mobile" isSelected={tag === "Mobile"} />
            </div>
            <ul ref={ref} className='grid gap-8 md:grid-cols-3  md:gap-12'>
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.li 
                            key={project.id} 
                            variants={cardVariants} 
                            initial="initial" 
                            animate="animate"
                            exit="exit" // Add exit animation
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectCard 
                                title={project.title} 
                                imgUrl={project.image} 
                                description={project.description} 
                                gitUrl={project.gitUrl} 
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </section>
    );
}

export default ProjectsSection;