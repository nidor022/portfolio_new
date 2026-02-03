import Image from 'next/image';

interface Project {
  title: string;
  tech: string;
  github: string;
  image: string;
}

interface CompanyProject {
  title: string;
  description: string;
  details?: string;
  tags: string[];
}

export default function Projects() {
  const academyProjects: Project[] = [
    {
      title: '밀키트 프로젝트',
      image: '/assets/img/buenomain.jpg',
      tech: 'React, JavaScript',
      github: 'https://github.com/nidor022/mealkit',
    },
    {
      title: '숙박시설 예약사이트',
      image: '/assets/img/travelmain.jpg',
      tech: 'Spring, JSP, MySQL',
      github: 'https://github.com/nidor022/spring_travel',
    },
  ];

  const bootcampProjects: Project[] = [
    {
      title: 'Rolling 롤링페이퍼',
      image: '/assets/img/rolling.png',
      tech: 'React, TypeScript',
      github: 'https://github.com/nidor022/rolling',
    },
    {
      title: 'Taskify 일정관리 사이트',
      image: '/assets/img/taskify.png',
      tech: 'Next.js, TypeScript',
      github: 'https://github.com/nidor022/Taskify',
    },
    {
      title: 'PlanGo (심화)',
      image: '/assets/img/plango.png',
      tech: 'Next.js, TypeScript, 팀협업',
      github: 'https://github.com/nidor022/Plango',
    },
  ];

  const companyProjects: CompanyProject[] = [
    {
      title: '전문의 국가시험 문제은행 시스템',
      description: '설문 페이지, 응시자 자리배치 및 출력, 문항 관리 등 기능 개발 및 버그 수정',
      tags: ['JSP', 'Java', 'PostgreSQL'],
    },
    {
      title: '의대 학부 내 문제은행 시스템 유지보수',
      description:
        '기능 추가, 개선 및 버그 수정 (설문, 응시자배정, 인력관리, 카테고리 관리, 답안출력 등)',
      details:
        '기술스택: JSP, Java Spring, PostgreSQL, MySQL, Oracle | 배포: Git 버전관리, Linux, SVN',
      tags: ['JSP', 'Spring', 'MySQL', 'Oracle', 'Git'],
    },
    {
      title: '바이오헬스 혁신융합대학 학사관리 시스템',
      description: '교수, 학생, 수강페이지, 관리자, 비교과, 성과플랫폼 등 학사관리 시스템 개발',
      details:
        '강의 수강페이지, 출석관리, 성적평균, 학적, 강의평가(설문), SMS 발송/인증 등 전반적인 강의 생성, 수강, 출석, 점수산출, 수강신청 및 기타 기능 담당 | 기술스택: Vue.js, Java Spring Boot, PostgreSQL | 배포: Git(GitLab) 버전관리, Linux, Jenkins',
      tags: ['Vue.js', 'Spring Boot', 'PostgreSQL', 'Jenkins'],
    },
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="about-item container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">프로젝트</h2>

        {/* 학원 프로젝트 */}
        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-semibold text-gray-900">학원 프로젝트</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {academyProjects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="bg-opacity-0 group-hover:bg-opacity-70 absolute inset-0 flex items-center justify-center bg-black transition-all">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <span className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900">
                        GitHub 보기
                      </span>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">{project.title}</h4>
                  <p className="text-gray-600">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 부트캠프 프로젝트 */}
        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-semibold text-gray-900">부트캠프 프로젝트</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {bootcampProjects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="bg-opacity-0 group-hover:bg-opacity-70 absolute inset-0 flex items-center justify-center bg-black transition-all">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <span className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900">
                        GitHub 보기
                      </span>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">{project.title}</h4>
                  <p className="text-gray-600">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 회사 프로젝트 */}
        <div>
          <h3 className="mb-8 text-2xl font-semibold text-gray-900">회사 프로젝트</h3>
          <div className="space-y-6">
            {companyProjects.map((project) => (
              <div key={project.title} className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h4 className="mb-3 text-xl font-semibold text-gray-900">{project.title}</h4>
                <p className="mb-3 text-gray-700">{project.description}</p>
                {project.details && (
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{project.details}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
