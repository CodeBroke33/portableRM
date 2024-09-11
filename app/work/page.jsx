"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  BsArrowUpRight,
  BsGithub,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "project 1",
    description:
      "I independently built a full-scale website using Node.js, Vue.js, Bootstrap, Express.js, HTML, CSS, JavaScript, and MySQL, gaining valuable hands-on experience in developing and managing end-to-end web solutions.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Node.js" },
      { name: "Vue.js" },
      { name: "MySQL" },
      { name: "Express.js" },
    ],
    image: "/assets/work/Capstone.png",
    live: "https://capstone-3bd1a.web.app/home",
    github: "https://github.com/CodeBroke33/E-commerce-Store",
  },
  {
    num: "02",
    category: "CMS",
    title: "project 2",
    description:
      "I developed this eCommerce site using WordPress and customized it with Elementor, enhancing both functionality and design to create a seamless user experience.",
    stack: [{ name: "WordPress" }, { name: "Elementor" }],
    image: "/assets/work/Roots_&_Fruits.png",
    live: "https://dev-gervaarlik.pantheonsite.io/",
    github:
      "https://dev-gervaarlik.pantheonsite.io/wp-login.php?redirect_to=https%3A%2F%2Fdev-gervaarlik.pantheonsite.io%2Fwp-admin%2Fadmin.php%3Fpage%3Dwpforms-overview&reauth=1",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "I developed this application using Bootstrap, HTML, CSS, and JavaScript, focusing on creating a responsive and user-friendly interface while honing my front-end development skills",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/First_Ecommerce.png",
    live: "https://codebroke33skinfinately.netlify.app/",
    github: "https://github.com/CodeBroke33/jsEOMP",
  },
  {
    num: "04",
    category: "fullstack",
    title: "project 4",
    description:
      "I co-developed an online product-selling application using Vue 3, MySQL, APIs, Bootstrap, Express.js, Node.js, HTML, CSS, JavaScript, and JSON Web Tokens. This collaborative project allowed me to build a secure and scalable platform for eCommerce.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Node.js" },
      { name: "Vue.js" },
      { name: "MySQL" },
      { name: "Express.js" },
    ],
    image: "/assets/work/Duo_EOMP.png",
    live: "https://nodejseomp-8da3d.web.app/",
    github: "https://github.com/CodeBroke33/nodejsEOMP",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 5",
    description:
      "I completed this project in under two days, converting a Visio design into a fully responsive HTML and CSS layout. I implemented slider functionality using JavaScript and jQuery, and designed the logo and icons using Figma and Canva, all without relying on frameworks or plugins.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "JQuery" },
    ],
    image: "/assets/work/Elementor_Challenge.png",
    live: "https://elementor-challenge-git-main-razien-mackenzies-projects.vercel.app/",
    github: "https://github.com/CodeBroke33/elementorChallenge",
  },
  {
    num: "06",
    category: "fullstack",
    title: "project 6",
    description:
      "I collaborated in a team to develop a full-stack application using HTML, CSS, JavaScript, Python, Flask, and an API. This project involved both frontend and backend development, showcasing our ability to integrate diverse technologies and work effectively in a group setting.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Flask" },
      { name: "Python" },
    ],
    image: "/assets/work/weatherApp_Collab.png",
    live: "https://weather-report-ochre.vercel.app/",
    github: "https://github.com/GSamuels5/Weather_report",
  },
  {
    num: "07",
    category: "frontend",
    title: "project 7",
    description:
      "I Developed an interactive BMI calculator using HTML, CSS, and JavaScript, demonstrating my ability to create user-friendly web applications with clean, responsive design and efficient functionality.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/BMI_Calculator.png",
    live: "https://codebroke33.github.io/JSBMIcalculator/",
    github: "https://github.com/CodeBroke33/JSBMIcalculator",
  },
  {
    num: "08",
    category: "fullstack",
    title: "project 8",
    description:
      "I Played a key role in developing a cutting-edge full-stack HR management system for the startup SoftLife Tec. Utilized PHP, JavaScript, HTML, CSS, and MySQL to create a robust and dynamic platform, showcasing my ability to contribute to innovative solutions and collaborate effectively within a startup environment.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    image: "/assets/work/SoftLifes_Registry.png",
    live: "https://register.lcstudio.co.za/",
    github: "https://github.com/GSamuels5/booking-system",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-center items-center pt-8 px-4 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse xl:flex-row xl:gap-[30px] justify-center items-center">
          {/* Text Section */}
          <ScrollArea className="w-full xl:w-[40%] flex flex-col justify-between mb-8 xl:mb-0 h-[460px]">
            {project && (
              <div className="flex flex-col gap-[30px]">
                <div className="text-6xl sm:text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category}
                </h2>
                <p className="text-white/60 text-sm sm:text-base">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 sm:gap-4">
                  {project.stack.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base text-accent whitespace-nowrap"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center cursor-pointer hover:bg-white/10 transition-all">
                          <BsArrowUpRight className="text-2xl sm:text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>View Live Project</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center cursor-pointer hover:bg-white/10 transition-all">
                          <BsGithub className="text-2xl sm:text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>View GitHub Repository</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            )}
          </ScrollArea>
          {/* Image Section */}
          <div className="w-full xl:w-[60%] relative mb-8 xl:mb-0">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="h-[300px] sm:h-[400px] md:h-[460px] rounded-lg overflow-hidden"
              ref={swiperRef}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <div className="relative w-full h-full group flex justify-center items-center bg-pink-50/20">
                   {/* overlay */}
                   <div></div>
                   {/* image */}
                   {/* <div className="relative w-full h-full">
                            <Image 
                             src={project.image} 
                             fill
                             className="object-cover"
                             />
                       </div> */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 transition-all rounded-full p-2 border border-black"
            >
              <BsChevronLeft className="text-2xl text-black" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 transition-all rounded-full p-2 border border-black"
            >
              <BsChevronRight className="text-2xl text-black" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
