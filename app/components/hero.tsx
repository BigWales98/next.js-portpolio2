import React from 'react'
import Animation from './animation'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='flex flex-col items-center justify-between md:flex-row'>
        <div className="flex flex-col items-center max-w-screen-lg mb-16 text-center lg:flex-grow md:w-full lg:pr-32 md:pr-16 md:items-start md:text-left md:mb-0">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 title-font sm:text-4xl">
                안녕하세요 풀스택개발자가 되고픈 <br />1인 입니다.
                <br className="hidden lg:inline-block"/>
                오늘도 빡코딩?
                </h1>
                <p className="mb-8 leading-relaxed">
                  저는 현재 KISIA에서 주관하는 S-개발자 2기 프로젝트에 참여하고 있으며,<br />
                  처음엔 백엔드 개발 및 관리에 관심이 있어 시스템 엔지니어 쪽으로 공부해나가고 있었습니다만,
                  <br />현재는 웹이나 보안에도 관심이 생겨 지금은 다방면으로 개발할 수 있는 인력이 될 수 있도록 공부 중 입니다.
                  
                  </p>
            <div className="flex justify-center">
              <Link href="/projects" className="btn-project">
                  프로젝트 보러가기
              </Link>
              
            </div>
        </div>
        
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <Animation />     
        </div>
    </div>
  )
}
