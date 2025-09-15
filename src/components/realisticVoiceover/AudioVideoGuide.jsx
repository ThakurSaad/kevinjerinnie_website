import React, { useState } from "react";
import { motion } from "framer-motion";
import { Music, Upload, Zap } from "lucide-react";

const AudioVideoGuide = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Choose a Template You Love",
      description:
        "Start by picking a video template that catches your eye. Our collection is designed to spark your creativity and help you hit the ground running.",
      gradient: "from-[#327cfe] via-[#276edb] to-[#224477]",
    },
    {
      id: 2,
      title: "Make It Yours",
      description:
        "Customize your video however you like with 247WEB AI easy tools. Dive into our massive library of 100 million+ stock photos and clips.",
      gradient: "from-[#327cfe] via-[#276edb] to-[#224477]",
    },
    {
      id: 3,
      title: "Add Some Style with Filters",
      description:
        "Level up your video by adding stylish filters and smooth transitions. From bokeh blurs to vintage flashbacks, there's a whole collection of effects waiting for you to explore.",
      gradient: "from-[#327cfe] via-[#276edb] to-[#224477]",
    },
    {
      id: 4,
      title: "Bring It to Life with Audio",
      description:
        "Now for the fun part: adding sound! Upload your favorite music or pick a track from 247WEB AI huge audio library. You can trim, fade in, fade out, and even layer multiple tracks to match different parts of your video perfectly.",
      gradient: "from-[#327cfe] via-[#276edb] to-[#224477]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        // damping: 20,
        duration: 0.8,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        // damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        // damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.5,
            }}
          ></motion.div>

          <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl">
            How to Add{" "}
            <span className="text-blue-600 ">Audio to Your Video</span> Online?
          </h1>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative"
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(step.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Border Wrapper */}
              <div
                className={`relative rounded-3xl p-[2px] bg-gradient-to-r ${step.gradient}`}
              >
                <div className="absolute top-0 w-2 h-full bg-blue-600 right-10 rounded-r-xl"></div>
                {/* Inner Card */}
                <div
                  className={`relative bg-white border-blue-500 rounded-3xl p-8 shadow-xl ${step.shadowColor} hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Step Number */}
                  <motion.div
                    className={`absolute top-[150px] border-2 border-[#2870df] bg-transparent -left-4 w-20 h-20 rounded-full  shadow-lg  flex items-center justify-center`}
                    variants={numberVariants}
                    whileHover="hover"
                  >
                    <span className="flex items-center justify-center text-xl font-bold shadow-sm text-white bg-gradient-to-r ${step.gradient} rounded-full w-14 h-14 ">
                      {step.id.toString().padStart(2, "0")}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <motion.h3
                      className="text-2xl font-bold leading-tight text-gray-800"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      // className="text-lg leading-relaxed text-gray-600 "
                      className="overflow-hidden text-lg leading-relaxed text-gray-600 h-28"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.gradient} opacity-0 pointer-events-none`}
                    animate={{ opacity: hoveredCard === step.id ? 0.05 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Decorative Elements */}
                  <div className="absolute w-20 h-20 rounded-full opacity-50 top-4 right-4 bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="absolute w-12 h-12 rounded-full bottom-4 right-8 bg-gradient-to-br from-white/30 to-transparent opacity-30" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AudioVideoGuide;
