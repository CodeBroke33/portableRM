"use client";

import {
    FaHtml5,
    FaCss3, 
    // FaReact, 
    FaFigma, 
    FaNodeJs,
    FaJs,
    FaNode,
    FaVuejs,
    FaPython,
    FaWordpress,
    FaLinux,
    FaGit,
    FaBootstrap,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about data
const about = {
    title: "About Me",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo sed sit aspernatur rem neque totam quidem atque eaque.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Razien Mackenzie",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+27 68 373 5646)",
        },
        {
            fieldName: "Experience",
            fieldValue: "6 Months",
        },
        {
            fieldName: "Nationality",
            fieldValue: "South African",
        },
        {
            fieldName: "Email",
            fieldValue: "razienmackenzie@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        }, 
        {
            fieldName: "Languages",
            fieldValue: "English, Afrikaans, Xhosa (Kancinci)",
        },
    ]
};

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dicta at quidem voluptas repudiandae temporibus quae.",
    items: [
        {
            company: "SoftLife Technologies",
            position: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            company: "LCStudios",
            position: "Technical Intern",
            duration: "2024 - Present",
        },
        {
            company: "Woolworths Distribution Center",
            position: "OPS Administration",
            duration: "2024 - Present",
        },
    ],
};

// educational data
const educational = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dicta at quidem voluptas repudiandae temporibus quae.",
    items: [
        {
            institution: "Life Choices Coding Academy",
            certification: "Full Stack Web Development Bootcamp",
            duration: "2023 - Present",
        },
        {
            institution: "LC Studio",
            certification: "Figma Badge",
            duration: "2023 - Present",
        },
        {
            institution: "LC Studio",
            certification: "SCRUM Badge",
            duration: "2023 - Present",
        },
        {
            institution: "LC Studio",
            certification: "API Intergration Badge",
            duration: "2023 - Present",
        },
        {
            institution: "LC Studio",
            certification: "Python",
            duration: "2023 - Present",
        },
        {
            institution: "Life Choices Coding Academy",
            certification: "Full Stack Web Development Bootcamp",
            duration: "2023 - Present",
        },
    ],
};

// skills
const skills = {
    title: "My kills",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dicta at quidem voluptas repudiandae temporibus quae.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5',

        },
        {
            icon: <FaCss3 />,
            name: 'Css 3',
            
        },
        {
            icon: <FaJs />,
            name: 'javascript',
            
        },
        {
            icon: <FaNodeJs />,
            name: 'node.js',
            
        },
        {
            icon: <FaVuejs />,
            name: 'Vu',
            
        },
        {
            icon: <FaPython />,
            name: 'python',
            
        },
        {
            icon: <Famysql />,
            name: 'mysql',
            
        },
        {
            icon: <FaWordpress />,
            name: 'wordpress',
            
        },
        {
            icon: <FaLinux />,
            name: 'wordpress',
            
        },
        {
            icon: <FaGit />,
            name: 'git',
            
        },
        {
            icon: <FaFigma />,
            name: 'Figma',
            
        },
        {
            icon: <FaBootstrap />,
            name: 'bootstrap',
            
        },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/react-tooltip';

     import { ScrollArea } from "@components/ui/scroll-area";
     import { motion } from "framer-motion";

const Resume  = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: delay}}>resume page</motion.div>
    )
}

export default Resume;
