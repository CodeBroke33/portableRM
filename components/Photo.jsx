"use client"; // This directive is used in Next.js for components that need to run on the client side.

import { motion } from "framer-motion"; // Importing 'motion' from 'framer-motion' library, which allows for animations in React components.
import Image from "next/image"; // Importing 'Image' component from Next.js, which optimizes images for faster loading.

const Photo = () => { // Defining a functional React component called 'Photo'.
    return (
        <div className="w-full h-full relative flex justify-center items-center">
            {/* The parent div takes up the full width and height of its container,
                is positioned relative (to contain absolutely positioned children),
                and centers its contents both horizontally and vertically. */}
            <motion.div 
                initial={{ opacity: 0 }} // The initial opacity of the div is set to 0 (invisible).
                animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }}
                // The div fades in to full opacity over 0.4 seconds, starting after a 2-second delay.
                className="relative" // This div is also positioned relative to contain absolutely positioned children.
            >
                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }} // The image container starts with an opacity of 0.
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' } }} 
                    // The image fades in over 0.4 seconds, starting 2.4 seconds after the component mounts.
                    className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] mix-blend-lighten rounded-full overflow-hidden relative"
                    // The image container has specific sizes for default and larger screens (xl).
                    // The 'mix-blend-lighten' class applies a blending mode, 'rounded-full' makes it circular,
                    // 'overflow-hidden' ensures that the image stays within the circle, and 'relative' positions it.
                >
                    <Image 
                        src="/assets/ProfilePhoto.png" // Path to the image file.
                        priority // This attribute makes the image load with high priority.
                        quality={100} // Sets the quality of the image to 100 (best quality).
                        width={400} // The width of the image in pixels.
                        height={400} // The height of the image in pixels.
                        alt="" // The alt text is empty; ideally, this should describe the image.
                        className="object-cover" // 'object-cover' ensures the image covers the container without distortion.
                    />
                </motion.div>
                
                {/* circle */}
                <motion.svg 
                    className="absolute inset-0 w-full h-full" // The SVG takes up the full size of the parent and is absolutely positioned to cover it.
                    fill="transparent" // The SVG background is transparent.
                    viewBox="0 0 506 506" // The viewBox defines the coordinate system of the SVG.
                    xmlns="http://www.w3.org/2000/svg" // The XML namespace for the SVG.
                >
                    <motion.circle 
                        cx="253" // The x-coordinate of the circle's center.
                        cy="253" // The y-coordinate of the circle's center.
                        r="250" // The radius of the circle.
                        stroke="#00ff99" // The stroke color of the circle.
                        strokeWidth="4" // The width of the circle's stroke.
                        strokeLinecap="round" // The shape of the stroke ends (rounded).
                        strokeLinejoin="round" // The shape of the stroke corners (rounded).
                        initial={{ strokeDasharray: "24 10 0 0" }} 
                        // The initial dash pattern of the stroke, creating a dashed line effect.
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            // The animation changes the dash pattern over time.
                            rotate: [120, 360], // The circle rotates from 120 to 360 degrees.
                        }}
                        transition={{
                            duration: 20, // The animation duration is 20 seconds.
                            repeat: Infinity, // The animation repeats indefinitely.
                            repeatType: "reverse" // The animation reverses direction on each repeat.
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}

export default Photo; // The 'Photo' component is exported for use in other parts of the application.

