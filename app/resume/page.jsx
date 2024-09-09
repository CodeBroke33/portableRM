"use client";

import {
  FaHtml5,
  FaCss3,
  // FaReact,
  FaFigma,
  FaNodeJs,
  FaJs,
  FaVuejs,
  FaPython,
  FaWordpress,
  FaLinux,
  FaGit,
  FaBootstrap,
  FaDatabase, // Use FaDatabase for MySQL or another icon
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "Over the past five years, I’ve moved from shop floor roles to administration, enhancing my technical skills and passion for technology. I completed a Full Stack Development course, earned multiple technological accolades, and managed a full-time night shift job. This blend of practical and technical experience has refined my abilities, and I’m eager to apply my proactive approach to new challenges.",
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
        fieldName: "Email",
        fieldValue: "razienmackenzie@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "South African",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Afrikaans, Xhosa (Kancinci)",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Over the past five years, I've grown from working on the shop floor to taking on administrative roles, all while sharpening my computer skills. This journey has fueled my passion for technology, leading to my current position as a technical intern where I’ve been expanding my expertise and applying my skills hands on.",
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
      duration: "2019 - Present",
    },
  ],
};

// educational data
const educational = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Over the past year, from 2023 to the present, I have successfully accomplished these projects and milestones. This period has been marked by continuous learning, hands-on experience, and a strong commitment to expanding my skills and knowledge. Each achievement reflects my dedication to professional growth and my ability to deliver quality results in a dynamic, fast paced environment.",
  items: [
    {
      institution: "Life Choices Coding Academy",
      certification: "Full Stack Web Development Bootcamp",
      duration: "2023 - 2024",
    },
    {
      institution: "LC Studio",
      certification: "Figma Badge",
      duration: "2024",
    },
    {
      institution: "LC Studio",
      certification: "SCRUM Badge",
      duration: "2024",
    },
    {
      institution: "LC Studio",
      certification: "API Intergration Badge",
      duration: "2024",
    },
    {
      institution: "Cisco Networking Academy",
      certification: "Python Essentails 1",
      duration: "2024",
    },
    {
      institution: " Cisco Networking Academy",
      certification: "NDG Linux Unhatched",
      duration: "2024",
    },
  ],
};

// skills
const skills = {
  title: "My skills",
  description:
    "Over the past year, I’ve built a diverse and valuable skill set through hands-on projects and real-world experience. Every challenge I’ve tackled has sharpened my abilities and deepened my understanding, allowing me to consistently deliver high-quality work. My approach is rooted in adaptability, curiosity, and a strong focus on results, ensuring I stay ahead in fast-paced environments while continuously expanding my expertise.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaDatabase />, // Using FaDatabase for MySQL
      name: "MySQL",
    },
    {
      icon: <FaWordpress />,
      name: "Wordpress",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  const delay = 0.5; // Define a delay value in seconds

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full ">
                {/* experience */}
                <TabsContent value="experience" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                        <ScrollArea className="h-[300px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item, index)=>{
                                    return <li key={index} className="bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                        <div className="flex items-center gap-3">
                                            {/* dot */}
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p className="text-white/60">{item.company}</p>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>

                {/* education */}
                <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{educational.title}</h3>
                        <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">{educational.description}</p>
                        <ScrollArea className="h-[300px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {educational.items.map((item, index)=>{
                                    return <li key={index} className="bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.certification}</h3>
                                        <div className="flex items-center gap-3">
                                            {/* dot */}
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p className="text-white/60">{item.institution}</p>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>

                {/* skills */}
                <TabsContent value="skills" className="w-full h-full">
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold ">{skills.title}</h3>
                            <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                        </div>
                        <ScrollArea className="h-[300px]">
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                            {skills.skillList.map((skill, index)=>{
                                return <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                            })}
                        </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>

                {/* about */}
                <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font-bold">{about.title}</h3>
                        <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0">
                            {about.info.map((item,index)=>{
                                return <li key={index} className="flex items-center justify-center xl:justify-start gap-6">
                                    <span className="text-white/60">{item.fieldName}</span>
                                    <span className="text-xl whitespace-nowrap">{item.fieldValue}</span>
                                </li>
                            })}
                        </ul>
                    </div>
                </TabsContent>
            </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
