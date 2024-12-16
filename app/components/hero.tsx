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
                  올해(2024) KISIA에서 주관하는 S-개발자 2기 수료후,<br />
                  폭넓은 역량 확보를 위해 1주일에 1개 프로젝트 이상 깃허브 업로드가
                  <br />목표이지만... 솔직히 힘들어요~~ ㅠㅠ
                  
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
