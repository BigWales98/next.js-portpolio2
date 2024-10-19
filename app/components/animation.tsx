"use client";

import React, { useRef } from 'react'
import Lottie from 'react-lottie-player'

// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from './Animation.json'

export default function Animation() {
    const ref = useRef();

  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      
      
    />
  )
}