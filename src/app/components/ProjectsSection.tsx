"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projectDetails from '../../../public/data/ProjectDetails.json'
import ProjectTag from './ProjectTag'

const ProjectsSection = () => {
    const[tag, setTag] = useState("All")

    const handleTagChange = (newTag : string) => {
        setTag(newTag)
    }

    const filteredProjects = projectDetails.filter((project) => {
        return project.tags.includes(tag)
    })

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />


            </div>
            <div className='grid gap-8 md:grid-cols-3  md:gap-12'>
                {filteredProjects.map((project) =>
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        imgUrl={project.image} 
                        description={project.description} 
                        gitUrl={project.gitUrl} 
                        previewUrl={project.previewUrl}
                    />
                )}
            </div>
        </>
    )
}

export default ProjectsSection