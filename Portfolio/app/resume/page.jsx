"use client";

import { initScriptLoader } from "next/script";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDocker, SiKubernetes, SiOracle, SiPostgresql, SiTypescript, SiCplusplus, SiSupabase } from "react-icons/si";

const about = {
    title : "About Me",
    description : "I am a full stack developer with a passion for creating beautiful and functional web applications. I have experience in building web applications using React, Node.js, and MongoDB. I am also familiar with Docker and Express.js. I am always looking to learn new technologies and improve my skills.",
    info : [
        {
            fieldName : "Name",
            fieldValue : "Tanvir Hasan Abir"
        },

        {
            fieldName : "Phone",
            fieldValue : "+880 1816573159"
        },

        {
            fieldName : "Experience",
            fieldValue : "1+ years"
        },

        {   
            fieldName : "Email",
            fieldValue : "bss1321@iit.du.ac.bd"
        },

        {
            fieldName : "Nationality",
            fieldValue : "Bangladeshi"
        
        },

        {
            fieldName : "Languages",
            fieldValue : "English, Bengali"
        },

        {
            fieldName : "Freelance",
            fieldValue : "Available"
        }
    ]
}

const experience = {
    icon : "/assets/resume/badge.svg",
    title : "Experience",
    description : "I have experience in building web applications using React, Node.js, and MongoDB. I have also worked with Docker and Express.js.",
    items : [
        {
            company : "IIT Software Engineers' Community (IITSEC)",
            position : "Organizing Secretary",
            duration : "2024 - Present",
        }, 

        {
            company : "Govt. Science College Science Club (GSCSC)",
            position : "General Member",
            duration : "2018 - 2020",
        },
    ]
}

const education = {
    icon : "/assets/resume/cap.svg",
    title : "Education",
    description : "I am completing my Bachelor's Sciece in Software Enginerring from University of Dhaka.",
    items : [
        {
            institution : "University of Dhaka",
            degree : "Bachelor's Sciece in Software Enginerring",
            duration : "2020 - Present",
            // result : "CGPA : 3.81/4.00"
        },
        {
            institution : "Govt. Science College",
            degree : "Higher Secondary Certificate",
            duration : "2018 - 2020",
            result : "GPA : 5.00/5.00"
        },
        // {
        //     institution : "Brahmondi K K M Govt.High School",
        //     degree : "Secondary School Certificate",
        //     duration : "2012 - 2018",
        //     result : "GPA : 5.00/5.00"
        // }
    ]
}



const skills = {
  languages: {
    title: "Languages",
    description: "A diverse set of programming languages proficiently used to develop efficient and scalable applications.",
    items: [
      {
        name: "JavaScript",
        icon: <FaJs />,
      },
      {
        name: "Python",
        icon: <FaPython />,
      },
      {
        name: "Java",
        icon: <FaJava />,
      },
    //   {
    //     name: "TypeScript",
    //     icon: <SiTypescript />,
    //   },
      {
        name: "HTML5",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS3",
        icon: <FaCss3 />,
      },
      {
        name: "C++",
        icon: <SiCplusplus />,
      },
      
    ],
  },
  tools: {
    title: "Tools",
    description: "A set of powerful tools used for development, design, and deployment of projects.",
    items: [
      {
        name: "Docker",
        icon: <SiDocker />,
      },
    //   {
    //     name: "Kubernetes",
    //     icon: <SiKubernetes />,
    //   },
      {
        name: "Figma",
        icon: <FaFigma />,
      },
      {
        name: "Oracle",
        icon: <SiOracle />,
      },
    //   {
    //     name: "PostgreSQL",
    //     icon: <SiPostgresql />,
    //   },
      {
        name: "Git",
        icon: <FaGitAlt />,
      },
      
    ],
  },
  librariesAndFrameworks: {
    title: "Libraries & Frameworks",
    description: "Libraries and frameworks leveraged to accelerate development and ensure robust application architecture.",
    items: [
      {
        name: "React",
        icon: <FaReact />,
      },
    //   {
    //     name: "Next.js",
    //     icon: <SiNextdotjs />,
    //   },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
      },
    //   {
    //     name: "Supabase",
    //     icon: <SiSupabase />,
    //   },
      
    ],
  },
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 , transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}}} 
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">

            <div className="container mx-auto">
                <Tabs defaultValue="Experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        
                        <TabsTrigger value="Experience" >Experience</TabsTrigger>
                        <TabsTrigger value="Education" >Education</TabsTrigger>
                        <TabsTrigger value="Skills">Skills</TabsTrigger>
                        <TabsTrigger value="About">About</TabsTrigger>

                    </TabsList> 

                    {/** Tabs Content */}

                    <div className="min-h-[70vh] w-full">

                        <TabsContent value="Experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                                    {experience.description}
                                </p>
                                
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" >
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"> 
                                                        {item.position}
                                                    </h3>

                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] bg-accent rounded-full">
                                                        </span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>

                        </TabsContent>

                        <TabsContent value="Education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                                {education.description}
                                </p>
                                
                                <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1"
                                    >
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                        {item.degree}
                                        </h3>

                                        <div className="flex items-center gap-3">
                                        <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                        <p className="text-white/60">{item.institution}</p>
                                        </div>
                                        
                                        <p className="text-white/60">{item.result}</p> 
                                    </li>
                                    ))}
                                </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="Skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                {/* Languages Section */}
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.languages.title}</h3>
                                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                                    {skills.languages.description}
                                </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.languages.items.map((skill, index) => (
                                    <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                            {skill.icon}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    </li>
                                ))}
                                </ul>

                                {/* Tools Section */}
                                <div className="flex flex-col gap-[30px] text-center xl:text-left mt-[40px]">
                                <h3 className="text-4xl font-bold">{skills.tools.title}</h3>
                                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                                    {skills.tools.description}
                                </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.tools.items.map((skill, index) => (
                                    <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                            {skill.icon}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    </li>
                                ))}
                                </ul>

                                {/* Libraries & Frameworks Section */}
                                <div className="flex flex-col gap-[30px] text-center xl:text-left mt-[40px]">
                                <h3 className="text-4xl font-bold">{skills.librariesAndFrameworks.title}</h3>
                                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                                    {skills.librariesAndFrameworks.description}
                                </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.librariesAndFrameworks.items.map((skill, index) => (
                                    <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                            {skill.icon}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </TabsContent>


                        <TabsContent value="About" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                                    {about.description}
                                </p>

                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

        </motion.div>
    );
}

export default Resume;