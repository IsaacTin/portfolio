"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import projectDetails from '../../../public/data/ProjectDetails.json'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

const ProjectsSection = () => {
    const[tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1}
    }

    const handleTagChange = (newTag : string) => {
        setTag(newTag)
    }

    const filteredProjects = projectDetails.filter((project) => {
        return project.tags.includes(tag)
    })

    return (
        <section>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
            </div>
            <ul ref={ref} className='grid gap-8 md:grid-cols-3  md:gap-12'>
                {filteredProjects.map((project, index) =>
                <motion.li 
                    key={index} 
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index - (index * 0.7) }}
                >
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        imgUrl={project.image} 
                        description={project.description} 
                        gitUrl={project.gitUrl} 
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
                )}
            </ul>
        </section>
    )
}

export default ProjectsSection