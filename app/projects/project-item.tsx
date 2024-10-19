import React from 'react';
import Image from 'next/image';

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
    };
  };
}

// 클라이언트 컴포넌트
const ProjectItem: React.FC<ProjectItemProps> = ({ data }) => {
  const { 이름, Description, 태그, Workperiod, Github } = data.properties;
  const coverImageUrl = data.cover?.external?.url || '/default-image.png';
  
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
          <p>설명이 없습니다.</p>
        )}


        {/* 프로젝트 기간 (조건부 렌더링) */}
        {Workperiod && (
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
            기간: {Workperiod.date.start} ~ {Workperiod.date.end}
          </p>
        )}

        {/* 태그 (조건부 렌더링) */}
        {태그 && (
          <div className="flex items-start mt-2">
            {태그.multi_select.map((tag) => (
              <span key={tag.name} className={`inline-block bg-${tag.color}-200 dark:bg-${tag.color}-700 text-${tag.color}-800 dark:text-${tag.color}-200 text-sm px-2 py-1 rounded mr-2 font-bold`}>
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Github 링크 */}
        {Github?.url && (
          <div className='mt-4'>
            <a href={Github.url} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
              GitHub 바로가기
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
