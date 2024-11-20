import React from 'react'
import img1 from '../../../assets/safety.jpeg'
import Navbar from '../../../components/header/Navbar'

const Hero = () => {
  return (
    <div className="relative h-screen text-center">
      {/* Setting the image as the background */}
      <div 
        className="w-full h-full absolute top-0 left-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      />
      <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 text-white">
        <div className="mt-8 text-left">
          <p className="text-2xl font-semibold">Q2 2024</p>
          <p className="text-xl">Results Published</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Read Half Year Financial Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
