import React from 'react'
import { TabButtonProp } from '../types/Types'


export const TabButton: React.FC<{tabButtonProp: TabButtonProp}> = ({tabButtonProp}) => {
    const buttonClasses = tabButtonProp.active ? 'text-white border-b border-cyan-200' : 'text-[#ADB7BE]'
    return (
        <button onClick={() => tabButtonProp.selectTab(tabButtonProp.children)}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>            
                {tabButtonProp.children}
            </p>
        </button>
    )
}