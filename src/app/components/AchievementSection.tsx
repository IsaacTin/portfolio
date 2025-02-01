"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), { ssr: false });

const achievementList = [
    {
        metric: "Projects",
        value: "10",
        postfix: "+"
    },
    {
        metric: "Users",
        value: "100",
        prefix: "~"
    },
    {
        metric: "Years",
        value: "2",
        postfix: "+"
    },
    {
        metric: "Certificates",
        value: "5",
        prefix: "~"
    }
]

export const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row flex-wrap items-center justify-between ">
            {achievementList.map((achievement, index) => {
                return (
                    <div 
                        key={index} 
                        className="flex flex-col items-center justify-center mx-8 max-[320px]:mx-1  max-[424px]:mx-2 my-1 "
                    >
                        <h2 className="text-white text-4xl fond-bold flex flex-row">
                            {achievement.prefix}
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale="en-US"
                                className="text-white text-4xl font-bold"
                                transitions={(index) => ({
                                    type: "spring",
                                    duration: index + 0.3,
                                  })}
                            />
                            {achievement.postfix}
                        </h2>
                        <p className="text-[#ADB7BE] text-base">
                            {achievement.metric}
                        </p>
                    </div>
                );
            })}
        </div>
    </div>
  )
}
