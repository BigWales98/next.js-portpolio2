//"use client"

import React, { ReactNode } from 'react';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';
import { ThemeProvider } from 'next-themes';


export default function Layout({ children }: {children: ReactNode}) {
  return (
    <html lang="ko">
      <body>
      <ThemeProvider attribute='class'>
        <div className='bg-primary'>
          <Header />
        
          <main>{children}</main>

          <Footer />
        </div>
      </ThemeProvider>
      </body>
    </html>
  )    
}
