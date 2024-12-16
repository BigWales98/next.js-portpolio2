"use client";

import dynamic from 'next/dynamic'

// Lottie를 동적으로 불러오기
const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false // 서버 사이드 렌더링 비활성화
})

import lottieJson2 from './Animation2.json'

export default function Animation2() {
  return (
    <Lottie
      loop
      animationData={lottieJson2}
      play
      style={{width: 500, height: 500}}      
    />
  )
}