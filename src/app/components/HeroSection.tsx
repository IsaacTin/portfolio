"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <motion.section                 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="lg:py-16"
    >     
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
                        Hello, I&apos;m {" "}
                    </span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                            'Isaac',
                            1000,
                            'Web developer',
                            1000,
                            'Mobile Developer',
                            1000,
                            'UI/UX Designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Description for me
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 
                    bg-gradient-to-br from-emerald-200 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>
                        Hire me
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800
                    text-white border mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                            Download CV
                        </span>
                    </button>
                </div>
            </div>
            <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image 
                        src="/images/portfolioImage.png"
                        alt="portfolio image"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </motion.section>
  )
}
