import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const isMobile = window.innerWidth <= 768;

const Description = () => {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center my-16 sm:my-24 px-4 sm:px-8 lg:px-28"
      {...(!isMobile && {
        initial: { opacity: 0.2, y: 100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1 },
        viewport: { once: true },
      })}
      style={isMobile ? { opacity: 1, transform: 'none' } : {}}
    >
      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-gray-900 drop-shadow text-center"
        {...(!isMobile && {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          viewport: { once: true },
        })}
        style={isMobile ? { opacity: 1, transform: 'none' } : {}}
      >
        Create AI Images
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 font-medium text-center max-w-xl"
        {...(!isMobile && {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          viewport: { once: true },
        })}
        style={isMobile ? { opacity: 1, transform: 'none' } : {}}
      >
        Turn your imagination into <span className="text-purple-600">visuals</span>
      </motion.p>

      {/* Card Section */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 sm:gap-14 md:gap-16 items-center w-full max-w-6xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] p-6 sm:p-10"
        {...(!isMobile && {
          initial: { scale: 0.95, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          transition: { duration: 0.6 },
          viewport: { once: true },
        })}
        style={isMobile ? { opacity: 1, transform: 'none' } : {}}
      >
        {/* Image with Glow */}
        <motion.div
          className="relative w-full sm:w-[80%] md:w-auto"
          {...(!isMobile && {
            initial: { scale: 0.8, opacity: 0 },
            whileInView: { scale: 1, opacity: 1 },
            transition: { duration: 0.8 },
          })}
          style={isMobile ? { opacity: 1, transform: 'none' } : {}}
        >
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 blur-2xl opacity-30 -z-10 animate-pulse" />
          <img
            src={assets.sample_img_1}
            className="w-full sm:w-80 xl:w-96 rounded-xl shadow-md"
            alt="sample"
          />
        </motion.div>

        {/* Textual Description */}
        <motion.div
          className="flex flex-col gap-4 text-gray-700 w-full max-w-xl"
          {...(!isMobile && {
            initial: { opacity: 0, x: 50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.2 },
            viewport: { once: true },
          })}
          style={isMobile ? { opacity: 1, transform: 'none' } : {}}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug mb-1">
            Introducing the <span className="text-purple-600">AI-Powered</span>
            <br className="hidden sm:block" /> Text to Image Generator
          </h2>

          <p className="text-sm sm:text-base leading-relaxed">
            Easily bring your <span className="text-blue-500 font-medium">ideas to life</span> with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From
            <span className="text-green-600 font-medium"> product visuals</span> to
            <span className="text-pink-600 font-medium"> character designs</span> and even concepts that don’t yet exist — creativity has no limits!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Description;
