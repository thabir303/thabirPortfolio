"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";


const services = [
    {
      num: '01',
      title: 'Frontend Development',
      description: 'I specialize in building responsive and dynamic user interfaces using modern frontend technologies. My focus is on creating visually appealing, user-friendly, and high-performance applications.',
      href: "",
    },
    {
      num: '02',
      title: 'Backend Development',
      description: 'I provide backend development services to ensure robust and scalable server-side solutions. I design and implement APIs, manage databases, and provide seamless integration with frontend systems.',
      href: "",
    },
    {
      num: '03',
      title: 'DevOps',
      description: 'I offer comprehensive DevOps services to streamline development, deployment, and operations. My practices include CI/CD, infrastructure as code, and cloud services to enhance productivity and reliability.',
      href: "",
    },
    {
      num: '04',
      title: 'Gen AI Projects',
      description: 'With expertise in Generative AI, I develop innovative solutions leveraging advanced machine learning and AI techniques. My projects include natural language processing, image generation, and more.',
      href: "",
    },
  ];
  

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4 , ease: 'easeIn' } }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >

                {services.map((service, index) => {
                    return (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>

                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45">
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>

                            {/* Heading */}

                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>

                            {/* Description */}
                            <p className="text-white/60 group-hover:text-white transition-all duration-500">
                                {service.description}
                            </p>

                            {/* Border */}

                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    );
                }
                )}
                </motion.div>
            </div>
        </section>
    );
    };

export default Services;