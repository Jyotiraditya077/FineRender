import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Steps = () => {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center my-16 px-4"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center drop-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How it works
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-base sm:text-lg text-gray-700 mb-6 text-center font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Transform words into stunning visuals with just a few steps.
      </motion.p>

      {/* Step Cards */}
      <div className="flex flex-col gap-4 w-full max-w-4xl">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-[1.01]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Animated Step Bubble */}
            <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 animate-pulse blur-sm opacity-30" />
              <div className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-600 font-bold shadow-inner text-sm">
                {index + 1}
              </div>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <img src={item.icon} alt="" className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
