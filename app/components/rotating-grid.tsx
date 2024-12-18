'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FaProjectDiagram, FaPhoneAlt, FaImages, FaGithub, FaGraduationCap, FaUsers } from 'react-icons/fa';

const menuItems = [
  {
    href: 'https://next-js-portfolio-seven-plum.vercel.app/',
    icon: <FaGraduationCap size={25} />,
    title: 'Midterm',
    angle: -90
  },
  {
    href: 'https://finalteam.vercel.app/',
    icon: <FaUsers size={25} />,
    title: '팀플',
    angle: -30
  },
  {
    href: '/projects',
    icon: <FaProjectDiagram size={25} />,
    title: '프로젝트',
    angle: 30
  },
  {
    href: 'https://open.kakao.com/o/gdzReiVg',
    icon: <FaPhoneAlt size={25} />,
    title: '연락하기',
    angle: 90
  },
  {
    href: '/gallery',
    icon: <FaImages size={25} />,
    title: '갤러리',
    angle: 150
  },
  {
    href: 'https://github.com/BigWales98',
    icon: <FaGithub size={25} />,
    title: 'GitHub',
    angle: 210
  }
];

export default function RotatingGrid() {
  const radius = 180;
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = async (index: number, href: string) => {
    setSelectedItem(index);
    
    // 애니메이션 후 페이지 이동
    await new Promise(resolve => setTimeout(resolve, 800));
    window.location.href = href;
  };

  return (
    <div className="relative w-[500px] h-[500px] -mt-16 -ml-16">
      <AnimatePresence>
        {menuItems.map((item, index) => {
          const angleInRadians = (item.angle * Math.PI) / 180;
          const x = radius * Math.cos(angleInRadians);
          const y = radius * Math.sin(angleInRadians);

          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                x: selectedItem === index ? -x : 0,
                y: selectedItem === index ? -y : 0,
                zIndex: selectedItem === index ? 50 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: index * 0.1,
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => handleItemClick(index, item.href)}
            >
              <div 
                className={`w-20 h-20 bg-[#f8f9ff] rounded-full flex flex-col items-center justify-center cursor-pointer transition-all
                  ${selectedItem === index ? 'hover:bg-indigo-100 ring-4 ring-indigo-300' : 'hover:bg-indigo-50'}
                `}
              >
                <motion.div 
                  className="text-indigo-600 mb-2"
                  animate={{ 
                    rotate: selectedItem === index ? [0, 360] : 0,
                    scale: selectedItem === index ? [1, 1.2, 1] : 1
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-gray-600 text-sm text-center font-medium">{item.title}</span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
} 