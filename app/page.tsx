import React from "react";
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('./components/hero'), {
  ssr: false
});


export const metadata = {
  title: "KeonWoo's 포트폴리오",
  description: '포트폴리오 홈페이지입니다.',
};

export default function Home() {
  return (
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Hero />
          </div>
        </section>
      </div>

    
  );
}
