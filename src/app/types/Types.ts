import React from "react";

export interface NavLinkProp {
    href: string;
    title: string;
}

export interface TabButtonProp {
    active : boolean;
    children: string;
    selectTab: any;
}


export interface TabData {
    title: string,
    id: string,
    content: React.JSX.Element;
}

export interface ProjectCardDetails {
    imgUrl: string,
    gitUrl: string,
    previewUrl: string,
    title: string,
    description: string
}

export interface ProjectTagDetails {
    isSelected: boolean,
    name: string,
    onClick: (arg: string) => void
}