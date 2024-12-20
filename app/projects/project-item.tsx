import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

interface ProjectItemProps {
  data: {
    id: string;
    cover?: {
      external?: {
        url: string;
      };
    };
    properties: {
      이름: {
        title: {
          plain_text: string;
        }[];
      };
      Description?: {
        rich_text?: {
          plain_text: string;
        }[];
      };
      태그?: {
        multi_select: {
          name: string;
          color: string;
        }[];
      };
      Workperiod?: {
        date: {
          start: string;
          end: string;
        };
      };
      Github?: {
        url: string;
      };
      Vercel?: {
        url: string;
      };
    };
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ data }) => {
  const { 이름, Description, 태그, Workperiod, Github, Vercel } = data.properties;
  const coverImageUrl = data.cover?.external?.url || '/images/default-project-cover.jpg';
  
  return (
    <div className="project-card">
      {/* 프로젝트 커버 이미지 */}
      <Image 
        src={coverImageUrl} 
        alt={이름.title[0].plain_text} 
        className="w-full h-48 object-cover"
        width={500}
        height={300}
        priority={true}
      />

      <div className="p-6">
        {/* 프로젝트 이름 */}
        <h2 className="text-2xl font-bold mb-2">{이름.title[0].plain_text}</h2>

        {/* 프로젝트 설명 (조건부 렌더링) */}
        {Description?.rich_text && Description.rich_text.length > 0 ? (
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {Description.rich_text[0]?.plain_text || '설명이 없습니다.'}
          </p>
        ) : (
          <p className="text-gray-600 dark:text-gray-300 mb-4">설명이 없습니다.</p>
        )}

        {/* 프로젝트 기간 (조건부 렌더링) */}
        <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
          기간: {
            Workperiod?.date?.start && Workperiod?.date?.end 
              ? `${Workperiod.date.start} ~ ${Workperiod.date.end}`
              : '기간을 설정하세요'
          }
        </p>

        {/* 태그 (조건부 렌더링) */}
        {태그 && (
          <div className="flex flex-wrap items-start mt-2 gap-2">
            {태그.multi_select.map((tag) => (
              <span 
                key={tag.name} 
                className={`
                  inline-block 
                  bg-${tag.color}-200 
                  dark:bg-${tag.color}-700 
                  text-${tag.color}-800 
                  dark:text-${tag.color}-200 
                  text-sm 
                  px-2 
                  py-1 
                  rounded 
                  font-bold
                  max-w-[100px]
                  truncate
                `}
                title={tag.name}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Github & Vercel 링크 */}
        <div className='mt-4 flex gap-4'>
          {Github?.url && (
            <a 
              href={Github.url.startsWith('http') ? Github.url : `https://${Github.url}`}
              target='_blank' 
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline flex items-center gap-2'
            >
              <FaGithub size={20} />
              GitHub
            </a>
          )}
          {Vercel?.url && (
            <a 
              href={Vercel.url.startsWith('http') ? Vercel.url : `https://${Vercel.url}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:underline flex items-center gap-2"
            >
              <svg height="20" viewBox="0 0 76 65" fill="currentColor">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"></path>
              </svg>
              Vercel
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
