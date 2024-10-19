import React from 'react';
import ProjectItem from './project-item'; // 상대경로 조정

// Project 인터페이스 선언
interface Project {
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
      rich_text: {
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
}

// 서버에서 데이터를 가져오는 비동기 함수 (getServerSideProps 방식 대신)
async function getProjects(): Promise<Project[]> {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`, // 환경변수에서 API 토큰 불러옴
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'title',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, options);

  if (!res.ok) {
    const errorData = await res.json();
    console.error('Failed to fetch data:', errorData);
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data.results;
}

// 서버 컴포넌트
export default async function Projects() {
  const projects = await getProjects(); // 프로젝트 데이터 서버에서 가져옴

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8'>
      <h2 className="text-4xl font-bold text-center mb-8">
        총 프로젝트 : 
        <span className="pl-4 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
          {projects.length}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectItem key={project.id} data={project} />
          ))
        ) : (
          <p>프로젝트를 불러올 수 없습니다.</p>
        )}
      </div>
    </div>
  );
}
