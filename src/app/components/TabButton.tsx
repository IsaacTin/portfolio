import React from 'react'
import { TabButtonProp } from '../types/Types'
import { motion } from 'framer-motion' 

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" }
}

export const TabButton: React.FC<{tabButtonProp: TabButtonProp}> = ({tabButtonProp}) => {
    const buttonClasses = tabButtonProp.active ? 'text-white' : 'text-[#ADB7BE]'
    return (
        <button onClick={() => tabButtonProp.selectTab(tabButtonProp.children)}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>            
                {tabButtonProp.children}
            </p>
            <motion.div
                animate={tabButtonProp.active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-primary-500 mt-2 mr-3"
            >
            </motion.div>
        </button>
    )
}