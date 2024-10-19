import React from 'react'
import Animation from './animation'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                안녕하세요 풀스택개발자가 되고픈 <br />1인 입니다.
                <br className="hidden lg:inline-block"/>
                오늘도 빡코딩?
                </h1>
                <p className="mb-8 leading-relaxed">국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 대통령은 헌법과 법률이 정하는 바에 의하여 공무원을 임면한다. 국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다. 대통령의 임기는 5년으로 하며, 중임할 수 없다. 형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.</p>
            <div className="flex justify-center">
              <Link href="/projects" className="btn-project">
                  프로젝트 보러가기
              </Link>
              
            </div>
        </div>
        
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />     
        </div>
    </div>
  )
}
