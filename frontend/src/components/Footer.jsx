import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img width={80} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>© 2025 FineRender — All Rights Reserved.</p>
      <div className="flex gap-2.5">
      <a
        href="https://x.com/Jyotiraditya077?t=DWuC-kZs3R-QgY6bM3ESPQ&s=09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img width={35} src={assets.twitter_icon} alt="Twitter" />
      </a>
      <a
        href="https://www.instagram.com/justtt.rixhi_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img width={35} src={assets.instagram_icon} alt="Instagram" />
      </a>
    </div>

    </div>
  )
}

export default Footer