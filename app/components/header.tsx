import React from 'react'
import Link from 'next/link'
import DarkModeToggleButton from './dark-mode-toggle-button'

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">KeonWoo&apos;s 포트폴리오 V2</span>
          </Link>
          
          
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
                홈
            </Link>

            <Link href="/projects" className="mr-5 hover:text-gray-900">
                프로젝트
            </Link>
            
            <Link href="https://open.kakao.com/o/gdzReiVg" className="mr-5 hover:text-gray-900">
                연락하기
            </Link>
            
            <Link href="/gallery" className="mr-5 hover:text-gray-900">
                갤러리
            </Link>
            
            <Link 
              href="https://next-js-portfolio-seven-plum.vercel.app/" 
              className="mr-5 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
                Midterm
            </Link>

            <Link 
              href="https://finalteam.vercel.app/" 
              className="mr-5 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
                팀플
            </Link>
          </nav>
          {/*다크모드 토글 버튼 작업공간 */}
          <DarkModeToggleButton />
        </div>
        </header>
  )
}
