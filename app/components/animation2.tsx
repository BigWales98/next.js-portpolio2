"use client";

//import React, { useRef } from 'react'
import Lottie from 'react-lottie-player'

// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson2 from './Animation2.json'

export default function Animation2() {
    //const ref = useRef();

  return (
    <Lottie
      loop
      animationData={lottieJson2}
      play
      style={{width: 500, height: 500}}      
    />
  )
}