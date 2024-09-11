"use client";

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
    SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt }  from "react-icons/fa"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+27)68 373 5646"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "razienmackenzie@gmail.com" 
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "14 Tagus RdManenberg, Cape Town, 7767"    

    }

]

import { motion } from "framer-motion";

const Contact  = () => {
    return (
        <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} 
    }}
    className="py-6"
    >
        <div  className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* form */}
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Let's work together</h3>
                        <p className="text-white/60">I'm always looking for opportunities to collaborate on projects that push boundaries and bring unique ideas to life. Whether you're in need of full-stack development, creative UI design, or optimizing digital experiences, let's create something exceptional together. Reach out, and let's build the future.

</p>
                    </form>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">info</div>
            </div>
        </div>
    </motion.section>
    )
}

export default Contact