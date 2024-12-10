"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Full Stack",
        title: "TripMinds : AI-Driven Travel Planner with Itinerary and Weather Integration",
        description: "An AI-driven travel planner with itinerary generation, weather updates, and trip blog creation using the MERN stack, and FastAPI for blog generation and image upload/search.",
        stack: [{ name: "Express.js" }, { name: "Tailwind CSS" }, { name: "Mongodb" }, { name: "React.js" }],
        image: "/assets/work/file (4).png",
        live: "",
        github: "https://github.com/thabir303/TripMinds"
    },
    {
        num: "02",
        category: "AI/Game Development",
        title: "Mini-Chess : AI-Driven Minichess with Minimax and Alpha-Beta Pruning",
        description: "an AI to play Minichess (a simplified 6x5 version of chess) using the Minimax algorithm with alpha-beta pruning to make smart, strategic moves.",
        stack: [{ name: "Express.js" }, { name:"Tailwind CSS" },{ name: "React.js" }],
        image: "/assets/work/Mini_Chess.png",
        live: "",
        github: "https://github.com/thabir303/Mini_Chess_AI"
    },
    {
        num: "03",
        category: "Resource Management",
        title: "IITRLM: IIT Routine & Lab Management System",
        description: "Created a MERN-based system to manage classrooms, labs, and schedules, improving resource optimization and reducing conflicts at IIT, University of Dhaka.",
        stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "Mongodb" }],
        image: "/assets/work/IITRLM.png",
        live: "",
        github: "https://github.com/thabir303/SPL-II"
    }
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ 
                opacity: 1, 
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }} 
            className="min-h-screen flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-8"> 
                    <div className="w-full xl:w-1/2 flex flex-col xl:justify-between order-2 xl:order-none mb-8 xl:mb-0">
                        {/* Project details section */}
                        <div className="flex flex-col gap-6">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>

                            <p className="text-white/60">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-x-2 gap-y-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ", "}
                                    </li>
                                ))}
                            </ul>

                            <div className="border border-white/20"></div>

                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>View code on GitHub</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="h-[500px] mb-12" 
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-full bg-white/5 rounded-lg overflow-hidden shadow-lg">
                                        <Image 
                                            src={project.image} 
                                            alt={project.title} 
                                            layout="fill" 
                                            className="object-contain object-center"
                                            priority
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}

                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-11 h-11 flex items-center justify-center transition-all duration-300" 
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
