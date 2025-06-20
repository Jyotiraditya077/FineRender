import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import GlowText from '../components/GlowText'; // Adjust the path as needed
import Stack from './Stack';

const imageStack = [
  { id: 1, img: assets.sample_img_1 },
  { id: 2, img: assets.sample_img_2 },
  { id: 3, img: assets.sample_img_3 },
  { id: 4, img: assets.sample_img_1 },
  { id: 5, img: assets.sample_img_2 },
  { id: 6, img: assets.sample_img_3 },
];


const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20 px-4"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Tagline Badge */}
      <motion.div
  className="relative inline-flex items-center gap-2 px-6 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/50 shadow-lg ring-1 ring-inset ring-white/20 text-sm sm:text-base text-neutral-800 font-medium overflow-hidden"
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.8 }}
>
  <span className="relative z-10">Best text to image generator</span>
  <img src={assets.star_icon} alt="star" className="relative z-10 h-5 w-5" />

  {/* Sparkle Animation */}
  <span className="absolute inset-0 z-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-shimmer [mask-image:linear-gradient(120deg,transparent,white,transparent)] opacity-40" />
</motion.div>


      {/* Heading */}
      <motion.h1
        className="text-center mx-auto mt-10 text-4xl max-w-[320px] sm:text-6xl sm:max-w-[580px] font-bold leading-[1.2] text-zinc-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
      >
        Turn text to{' '}
        <GlowText className="bg-gradient-to-r from-fuchsia-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
          image
        </GlowText>
        , in seconds.
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-center max-w-xl mx-auto mt-5 text-zinc-800 text-base sm:text-lg font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash your creativity with AI. Turn your imagination into visual art in seconds — just type, and watch the magic happen.
      </motion.p>

      {/* Dotted Button */}
      <motion.button
        className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 mt-8 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
        onClick={onClickHandler}
      >
        Generate Images
      </motion.button>

      {/* Image Previews */}
      <motion.div
  className="mt-20 flex justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
>
  <Stack
    randomRotation={false}
    sensitivity={180}
    sendToBackOnClick={false}
    cardDimensions={{ width: 300, height: 300 }}
    cardsData={imageStack}
  />
</motion.div>

      {/* Subtext */}
      <motion.p
        className="mt-3 text-zinc-700 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Generated images from FineRender
      </motion.p>
    </motion.div>
  );
};

export default Header;
