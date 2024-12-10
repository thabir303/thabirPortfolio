"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+880 1816573159",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "bsse1321@iit.du.ac.bd",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Agargaon,Dhaka,Bangladesh",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        // Send the email using EmailJS
        emailjs
            .send("service_iiji6bu", "template_9d0m2aq", {
                ...formData,
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
            }, "GJX7_f4V1syRStDOh")
            .then(
                (response) => {
                    console.log("Message sent successfully", response);
                    setStatus("Message sent successfully!");
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log("Error sending message:", error);
                    setStatus("Error sending message. Please try again.");
                }
            );
    };

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">I am available for freelance work. Connect with me via the form below.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Select service */}
                            <Select onChange={(e) => setFormData({ ...formData, service: e.target.value })} required>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea
                                className="h-[200px]"
                                name="message"
                                placeholder="Type your message here"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                            {/* Button */}
                            <Button size="md" className="max-w-40" type="submit">
                                Send Message
                            </Button>

                            {/* Status message */}
                            {status && (
                                <div className="text-white mt-4">
                                    <p>{status}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex gap-6 items-center">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;